import { client } from "@repo/db/client";

const candles = (time: string) => {
  const timesplit = time.split(" ");
  const name = `candle_${timesplit[0]}_${timesplit[1]}`;
  return `
    CREATE MATERIALIZED VIEW ${name}
    WITH (timescaledb.continuous) AS
    SELECT 
        time_bucket('${time}', "timestamp") AS bucket,
        "symbol",
        FIRST("price", "timestamp") AS open,
        MAX("price") AS high,
        MIN("price") AS low,
        LAST("price", "timestamp") AS close,
        SUM("volume") AS volume
    FROM "Trades"
    GROUP BY bucket, "symbol";
  `;
};

async function setup() {
  try {
    // Convert to hypertable (if not already)
    await client.$executeRawUnsafe(`
      SELECT create_hypertable('"Trades"', 'timestamp',migrate_data=>true, if_not_exists => TRUE);
    `);

    // Create continuous aggregates
    const intervals = ['1 minute', '5 minutes', '10 minutes', '30 minutes', '1 hour', '1 day'];
    for (const interval of intervals) {
      const name = `candle_${interval.split(" ")[0]}_${interval.split(" ")[1]}`;
      await client.$executeRawUnsafe(candles(interval));
      await client.$executeRawUnsafe(`
        ALTER MATERIALIZED VIEW ${name}
        SET (timescaledb.materialized_only = false);
      `);
      console.log(` Created ${name}`);
    }

    // Enable compression on base hypertable
    await client.$executeRawUnsafe(`
      ALTER TABLE "Trades" SET (timescaledb.compress, timescaledb.compress_segmentby = 'symbol');
    `);

    // Add compression policy
    await client.$executeRawUnsafe(`
      SELECT add_compression_policy('"Trades"', INTERVAL '7 days');
    `);

    console.log("✅ Setup completed successfully");
  } catch (error: any) {
    console.error(" Error:", error.message);
  }
}

setup();

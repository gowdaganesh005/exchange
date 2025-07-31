import { client } from "@repo/db/client";

const hyperTableRaw = ""

const candles = (time:string)=>{
    const timesplit = time.split(" ")
    const name = `candle_${timesplit[0]}_${timesplit[1]}`;

    return `CREATE MATERIALIZED VIEW 
            WITH (tiimescaledb.continous) AS ${name}
            SELECT 
                time_bucket(${time},timestamp) AS bucket,symbol
                FIRST(price,timestamp) AS open,
                MAX(price) AS high,
                MIN(price) AS low,
                LAST(price,timestamp) AS close,
                SUM(volume) AS volume 
                From trades
                Group by bucket,symbol;
                
                ALTER VIEW ${name} set (timescaledb.materialized_only = false);`
}
async function setup(){
    try{
        await client.$executeRaw`SELECT create_hypertable('trades','timestamp');`
        await client.$executeRaw`${candles('1 minute')}`
        await client.$executeRaw`${candles('5 minutes')}`
        await client.$executeRaw`${candles('10 minutes')}`
        await client.$executeRaw`${candles('30 minutes')}` 
        await client.$executeRaw`${candles('1 hour')}`
        await client.$executeRaw`${candles('1 day')}` 
        // adding compresion  using hyper core which is psql native

        await client.$executeRaw` CALL add_columstore_policy('trades',after => INTERVAL '7 days')`
    
    }catch(error:any){
        console.log(error.message)
    }
}

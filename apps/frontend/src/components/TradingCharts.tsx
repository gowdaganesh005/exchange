import axios from "axios";
import {
  CandlestickSeries,
  createChart,
} from "lightweight-charts";

import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function TradingCharts() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);

  const chartRef = useRef<any>(null);
  const seriesRef = useRef<any>(null);

  const wsRef = useRef<WebSocket | null>(null);

  const [data, setData] = useState<any[]>([]);
  const dataRef = useRef<any[]>([]);

  const buttonContainerRef = useRef<HTMLDivElement | null>(null);
  const activeButtonRef = useRef<HTMLButtonElement | null>(null);

  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);

  const [chartTime, setChartTime] = useState<
    | "1_minute"
    | "5_minutes"
    | "10_minutes"
    | "30_minutes"
    | "1_hour"
    | "1_day"
  >("1_minute");

  /*
  ==========================================
  KEEP REF UPDATED
  ==========================================
  */

  useEffect(() => {
    dataRef.current = data;
  }, [data]);

  /*
  ==========================================
  SLIDER POSITION
  ==========================================
  */

  useEffect(() => {
    const updateSlider = () => {
      if (
        activeButtonRef.current &&
        buttonContainerRef.current
      ) {
        const containerRect =
          buttonContainerRef.current.getBoundingClientRect();

        const buttonRect =
          activeButtonRef.current.getBoundingClientRect();

        setSliderPosition(
          buttonRect.left - containerRect.left
        );

        setSliderWidth(buttonRect.width);
      }
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener(
        "resize",
        updateSlider
      );
    };
  }, [chartTime]);

  /*
  ==========================================
  CREATE CHART
  ==========================================
  */

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(
      chartContainerRef.current,
      {
        width:
          chartContainerRef.current.clientWidth,

        height:
          chartContainerRef.current.clientHeight,

        layout: {
          background: {
            color: "#161921",
          },
          textColor: "#ffffff",
        },

        grid: {
          vertLines: {
            color: "#32353d",
          },
          horzLines: {
            color: "#32353d",
          },
        },

        timeScale: {
          timeVisible: true,
          secondsVisible: false,
          borderColor: "#32353d",
          rightOffset: 5,
          barSpacing: 2,
          minBarSpacing: 1,
        },
      }
    );

    chartRef.current = chart;

    const candlestickSeries =
      chart.addSeries(CandlestickSeries, {
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });

    seriesRef.current = candlestickSeries;
    

    /*
    ==========================================
    RESIZE OBSERVER
    ==========================================
    */

    const resizeObserver = new ResizeObserver(() => {
      if (
        chartContainerRef.current &&
        chartRef.current
      ) {
        chartRef.current.applyOptions({
          width:
            chartContainerRef.current.clientWidth,

          height:
            chartContainerRef.current.clientHeight,
        });
      }
    });

    resizeObserver.observe(
      chartContainerRef.current
    );

    return () => {
      resizeObserver.disconnect();

      chart.remove();

      chartRef.current = null;
      seriesRef.current = null;
    };
  }, []);

  /*
  ==========================================
  FETCH DATA + WS
  ==========================================
  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/candles",
          {
            symbol: "BTC/USDT",
            time: chartTime,
          }
        );

        // const candles = response.data.data;
        const candles = [];

let currentPrice = 18;

let currentTime =
  Math.floor(Date.now() / 1000) - 200 * 60;

for (let i = 0; i < 200; i++) {
  const open = currentPrice;

  let close =
    open + (Math.random() - 0.5) * 1.2;

  close = Math.max(12, Math.min(24, close));

  const high =
    Math.max(open, close) +
    Math.random() * 0.5;

  const low =
    Math.min(open, close) -
    Math.random() * 0.5;

  candles.push({
    time: currentTime,
    open: Number(open.toFixed(2)),
    high: Number(high.toFixed(2)),
    low: Number(low.toFixed(2)),
    close: Number(close.toFixed(2)),
  });

  currentPrice = close;
  currentTime += 60;
}

        setData(candles);

        dataRef.current = candles;

        if (seriesRef.current) {
          seriesRef.current.setData(candles);
        }

        chartRef.current?.timeScale().fitContent();
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    /*
    ==========================================
    WS
    ==========================================
    */

    if (wsRef.current) {
      wsRef.current.close();
    }

    const ws = new WebSocket(
      "ws://localhost:8000"
    );

    wsRef.current = ws;

    const intervalMap = {
      "1_minute": "1m",
      "5_minutes": "5m",
      "10_minutes": "10m",
      "30_minutes": "30m",
      "1_hour": "1h",
      "1_day": "1d",
    };

    const wsInterval =
      intervalMap[chartTime];

    ws.onopen = () => {
        console.log("WS CONNECTED");
        console.log("INTERVAL:", wsInterval);
      ws.send(
        JSON.stringify({
          method: "SUBSCRIBE",
          id: 1,
          params: [
            `kline.${wsInterval}.BTC/USDT`,
          ],
        })
      );
    };

    ws.onmessage = (event) => {
        console.log("RAW WS MESSAGE:", event.data);
      const newCandle = JSON.parse(
        event.data
      ).data;
      console.log("PARSED:", JSON.parse(event.data));

      if (!newCandle) return;
      console.log("NEW CANDLE:", newCandle);

      const prevData =
        dataRef.current || [];

      let updatedData = [];

      if (
        prevData.length &&
        prevData[prevData.length - 1]
          .time === newCandle.time
      ) {
        updatedData = [...prevData];

        updatedData[
          updatedData.length - 1
        ] = newCandle;
      } else {
        updatedData = [
          ...prevData,
          newCandle,
        ];
      }

      dataRef.current = updatedData;

      setData(updatedData);

      if (seriesRef.current) {
        console.log("UPDATING CHART:", newCandle);
        seriesRef.current.update(
          newCandle
        );
      }
    };

    return () => {
      ws.close();
    };
  }, [chartTime]);

  return (
    <div className="h-full w-full bg-[#161921] rounded-md overflow-hidden flex flex-col min-h-0">

      {/* TOP BAR */}
      <div className="relative shrink-0 px-4 pt-2 pb-2">

        {/* SLIDER */}
        <div
          className="absolute top-1 left-0 h-[28px] bg-[#32353d] rounded-md transition-all duration-200"
          style={{
            transform: `translateX(${sliderPosition + 12}px)`,
            width: `${sliderWidth}px`,
          }}
        />

        {/* BUTTONS */}
        <div
          className="relative flex items-center gap-2 z-10"
          ref={buttonContainerRef}
        >
          {[
            {
              label: "1m",
              value: "1_minute",
            },
            {
              label: "5m",
              value: "5_minutes",
            },
            {
              label: "10m",
              value: "10_minutes",
            },
            {
              label: "30m",
              value: "30_minutes",
            },
            {
              label: "1h",
              value: "1_hour",
            },
            {
              label: "1d",
              value: "1_day",
            },
          ].map((item) => (
            <button
              key={item.value}
              ref={
                chartTime === item.value
                  ? activeButtonRef
                  : null
              }
              onClick={() =>
                setChartTime(
                  item.value as any
                )
              }
              className="px-2 py-1 text-sm text-emerald-400 rounded-md relative z-10"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* CHART */}
      <div className="flex-1 min-h-0 w-full">
        <div
          ref={chartContainerRef}
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
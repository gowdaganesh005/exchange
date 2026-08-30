import Card from "@/components/Card.tsx";
import Coin from "@/components/Coin.tsx";
import { LandingPageChart } from "@/components/LandingPageChart.tsx";
import { BarGraph } from "@/components/BarGraph.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useNavigate } from "react-router";


export default function LandingPage() {
  const angle = useMotionValue(0);
  // const THICKNESS = 12;
  const LAYERS = 60;
  const wobble = useMotionValue(0);
  const targetSpeed = useMotionValue(0.01);
  const speed = useSpring(targetSpeed, {
    stiffness: 220,
    damping: 50,
    mass: 0.1,
  });

  useAnimationFrame((t, delta) => {
    angle.set(angle.get() + speed.get() * delta);
  });

  useAnimationFrame((t) => {
    wobble.set(Math.sin(t * 0.004) * 6);
  });

  const navigate = useNavigate();

  return (
    <div className="relative overflow-x-hidden min-h-screen h-screen overflow-y-auto  bg-[#1e1e2e]">
      {/* Background Effects */}
      
      <div className="pointer-events-none fixed left-1/2 top-32 h-[500px] w-[500px] rounded-full bg-[#cba6f785] blur-[120px]" />

      <div className="pointer-events-none fixed  bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-40 rounded-full bg-[#cba6f775] blur-[120px]" />

      <div className=" pointer-events-none fixed right-0 top-1/5 h-[700px] w-[1200px] overflow-hidden">
        <div className="pointer-events-none fixed right-[-140px] top-[250px] h-[400px] w-[900px] rotate-[-35deg] rounded-full border-t-[2px] border-[#cba6f7] bg-[#cba6f717] shadow-[20px_-10px_70px_#cba6f7]" />
      </div>

      <div className="pointer-events-none fixed rounded-2xl w-full  inset-0 bg-[radial-gradient(circle_at_bottom_left,#cba6f78b,transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,1))] blur-sm" />
    


      <div className="relative z-10">
      {/* Center Content */}
      <div className="relative w-full  z-10 flex min-h-180   justify-center px-6">
        <div className=" absolute w-full top-1/4 text-center  rounded-2xl  ">
          <div className=" h-full w-full flex text-center justify-center items-center  px-0 py-1  z-50 ">
            <div className="bg-card/50 rounded-2xl px-2 py-1 hover:border-accent/50">
              {" "}
              SignUp now and Invest in the future now{" "}
            </div>
          </div>
          <h1 className="text-5xl font-medium tracking-tight text-white md:text-7xl">
            <div>
              Transform{" "}
              <span className="font-extrabold text-purple-300">the way</span>
            </div>

            <div>
              you <span className="font-extrabold text-purple-300">trade</span>
            </div>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm text-gray-300 md:text-base">
            Safe and Easy way to trade for everyone
          </p>
          <motion.div
            initial="rest"
            whileHover="hover"
            className="relative inline-flex"
          >
            <motion.div
              variants={{
                rest: {
                  x: -10,
                  y: -6,
                  scale: 1,
                  rotate: 0,
                  opacity: 0.2,
                },
                hover: {
                  x: [-10, 12, -6, 8, -10, -10],
                  y: [-6, 8, 4, -8, -6, -6],
                  scale: [1, 1.08, 0.95, 1.05, 1, 1],
                  rotate: [0, 8, -5, 4, 0, 0],
                  opacity: 1,
                },
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
              className="
      h-5
      my-7
      absolute
      -inset-1
      rounded-full
      blur-xl
      opacity-40
      bg-[linear-gradient(90deg,#a855f7,#89dceb,#f38ba8,#cba6f7)]
      bg-[length:300%_300%]
    "
            />
            <Button
              className="  rounded-4xl text-3xl my-7  px-8 py-8 bg-white/10  backdrop-blur-sm       shadow-[0_8px_32px_rgba(203,166,247,0.5)] text-white  font-semibold
          transition-all duration-300 hover:bg-chart-1/20  hover:border-b-3 hover:border-accent/40 
 "
              onClick={()=>navigate("/signup")}
            >
              Trade now
            </Button>
          </motion.div>
        </div>
        <div
          className="absolute top-1/5 xl:left-2/5 left-1/3 [--coin-size:60px] sm:[--coin-size:72px] md:[--coin-size:96px]  [--coin-thickness:7.5px] sm:[--coin-thickness:9px] md:[--coin-thickness:12px] text-foreground/80 opacity-80"
          style={{ perspective: "1000px" }}
        >
          <Coin
            logo={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M8 256a248 248 0 1 1 496 0 248 248 0 1 1 -496 0zm354.3-35.3c4.9-33-20.2-50.7-54.6-62.6l11.1-44.7-27.2-6.8-10.9 43.5c-7.2-1.8-14.5-3.5-21.8-5.1l10.9-43.8-27.2-6.8-11.2 44.7c-5.9-1.3-11.7-2.7-17.4-4.1l0-.1-37.5-9.4-7.2 29.1s20.2 4.6 19.8 4.9c11 2.8 13 10 12.7 15.8l-12.7 50.9c.8 .2 1.7 .5 2.8 .9-.9-.2-1.9-.5-2.9-.7l-17.8 71.3c-1.3 3.3-4.8 8.4-12.5 6.5 .3 .4-19.8-4.9-19.8-4.9l-13.5 31.1 35.4 8.8c6.6 1.7 13 3.4 19.4 5l-11.3 45.2 27.2 6.8 11.2-44.7c7.2 2 14.4 3.8 21.7 5.6l-11.1 44.5 27.2 6.8 11.3-45.1c46.4 8.8 81.3 5.2 96-36.7 11.8-33.8-.6-53.3-25-66 17.8-4.1 31.2-15.8 34.7-39.9zm-62.2 87.2c-8.4 33.8-65.3 15.5-83.8 10.9l14.9-59.9c18.4 4.6 77.6 13.7 68.8 49zm8.4-87.7c-7.7 30.7-55 15.1-70.4 11.3l13.5-54.3c15.4 3.8 64.8 11 56.8 43z"
                />
              </svg>
            }
          />
        </div>

        <div
          className="absolute  top-1/4 left-3/5 [--coin-size:60px] sm:[--coin-size:72px] md:[--coin-size:96px] [--coin-thickness:7.5px] sm:[--coin-thickness:9px] md:[--coin-thickness:12px] text-foreground/80 opacity-80"
          style={{ perspective: "1000px" }}
        >
          <Coin
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full p-2"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M311.9 260.8L160 353.6 8 260.8 160 0 311.9 260.8zM160 383.4L8 290.6 160 512 312 290.6 160 383.4z"
                />
              </svg>
            }
            wobbleAmount={40}
            direction={-1}
            idleSpeed={0.05}
          />
        </div>

        <div
          className="absolute  top-1/12 left-1/8 [--coin-size:60px] sm:[--coin-size:72px] md:[--coin-size:96px] [--coin-thickness:7.5px] sm:[--coin-thickness:9px] md:[--coin-thickness:12px] text-foreground opacity-80"
          style={{ perspective: "1000px" }}
        >
          <Coin
            logo={
              <svg
                className="p-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M179.2 230.4l102.4 102.4-102.4 102.4-179.2-179.2 179.2-179.2 44.8 44.8-25.6 25.6-19.2-19.2-128 128 128 128 51.5-51.5-77.1-76.5 25.6-25.6zM332.8 76.8l-102.4 102.4 102.4 102.4 25.6-25.6-77.1-76.5 51.5-51.5 128 128-128 128-19.2-19.2-25.6 25.6 44.8 44.8 179.2-179.2-179.2-179.2z"
                />
              </svg>
            }
            wobbleAmount={20}
            idleSpeed={0.02}
          />
        </div>

        <div
          className="absolute  xl:top-2/7 top-3/7 left-1/30 xl:left-1/4 [--coin-size:60px] sm:[--coin-size:72px] md:[--coin-size:96px] [--coin-thickness:7.5px] sm:[--coin-thickness:9px] md:[--coin-thickness:12px] text-foreground/90 opacity-80"
          style={{ perspective: "1000px" }}
        >
          <Coin
            logo={
              <svg
                className="p-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M73.2 512l0-73.1 292.5 0 0-73.2 73.2 0 0-146.3 73.1 0 0-219.4-219.4 0 0 73.1-146.3 0 0 73.2-73.1 0 0 292.6-73.2 0 0 73.1 73.2 0zm73.1-219.4l73.2 0 0 73.1-73.2 0 0-73.1zm73.2-73.1l73.1 0 0 73.1-73.2 0 0-73.2 .1 .1zm73.1 0l0-73.2 73.2 0 0 73.1-73.2 0 0 .1zM365.7 73.1l73.2 0 0 73.2-73.2 0 0-73.2z"
                />
              </svg>
            }
            wobbleAmount={50}
            direction={-1}
            idleSpeed={0.07}
          />
        </div>

        <div
          className="absolute  xl:top-1/2 xl:left-2/3 top-3/7 left-5/7 [--coin-size:60px] sm:[--coin-size:72px] md:[--coin-size:96px] [--coin-thickness:7.5px] sm:[--coin-thickness:9px] md:[--coin-thickness:12px] text-foreground/80 opacity-80"
          style={{ perspective: "1000px" }}
        >
          <Coin
            logo={
              <svg
                className="p-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M86.5 67.2c95.4-89.2 246.1-91.2 343.1 3.8 14.3 14.1-6.4 37.1-22.4 21.5-84.8-82.4-215.8-80.3-298.9-3.2-16.3 15.1-36.5-8.3-21.8-22.1zm98.9 418.6c19.3 5.7 29.3-23.6 7.9-30-112.2-33.9-175.8-149.7-147.5-261 5-19.6-24.9-28.1-30.2-7.1-32.1 127.4 41.1 259.8 169.8 298.1zm148.1-2c121.9-40.2 192.9-166.9 164.4-291-4.5-19.7-34.9-13.8-30 7.9 24.2 107.7-37.1 217.9-143.2 253.4-21.2 7-10.4 36 8.8 29.7zm-62.9-79l.2-71.8c0-8.2-6.6-14.8-14.8-14.8s-14.8 6.7-14.8 14.8l-.2 71.8c0 8.2 6.6 14.8 14.8 14.8s14.8-6.6 14.8-14.8zm71-269c2.1 90.9 4.7 131.9-85.5 132.5-92.5-.7-86.9-44.3-85.5-132.5 0-21.8-32.5-19.6-32.5 0l0 71.6c0 69.3 60.7 90.9 118 90.1 57.3 .8 118-20.8 118-90.1l0-71.6c0-19.6-32.5-21.8-32.5 0z"
                />
              </svg>
            }
            wobbleAmount={10}
            idleSpeed={0.03}
          />
        </div>
        
        
       

      </div>
      <div className="w-full flex justify-center items-center rounded-t-3xl mb-10  ">
          <div className="w-[95%] flex flex-col items-center justify-center bg-card/40 py-5 rounded-4xl xl:max-w-3/5">
            <div className=" relative h-fit p-5 pb-0 overflow-hidden">
              <img className="rounded-t-3xl w-full h-full border-4 border-b-0 border-primary/50 "  src="graph.png" alt="" />
              <div className="pointer-events-none absolute bottom-0 w-[96%] h-10 rounded-full bg-primary/80 blur-xl " />
              <div className="absolute bottom-0 h-24 w-full z-40 bg-primary bg-linear-to-t  blur-3xl " />
              
            </div>
            <div className="h-1 w-full bg-accent" />

            <div className="flex gap-4 text-4xl md:text-6xl font-bold mt-20 ">
              <div> Modern</div> <div className="font-black text-chart-3" > finance.</div>
            </div>
            <div className="px-10 text-xl text-center font-bold text-accent/60 mb-20">
              <div>Your brokerage, your exchange, your money in the same place. </div>
              <div className="text-chart-3/60">Trade, borrow, spend and earn with everything you own working together.</div>
            </div>
            <div className="flex justify-between gap-3 w-full text-center">
              <div className="p-5 ">
                <div className="font-medium text-2xl text-chart-4 ">
                  Licenced in unreal Market
                </div>
                <div className="text-lg font-light">
                  Your Brokerage is registered in the Virtual unreal market
                </div>
              </div>
              <div className="w-1 bg-gray-400/10"/>
              <div className="p-5">
                <div className="font-medium text-2xl text-chart-4 ">
                  Custom Wallet
                </div>
                <div className="text-lg font-light">
                 UnLicenced Wallet for all your asssets
                </div>
              </div>
              <div className="w-1 bg-gray-400/10"/>
              <div className="p-5">
                <div className="font-medium text-2xl text-chart-4 ">
                  Secure Trading
                </div>
                <div className="text-lg font-light">
                 Protected environment for your secure trading
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="w-full flex justify-center mt-96">
      <div
          className="
  
 
  
  
  

  w-[95%]
  max-w-7xl

  grid
  grid-cols-1
  md:grid-cols-3

  gap-5
  px-4
"
        >
          <Card
            whileHover={{
              scale: 1.02,
              y: -8,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
            }}
            className="
group

w-full
max-w-[380px]
mx-auto

h-auto
min-h-[280px]

p-5
lg:p-6




transition-all
duration-300

hover:shadow-[-12px_-8px_40px_rgba(217,200,238,0.20)]
backdrop-blur-3xl
bg-card/50

"
          >
            <Card
              className="w-14
h-14

sm:w-16
sm:h-16

lg:w-20
lg:h-20 p-2 rounded-md shadow-[inset_-12px_-8px_40px_#585b70]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  fill="rgb(177, 151, 252)"
                  d="M567.403 235.642L462.323 84.589A48 48 0 0 0 422.919 64H153.081a48 48 0 0 0-39.404 20.589L8.597 235.642A48.001 48.001 0 0 0 0 263.054V400c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V263.054c0-9.801-3-19.366-8.597-27.412zM153.081 112h269.838l77.913 112H75.168l77.913-112zM528 400H48V272h480v128zm-32-64c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32zm-96 0c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32 32 14.327 32 32z"
                />
              </svg>
            </Card>
            <div className=" pt-12">
              <p className="text-purple-300 font-black text-2xl">
                Zero External Dependecy{" "}
              </p>
              <p className="text-lg">Built on our own matching engine </p>
              <p className="text-lg">without relying on third-party</p>
              <p className="text-lg"> execution. </p>
            </div>
          </Card>

          <Card
            whileHover={{
              scale: 1.02,
              y: -8,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 22,
            }}
            className="
group

w-full
max-w-[380px]
mx-auto

h-auto
min-h-[280px]

p-5
lg:p-6



transition-all
duration-300

hover:shadow-[-12px_-8px_40px_rgba(217,200,238,0.20)]
backdrop-blur-3xl
bg-card/50
"
          >
            <Card
              className="w-14
h-14

sm:w-16
sm:h-16

lg:w-20
lg:h-20 p-4 rounded-md shadow-[inset_-12px_-8px_40px_#585b70] "
            >
              <svg
                fill="rgb(177, 151, 252)"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title />
                <path d="M54,0A42.051,42.051,0,0,0,12,42a41.5989,41.5989,0,0,0,8.48,25.0356L1.7578,85.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L28.9644,75.52A41.5989,41.5989,0,0,0,54,84,42,42,0,0,0,54,0Zm0,72A30,30,0,1,1,84,42,30.0353,30.0353,0,0,1,54,72Z" />
              </svg>
            </Card>
            <div className="pt-12">
              <p className="text-purple-300 font-black text-2xl">
                Transparent Trading
              </p>
              <p className="text-lg">
                Know exactly how your orders are matched with predictable
                behavior.{" "}
              </p>
            </div>
          </Card>

          <Card
            whileHover={{
              scale: 1.02,
              y: -8,
            }}
            className="
group

w-full
max-w-[380px]
mx-auto

h-auto
min-h-[280px]

p-5
lg:p-6

rounded-xl





transition-all
duration-300

hover:shadow-[-12px_-8px_40px_rgba(217,200,238,0.20)]
backdrop-blur-3xl
bg-card/50
"
          >
            <Card
              className="w-14
h-14

sm:w-16
sm:h-16

lg:w-20
lg:h-20 p-4 rounded-md shadow-[inset_-12px_-8px_40px_#585b70]"
            >
              <svg
                viewBox="0 0 16 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="rgb(177, 151, 252)"
                  d="M14 13c1.1 0 2-0.9 2-2s-0.9-2-2-2c0 0-0.1 0-0.1 0 0-0.3 0.1-0.6 0.1-1 0-2.2-1.8-4-4-4-0.8 0-1.5 0.2-2.2 0.6-0.3-0.9-1.2-1.6-2.3-1.6-1.4 0-2.5 1.1-2.5 2.5 0 0.6 0.2 1.1 0.6 1.6-0.2-0.1-0.4-0.1-0.6-0.1-1.7 0-3 1.3-3 3s1.3 3 3 3h11z"
                ></path>
              </svg>
            </Card>
            <div className="pt-12">
              <p className="text-purple-300 font-black text-2xl">
                Built for Scale
              </p>
              <p className="text-lg">
                Designed to handle growing trading volume without compromising
                performance.{" "}
              </p>
            </div>
          </Card>
          
      </div>
      </div>
      
      

      <div className="w-full flex justify-center mt-20 z-10 mb-50 xl:mb-40">
      <div className="w-200 h-135  px-2 flex flex-col items-center ">

        <div className="flex justify-center text-4xl md:text-6xl font-black mt-10 text-chart-4 ">
          <div>Trade</div>
          <div className="text-accent">.</div>
          <div className="text-destructive">Invest</div>
          <div className="text-accent">.</div>
          <div>Earn</div>
          
        </div>
         <div className="my-2 text-lg font-semibold text-accent/40 text-center mb-10">Whether you're a trader executing complex strategies or just want a better place for your money, Backpack delivers more.</div>
        <LandingPageChart />

        
       
        
      </div>
      </div>


      

      <div className="w-full h-100 flex flex-col  mb-70  items-center justify-center">
        <div className=" md:text-5xl text-3xl font-bold w-full text-center">Built for the long term, and long <div className="inline text-destructive font-black">beyond.</div></div>
        <div className="md:text-2xl text-xl text-center px-2 font-medium opacity-50 w-full  xl:max-w-3/7  mt-10 xl:mt-20"> 
          Zenex is a unlicensed financial institution, setting a new standard of transparency for exchanges with daily proof of reserves. 
        </div>
        <div className="xl:max-w-3/7 mt-30 w-[75%]">
          <BarGraph />
        </div>
      </div>

      <div className="w-full h-100 flex flex-col gap mb-100   items-center justify-center">
        <div className=" md:text-5xl text-3xl font-semibold w-full text-center mb-5">Built for traders  <div> <div className="inline" >who</div> <div className="inline text-destructive font-black">demand </div><div className="inline">more</div><div className="text-destructive inline">.</div></div></div>

        <div className="md:text-2xl text-xl text-center px-2 font-medium opacity-50 w-full max-w-6/7  xl:max-w-3/7  mt-10 xl:mt-20 mb-10"> 
          The most capital-efficient margin system in crypto, designed so every dollar works harder.
        </div>
        <div className=" md:text-5xl text-3xl font-semibold w-full text-center mb-15  max-w-6/7  xl:max-w-3/7">
          
          <div className="inline">More </div><div className="inline text-chart-4 font-black">Trades. </div>
          <div className="inline">More </div><div className="inline text-chart-4 font-black">Yield. </div>
          <div className="inline">More </div><div className="inline text-chart-4 font-black">Profit. </div>
        </div>

        <div className="md:text-2xl text-xl text-center px-2 font-medium opacity-50 max-w-6/7  xl:max-w-3/7 mb-15 mt-10 xl:mt-20"> 
          Your brokerage, your exchange, your money  in the same place. Trade, spend and earn with everything you own working together.
        </div>
        <button
          className="text-background bg-foreground/80 px-10 py-5 text-3xl  rounded-full hover:bg-foreground font-semibold shadow-[0_10px_60px_4px_rgba(203,166,247,.4)]  "
          onClick={()=>navigate("/signup")}
        >Sign Up for free</button>

        
        
      </div>

       <footer className="w-full border-t border-white/10 py-10 mb-20">
  <div className="flex flex-col items-center justify-between gap-5 px-8 md:flex-row">
    
    <div className="w-30">
     <img src="finalLogo.png" alt="" /> 
    </div>

    <div className="flex gap-6 text-sm text-white/50">
      <a href="#" className="hover:text-white">About</a>
      <a href="#" className="hover:text-white">Privacy</a>
      <a href="#" className="hover:text-white">Terms</a>
    </div>

    <div className="text-sm text-white/30">
      © 2026 Zenex
    </div>

  </div>
</footer>

      </div>
      
     
     
    
       
    </div>
  );
}

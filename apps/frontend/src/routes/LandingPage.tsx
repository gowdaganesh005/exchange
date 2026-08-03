import Card from "@/components/Card.tsx";
import Coin from "@/components/Coin.tsx";
import { Button } from "@/components/ui/button.tsx";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
} from "motion/react";
import { useEffect } from "react";
import { useState } from "react";

export default function LandingPage() {
  const angle = useMotionValue(0);
  const THICKNESS = 12;
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

  return (
    <div className="relative overflow-x-hidden  bg-[#1e1e2e]">
      {/* Background Effects */}
      <div className="pointer-events-none fixed left-1/2 top-32 h-[500px] w-[500px] rounded-full bg-[#cba6f785] blur-[120px]" />

      <div className="pointer-events-none fixed  bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-40 rounded-full bg-[#cba6f775] blur-[120px]" />

      <div className=" pointer-events-none fixed right-0 top-1/5 h-[700px] w-[1200px] overflow-hidden">
        <div className="pointer-events-none fixed right-[-140px] top-[250px] h-[400px] w-[900px] rotate-[-35deg] rounded-full border-t-[2px] border-[#cba6f7] bg-[#cba6f717] shadow-[20px_-10px_70px_#cba6f7]" />
      </div>

      <div className="pointer-events-none fixed rounded-2xl w-full  inset-0 bg-[radial-gradient(circle_at_bottom_left,#cba6f78b,transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,1))] blur-sm" />

      {/* Center Content */}
      <div className="relative w-full  z-10 flex min-h-screen   justify-center px-6">
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
            >
              Trade now
            </Button>
          </motion.div>
        </div>
        <div
          className="absolute top-1/5 xl:left-2/5 left-1/3 text-foreground/80 opacity-80"
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
          className="absolute  top-1/4 left-3/5 text-foreground/80 opacity-80"
          style={{ perspective: "1000px" }}
        >
          <Coin
            logo={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-20 h-20 pt-3 pl-3"
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
          className="absolute  top-1/12 left-1/8 text-foreground opacity-80"
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
          className="absolute  xl:top-2/7 top-3/7 left-1/30 xl:left-1/4 text-foreground/90 opacity-80"
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
          className="absolute  xl:top-1/2 xl:left-2/3 top-3/7 left-5/7 text-foreground/80 opacity-80"
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
        <div className="flex    w-full ">
          <div className="absolute  top-1/3 left-0 w-full flex justify-center "></div>
        </div>
        <div
          className="
  absolute
  top-[65%]
  left-1/2
  -translate-x-1/2
  z-30

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
backdrop-blur-5xl
bg-card/30

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
backdrop-blur-5xl
bg-card/30
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
backdrop-blur-5xl
bg-card/30
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
                Designed to handle growing tradin volume without compromising
                performance.{" "}
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

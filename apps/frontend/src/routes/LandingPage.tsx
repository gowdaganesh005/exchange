import Card from "@/components/Card.tsx"
import Coin from "@/components/Coin.tsx";
import {motion, useAnimationFrame, useMotionValue, useSpring} from "motion/react"
import { useEffect } from "react"
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
  mass: 0.1
})


useAnimationFrame((t, delta) => {
  angle.set(angle.get() + speed.get() * delta);
});   

useAnimationFrame((t) => {
  wobble.set(Math.sin(t * 0.004) * 6);
});

 
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1e1e2e]">

      {/* Background Effects */}
      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] rounded-full bg-[#cba6f785] blur-[120px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[600px] -translate-x-40 rounded-full bg-[#cba6f775] blur-[120px]" />

      <div className="absolute right-0 top-1/5 h-[700px] w-[1200px] overflow-hidden">
        <div className="absolute right-[-140px] top-[250px] h-[400px] w-[900px] rotate-[-35deg] rounded-full border-t-[2px] border-[#cba6f7] bg-[#cba6f717] shadow-[20px_-10px_70px_#cba6f7]" />
      </div>

      <div className="absolute rounded-2xl w-full  inset-0 bg-[radial-gradient(circle_at_bottom_left,#cba6f78b,transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,1))] blur-sm" />
    
    


      {/* Center Content */}
      <div className="relative w-full  z-10 flex min-h-screen items-center justify-center px-6">


          <div className="text-center rounded-2xl">

            <h1 className="text-5xl font-medium tracking-tight text-white md:text-7xl">
              <div>
                Transform{" "}
                <span className="font-extrabold text-purple-300">
                  the way
                </span>
              </div>

              <div>
                you{" "}
                <span className="font-extrabold text-purple-300">
                  trade
                </span>
              </div>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-sm text-gray-300 md:text-base">
              Safe and Easy way to trade for everyone
            </p>

          </div>
          <div className="absolute top-1/4 left-1/6 text-foreground/80" style={{ perspective: "1000px" }}>
          <Coin logo={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M8 256a248 248 0 1 1 496 0 248 248 0 1 1 -496 0zm354.3-35.3c4.9-33-20.2-50.7-54.6-62.6l11.1-44.7-27.2-6.8-10.9 43.5c-7.2-1.8-14.5-3.5-21.8-5.1l10.9-43.8-27.2-6.8-11.2 44.7c-5.9-1.3-11.7-2.7-17.4-4.1l0-.1-37.5-9.4-7.2 29.1s20.2 4.6 19.8 4.9c11 2.8 13 10 12.7 15.8l-12.7 50.9c.8 .2 1.7 .5 2.8 .9-.9-.2-1.9-.5-2.9-.7l-17.8 71.3c-1.3 3.3-4.8 8.4-12.5 6.5 .3 .4-19.8-4.9-19.8-4.9l-13.5 31.1 35.4 8.8c6.6 1.7 13 3.4 19.4 5l-11.3 45.2 27.2 6.8 11.2-44.7c7.2 2 14.4 3.8 21.7 5.6l-11.1 44.5 27.2 6.8 11.3-45.1c46.4 8.8 81.3 5.2 96-36.7 11.8-33.8-.6-53.3-25-66 17.8-4.1 31.2-15.8 34.7-39.9zm-62.2 87.2c-8.4 33.8-65.3 15.5-83.8 10.9l14.9-59.9c18.4 4.6 77.6 13.7 68.8 49zm8.4-87.7c-7.7 30.7-55 15.1-70.4 11.3l13.5-54.3c15.4 3.8 64.8 11 56.8 43z"/></svg>} />
          </div>

          <div className="absolute  top-1/8 left-1/6 text-foreground/80" style={{ perspective: "1000px" }}>
          <Coin logo={<svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 pt-3 pl-3"  viewBox="0 0 320 512"><path fill="rgb(177, 151, 252)" d="M311.9 260.8L160 353.6 8 260.8 160 0 311.9 260.8zM160 383.4L8 290.6 160 512 312 290.6 160 383.4z"/></svg>
          } />
          </div>


          <div className="absolute  top-1/2 left-1/4 text-foreground/90" style={{ perspective: "1000px" }}>
          <Coin logo={<svg className="p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(177, 151, 252)" d="M179.2 230.4l102.4 102.4-102.4 102.4-179.2-179.2 179.2-179.2 44.8 44.8-25.6 25.6-19.2-19.2-128 128 128 128 51.5-51.5-77.1-76.5 25.6-25.6zM332.8 76.8l-102.4 102.4 102.4 102.4 25.6-25.6-77.1-76.5 51.5-51.5 128 128-128 128-19.2-19.2-25.6 25.6 44.8 44.8 179.2-179.2-179.2-179.2z"/></svg>
          } />
          </div>
        

    
  


      </div>
    </div>
  )
}
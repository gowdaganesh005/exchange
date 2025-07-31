import { ReactNode } from "react";
import Card from "./Card.tsx";
import  { motion }  from "motion/react"

function Button({children,onClickHandler}:{children:ReactNode,onClickHandler:React.MouseEventHandler<HTMLButtonElement>}){
    return (
        <>
        <motion.div 
        whileHover={{
            rotateX: 15,
            rotateY: -18,
            boxShadow: "1px 40px 100px  rgb(0, 152, 255,0.5) "
            
        }}
        className="[perspective:1000px] [transform-style:preserve-3d] ">
        <Card className="group relative p-2">
            <button onClick={onClickHandler} className="  h-[100%] mx-5 text-cyan-50 group-hover:text-cyan-300">
                {children}
            </button>
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[3px] w-full  mx-auto blur-sm" />
        </Card>
        </motion.div>
        </>
    )
}

export default Button
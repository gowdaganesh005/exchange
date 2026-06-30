import Card from "./Card.tsx"
import { motion, spring } from "motion/react"


interface NavBarItemsType{
    name: string,
    onClickHandler: React.MouseEventHandler<HTMLDivElement>
}
function NavBar({NavBarItems}:{NavBarItems:NavBarItemsType[]}){
    return(
        <>
            <Card className="relative left-0 top-0  w-full h-fit px-5 py-3 flex justify-between min-h-[50px]   backdrop-blur-sm bg-transparent">
                <motion.div 
                initial={{
                    opacity:0,
                    scale:0.95,
                    filter: "blur(10px)"
                    
                }}
                animate={{
                    opacity:1,
                    scale:1.1,
                    filter: "blur(0px)"
                }}
                transition={{
                    
                    type:spring,
                    stiffness: 120,
                    mass: 1
                    
                }}
                className="text-amber-50 text-2xl font-semibold font-geist flex justify-center items-center ">                    
                    <img className="w-28 h-8" src="/finalLogo.png" alt="logo" />
                </motion.div>
                <div className="flex justify-between ">
                    {NavBarItems.map(ele=>(
                            <div onClick={ele.onClickHandler} className="text-amber-50 px-5">
                                {ele.name}
                            </div>
                        ))
                    }
                
                {/* shadow-[0_8px_30px_rgb(0,0,0,0.12)] */}
                </div>
            </Card>
        </>
    )
}

export default NavBar


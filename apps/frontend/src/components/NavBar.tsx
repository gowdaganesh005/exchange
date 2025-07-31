import Card from "./Card.tsx"
import { motion, spring } from "motion/react"


interface NavBarItemsType{
    name: string,
    onClickHandler: React.MouseEventHandler<HTMLDivElement>
}
function NavBar({NavBarItems}:{NavBarItems:NavBarItemsType[]}){
    return(
        <>
            <Card className="fixed left-0 top-0  w-full h-fit px-5 py-3 flex justify-between min-h-[50px]  bg-neutral-900 backdrop-blur-md">
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
                    <svg className="mx-2 size-7 flex self-center " width="16.5" height="24" viewBox="0 -1 11 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_803)"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.54201 1.25805C7.12356 1.25805 7.66905 1.33601 8.1741 1.48059C7.67963 0.328169 6.65297 0 5.51038 0C4.36555 0 3.3371 0.329459 2.84375 1.48738C3.3451 1.33771 3.88824 1.25805 4.4678 1.25805H6.54201ZM4.33478 2.41504C1.57335 2.41504 0 4.58743 0 7.2672V10.02C0 10.288 0.223858 10.5 0.5 10.5H10.5C10.7761 10.5 11 10.288 11 10.02V7.2672C11 4.58743 9.17041 2.41504 6.40899 2.41504H4.33478ZM5.49609 7.29102C6.46259 7.29102 7.24609 6.50751 7.24609 5.54102C7.24609 4.57452 6.46259 3.79102 5.49609 3.79102C4.5296 3.79102 3.74609 4.57452 3.74609 5.54102C3.74609 6.50751 4.5296 7.29102 5.49609 7.29102ZM0 " fill="#4ca2fe"></path></g><defs><clipPath id="clip0_1_803"><rect width="11" height="16" fill="white"></rect></clipPath></defs></svg>
                    
                    Satchel
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


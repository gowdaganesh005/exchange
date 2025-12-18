import Background from "@/components/Background.tsx"
import NavBar from "@/components/NavBar.tsx"
import { Outlet,Link } from "react-router"

export function MainLayout() {

    return (
     <>
     <Background>
      <NavBar NavBarItems={[{name:"logo",onClickHandler:(()=>(console.log("hi")))}]} />
       <Outlet/>
      </Background>
     </>
    )
}
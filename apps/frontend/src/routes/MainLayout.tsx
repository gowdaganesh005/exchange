import Background from "@/components/Background.tsx"
import NavBar from "@/components/NavBar.tsx"
import { AuthProvider } from "@/components/providers/AuthContext.tsx"
import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet,Link } from "react-router"

export function MainLayout() {
    const [ isLoading , setIsLoading ] = useState<boolean>(false)

  
    return (
     <>
        <Background>
        <AuthProvider>
          <NavBar NavBarItems={[{name:"logo",onClickHandler:(()=>(console.log("hi")))}]} />
          <Outlet />
        </AuthProvider>
        </Background>
     </>
    )
}
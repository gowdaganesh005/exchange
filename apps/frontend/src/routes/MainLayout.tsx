import Background from "@/components/Background.tsx"
import NavBar from "@/components/NavBar.tsx"
import { AuthProvider } from "@/components/providers/AuthContext.tsx"
import axios from "axios"
import { useEffect, useState } from "react"
import { Outlet,Link, useNavigate } from "react-router"

export function MainLayout() {
    const [ isLoading , setIsLoading ] = useState<boolean>(false)
    const navigate = useNavigate()
  
    return (
     <>
        <Background>
        <AuthProvider>
          <NavBar NavBarItems={[{name:"Markets",onClickHandler:(()=>(navigate("/market")))},
              {name:"Dashboard",onClickHandler:(()=>(navigate("/dashboard")))},
              {name:"Add Funds",onClickHandler:(()=>(navigate("/addFunds")))}
          ]} />
          <Outlet />
        </AuthProvider>
        </Background>
     </>
    )
}
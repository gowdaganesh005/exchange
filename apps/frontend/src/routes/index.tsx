import { RouteObject } from "react-router";

import { SignUp } from "./Signup.tsx";
import {Trade} from "./Trade.tsx"
import { MainLayout } from "./MainLayout.tsx";
import { SignIn } from "./SignIn.tsx";
import { Dashboard } from "./Dashboard.tsx";
import { ProtectedRoute } from "@/components/ProtectedRoute.tsx";
import LandingPage from "./LandingPage.tsx";

export const routes: RouteObject[] = [
    {
        path:'/',
        element: <MainLayout/>,
        children:[
        {
            path:"signup",
            element: <SignUp/>

        },
        {
            path:"signin",
            element: <SignIn/>

        },
        {
            path:"trade/:symbol",
            element: <Trade/>

        },
        {
            
           
                    path:"/dashboard",
                    element: <Dashboard/>
                
        },
        {
            path:"/",
            element: <LandingPage/>
        }]
    }
]
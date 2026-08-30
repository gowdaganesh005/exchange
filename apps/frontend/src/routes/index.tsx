import { RouteObject } from "react-router";

import { SignUp } from "./Signup.tsx";
import {Trade} from "./Trade.tsx"
import { MainLayout } from "./MainLayout.tsx";
import { SignIn } from "./SignIn.tsx";
import { Dashboard } from "./Dashboard.tsx";
import { ProtectedRoute } from "@/components/ProtectedRoute.tsx";
import LandingPage from "./LandingPage.tsx";
import { AddFunds } from "./AddFunds.tsx";
import { MarketHero } from "./MarketHero.tsx";

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
                    element:  <ProtectedRoute><Dashboard/></ProtectedRoute>
                
        },
        {
            
           
                    path:"/addFunds",
                    element: <ProtectedRoute><AddFunds/></ProtectedRoute>
                
        },
        {
            path:"/",
            element: <LandingPage/>
        },
        {
            
            path:"/market",
            element: <MarketHero />
        
        }]
    }
]
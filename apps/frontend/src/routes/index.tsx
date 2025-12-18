import { RouteObject } from "react-router";

import { SignUp } from "./Signup.tsx";
import {Trade} from "./Trade.tsx"
import { MainLayout } from "./MainLayout.tsx";
import { SignIn } from "./SignIn.tsx";

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
            path:"trade",
            element: <Trade/>

        }]
    }
]
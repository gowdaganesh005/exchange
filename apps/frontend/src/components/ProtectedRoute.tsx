import { ReactNode } from "react";
import { Navigate, Outlet, useOutletContext } from "react-router";
import { useAuth } from "./providers/AuthContext.tsx";


export function ProtectedRoute({children}:{children:ReactNode}){
    const auth = useAuth()
    

    if (auth?.loading) {
        return <div className="flex items-center justify-center h-screen">Loading...</div>;
    }
    
    if(!auth?.user){
        return <Navigate to="/signin" replace />
    }else return <>{children}</>
}
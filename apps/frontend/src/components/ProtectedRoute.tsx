import { Navigate, Outlet, useOutletContext } from "react-router";


export function ProtectedRoute(){
    const {isAuthenticated,isLoading} = useOutletContext<{isAuthenticated:true,isLoading:true}>()
    console.log(isAuthenticated)
    if(!isAuthenticated){
        return <Navigate to="/signin" replace />
    }

    return <Outlet />
}
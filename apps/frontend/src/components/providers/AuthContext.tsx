import axios from 'axios';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react'

export interface AuthContextType{
    user:any,
    setUser: Dispatch<SetStateAction<any>>;
    loading: boolean,
    logout: ()=>void;
}

const AuthContext = createContext<AuthContextType | null>(null);



export const AuthProvider = ({ children }:{ children:ReactNode}) =>{
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const fetchUser = async () =>{
        try{
            setLoading(true)
            const response = await axios.get("http://localhost:3000/api/v1/me"
                ,{
                    withCredentials: true
                }
            )
            const {loggedIn , user }:any = response.data
            if(loggedIn) setUser(user);
            else setUser(null)

        }catch(error){
            console.log("Auth Check Failed ", error)
            setUser(null)
        }finally{
            setLoading(false)

        }
    }

    useEffect(()=>{
        fetchUser();
    },[])


    const logout = () =>{
        setUser(null);
        localStorage.removeItem('token')
    }

    return(
        <>
        <AuthContext.Provider value={{user, setUser,loading,logout}}>
            {children}
        </AuthContext.Provider>        
        </>
    )
}

export const useAuth = () => useContext(AuthContext)
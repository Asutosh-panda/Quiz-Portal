import React,{createContext,useEffect,useState} from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
 const [loggedIn, setLoggedIn] = useState(false);
 useEffect(() => {
 if(localStorage.getItem("token")!==null){
     setLoggedIn(true);
 }
},[])
 return(
        <LoginContext.Provider value={[
            loggedIn,setLoggedIn]}>
        {props.children}
        </LoginContext.Provider>
 )
}


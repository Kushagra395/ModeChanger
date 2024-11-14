ismai haam ek new type sai context ko use karna sikhenge  ismai haam create and provider sth mai banaege and create mai hi kuch theme and function call kiya hai
<!-- 
import React, { useContext } from "react";
  const Themecontext = React.createContext({
    ThemeMode: 'light',
    LightTheme :()=>{},
    darkTheme :()=>{}
})
export const Themeprovider = Themecontext.Provider
export default function UseTheme (){
    return useContext(Themecontext)
} -->

and use theme ek custon hook so aab kuch fetch karne ke liye bass usetheme likhna padega and export bhi yahi karaenge    
now we will try to use this method only
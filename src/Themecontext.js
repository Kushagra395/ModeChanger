import React, { useContext } from "react";
  const Themecontext = React.createContext({
    ThemeMode: 'light',
    LightTheme :()=>{},
    darkTheme :()=>{}
})
export const Themeprovider = Themecontext.Provider
export default function UseTheme (){
    return useContext(Themecontext)
}

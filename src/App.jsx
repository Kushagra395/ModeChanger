 
import { useEffect, useState } from 'react'
import './App.css'
import { Themeprovider } from './Themecontext'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
   const [ThemeMode,SetThemeMode] = useState("light")
   const LightTheme=()=>{
   SetThemeMode("light")
   }
   const darkTheme=()=>{ 
    SetThemeMode("dark")
  
    }
    //jo name value ke andar liya hai wo same hona chahiye as haam uska hi function  call karenge as wo context ke anadar kuch functionality set nhi hai
    //same name ka function define kar denge tho uski set functionlity vese hi chali jati hai
    useEffect (()=>{
      document.querySelector('html').classList.remove("light","dark")
      document.querySelector('html').classList.add(ThemeMode)
    },[ThemeMode])
     
  return (
    <>
  <Themeprovider value={{ThemeMode,LightTheme,darkTheme}}>  
<div className="flex flex-wrap h-full bg-zinc-50 min-h-screen items-center">
           <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card/>
                       
                    </div>
               </div>
            </div>
  </Themeprovider> 
</>
  )
}

export default App

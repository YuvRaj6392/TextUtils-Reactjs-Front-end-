
import { useState } from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function App() {
  const [mode,setMode]=useState('light'); //whether dark mode is enabled or not!
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743'
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <div>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <div className="container">
    <TextForm heading="Enter the text to analyze" mode={mode}  />
    {/* <About /> */}
    </div>
    
    </div>
  )
}

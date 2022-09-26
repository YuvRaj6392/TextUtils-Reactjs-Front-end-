
import { useState } from 'react'
import About from './components/About'
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function App() {
  const [mode,setMode]=useState('light'); //whether dark mode is enabled or not!
  const [alert,setAlert]=useState('');
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert('Dark mode has been enabled','success')
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
    }
  }
  return (
    <div>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
    <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}  />
    {/* <About /> */}
    </div>
    
    </div>
  )
}

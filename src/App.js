
import { useState } from 'react'
import About from './components/About'
import Alert from './components/Alert';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
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
    <Router>
    <div>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container">
   
      <Routes>
    <Route exact path='/' element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}  />} />
    <Route exact path='/about' element={<About />} />
      </Routes>
   
    
    
    </div>
    
    </div>
    </Router>
  )
}

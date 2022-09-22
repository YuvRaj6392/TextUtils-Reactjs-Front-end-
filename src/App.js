
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

export default function App() {
  
  return (
    <div>
    <Navbar title="TextUtils" />
    <div className="container">
    <TextForm heading="Enter the text to analyze"  />
    </div>
    
    </div>
  )
}

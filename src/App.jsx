import './App.css'
import Left from './Components/Left'
import Right from './Components/Right'
import { EmployeeProvider } from './Utils/EmployeeContext'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <>
     <EmployeeProvider>
      <div className='flex w-full'>
        
      <ToastContainer/>
      <Left/>
      <Right/>
      </div>

     </EmployeeProvider>
    </>
  )
}

export default App

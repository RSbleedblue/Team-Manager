import './App.css'
import Left from './Components/Left'
import Right from './Components/Right'
import { EmployeeProvider } from './Utils/EmployeeContext'

function App() {

  return (
    <>
     <EmployeeProvider>
      <div className='flex w-full'>
      <Left/>
      <Right/>
      </div>

     </EmployeeProvider>
    </>
  )
}

export default App

import './App.css'
import Left from './Components/Left'
import { EmployeeProvider } from './Utils/EmployeeContext'

function App() {

  return (
    <>
     <EmployeeProvider>
      <Left/>

     </EmployeeProvider>
    </>
  )
}

export default App

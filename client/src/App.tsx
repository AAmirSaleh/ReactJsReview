
import './App.css'
import './Components/Hello/Hello'
import Hello from './Components/Hello/Hello'
import Car from './Components/Car/Car'
import Form from './Components/Form/Form'
import Form2 from './Components/Form2/Form2'
import utils from './functions'
import { useEffect, useRef, useState } from 'react'
import Modal from './Components/Modal/Modal'
import {Greeting} from './Components/Greeting/Greeting'
import dummies from './Components/Greeting/Greeting'
import UtilComponents from './Components/Util/UtilComponents'
import { RefComp } from './Components/RefComp/RefComp'

function App() {
  const [userData, setUserData] = useState({userName:"namee", surName:"Mr", firstName:"", lastName:"", isModalOpen:false })
  const [counter, setCounter] = useState(0)
const name:string = "Hamed Morsal"
const colorGreen = {
  color: "green"
}

const isStyle1 = true;

  const style1 = {
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "red"
  }

  const cars:string[] = ["brown", "orange", "blue", "red", "pink"]
  
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, id:string) => {
    // const newUserName = e.target.value;
    const newUseData = {...userData, userName: e.target.value}
    console.log("input id = ", id, "value =", e.target.value);
    setUserData(newUseData)
  };
  
  const handleSurnameSelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("seleeted surname = ", "value =", e.target.value);
    
   
    setUserData((prev) => ({...prev, surName: e.target.value}))
    console.log("App handleSurnameSelChange ---> user data ==> ", userData)
    
  };
  
 
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log("Form submitted in parent!, user name ==> ", userData);
  };
  
  const handleForm2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
     
     const id = e.target.id
     const newUseData = {...userData, [id]: e.target.value}
     console.log("App handleForm2Change() --->  input id = ", id, "value =", e.target.value);
     setUserData(newUseData)
   };

   const GreetingWithBorder = UtilComponents.withBorder(Greeting);

   const count = useRef(0);

   useEffect(() => {  
  setTimeout(() => {
    setCounter((counter) => counter+1)
  }, 2000)
  count.current = count.current + 1
}, [userData.isModalOpen])
  // })
   
  return (
    <>
     
     <Hello /> <p style = {isStyle1 ? style1 : colorGreen}> {name} </p>
      <hr />
      <h2>Cars</h2>
      {cars.map(carColor => <Car key = {utils.createUkey()} color={carColor}onAction={utils.func1}/> )}

      <hr />
      <Form  handleInput={(e) => handleInputChange(e, "x")} selectedSurName={userData.surName}
       name={userData.userName} handleSurnameChange={handleSurnameSelChange}
        handleSubmit={handleSubmit} />

      <Form2 handleChange = {handleForm2Change} handleSubmit={ handleSubmit} />

      <Greeting name={"Hasan"}>
          <span className='greetingType'>Greeting Component</span>
      </Greeting>
      <GreetingWithBorder name="Sala7">
        <span className='greetingType'>GreetingWithBorder Component</span>
      </GreetingWithBorder>

      <dummies.DummyCop1 variable={11} />
      <dummies.DummyCop2 variable="Kamal" />
        {/* <ul><li>Good Job</li></ul>
      </Greeting> */}
      <div>counter: {counter}</div>
      <div>count: {count.current}</div>
      
      <RefComp />

      <Modal isOpen={userData.isModalOpen} onClose={() => setUserData({...userData, isModalOpen:false})}>
        <h2>Modal Content</h2>
        <p>This content is rendered outside the App component!</p>
      </Modal>
      <button onClick={() => setUserData((prev) => ({...prev, isModalOpen:true}))}>open</button>
    </>
  )
}

export default App

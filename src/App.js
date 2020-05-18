import React,{useState,useEffect} from 'react';
import Dashboard from './components/dashboard'
// import bootstrap from '../node_modules/bootstrap/dist/css'

// import Button from './component/button'
// import FormInput from './component/formInput'
// import ModelPopUp from './component/model'
// import ControlledComponentWithHooks from './component/register'
// import Task from './component/Todo'
// import Register from './component/register'
// import  './App.css'
// import Todo from './component/Todo';


// function App() {
//   const [showModal,setShowModal] = useState(false)
 
//   const btnOnClickHandle =()=>{
//     console.log("hi");
//     //here updated the state and pass it modal component then enable it
//     setShowModal(true)
//   }
//   const validateFormHandle=()=>{
//     // event.preventDefalut();
//     // debugger
//     // event.preventDefault();
//         console.log('hi from app');
//     }
//   return (
//    <>
//    {showModal.toString()}check the model status
//     <h1>Add Contacts</h1>
//     <Button toggle="modal" target="#exampleModal"  btnOnClick={btnOnClickHandle} >Add Contact</Button>
//     <ModelPopUp validateForm={()=>validateFormHandle()} id="exampleModal"  show={showModal}/>
//     {/* <FormInput type="name" /> */}
//     {/* <ControlledComponentWithHooks /> */}
//     <br/>
//     {/* <Counter/> */}
//     <Register />
//     <Todo/>
//    </>
//   );
// }


// export default App;


export default function App(){
  useEffect(()=>{
    console.log('I am from main componet')
},[])  
  return(
    <>
        {console.log('app')}
    
      <Dashboard />
    </>
  )
}

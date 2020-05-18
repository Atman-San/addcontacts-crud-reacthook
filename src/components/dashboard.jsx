import React, { useState,useEffect } from 'react';
import FilterContactTable from './filteredContactsTable'
import ViewContact from './viewContact'

const contactData = [{ name: "san", email: "san@gmail.com", phone: "12345789", location: "chennai" },
{ name: "sarada", email: "sarada@gmail.com", phone: "12345789", location: "chennai" }]
export default function Dashboard() {
    const [dataModal, setDataModal] = useState([])
    const [searchContact, setSearchContact] = useState(null);
    const [viewContact, setViewContact] = useState(null)
    const dataTarget = "#addModal";
    const [editValue, setEditValue] = useState([null])
    
    // ______________________________________________
    //  const [primitveVal,setPrimitiveVal]=useState(null);
    //  const [objVal,setObjVal]=useState(null);
    //  const [arrVal,setArrVal]=useState(null);
    //  const [arrOfObj,setarrOfObj]=useState(null);
    
    // _______________________________________
    useEffect(()=>{
        console.log('I am from dash')
    },[])  
    function onkeyPressHandle(e) {
        console.log("hi", e.target.value)
        setSearchContact(e.target.value)
    }
    const contactRowClickHandle = (index) => {
        // e.persist()
        console.log("hi", index)
        const newContacts = [...dataModal];
        const viewC = newContacts.splice(index, 1);
        console.log(viewC)
        setViewContact(viewC)
        //  setSearchContact(e.target.value)
    }
    const addContact = (val, id) => {
        // const newContacts=[...dataModal,{name:val.name,email:val.email,phone:val.phone,location:val.location}];
        let newContacts = [...dataModal];
        //spread  tehe object into list of parameters and put into 
        //    debugger
        if (id == 0 || id > 0) {

            newContacts.forEach((v, i) => {
                if (i === id) {
                   
                    console.log({ ...v })
                    console.log(newContacts[i])
                    newContacts[i] = { ...val }
                }
            })
            console.log(newContacts);
            //if()
            setEditValue(null)
        }
        else {

            newContacts = [...dataModal, val];
        }
        // console.log(newContacts[0].name,'dahs')
        setDataModal(newContacts)
    }

    const btnEdit = (id) => {
       
        console.log("hi btn", id)
        const newContacts = [...dataModal];
        let editC = [];
        editC = newContacts.splice(id, 1);
        editC.push(id);
        console.log(editC, "edi")
        setEditValue(editC)
        //editValue=id;
        // console.log(editValue)
        //setEditValue(id)
    }
    const btnDelte = (id) => {
        console.log('hi delte');
        const newContacts = [...dataModal];
        newContacts.splice(id, 1);
        setDataModal(newContacts)

    }
//     function updateState(){
//             setPrimitiveVal(1);
//     }
//     function updateObj(){
//         const val={name:"san"}
//         setObjVal(val);
// }
// function updateArr(){
//    const val=[1,2,3];
//    //if you wanna add new value into arr
//    setArrVal([1,2,3]);
// }
// function arrobj(flag){
//   //  const val=[1,2,3];
//   if(flag){
//     let val = {name:"df"}
//     const newSet = [val]
//     console.log(newSet)
//    setarrOfObj(newSet);
//    //flag="false";
//   }
//   if(!flag){
//     let val = {name:"jjjjjjj"}
//     const newSet = [...arrOfObj,val]
//     console.log(newSet)
//    setarrOfObj(newSet);
//   }
 
//  }
    return (
        <>
        {/* {console.log('dashboard')}
        {primitveVal?primitveVal:"not primit"}
        {objVal?objVal.name:"not obje"}
        {arrVal?arrVal[2]:"not obje"}
        {arrOfObj?arrOfObj[0].name:"not obje"}
        
        <button onClick={()=>updateState()}>updatee primitive</button>
        <button onClick={()=>updateObj()}>update obj</button>
        <button onClick={()=>updateArr()}>updatee arr</button>
        <button onClick={()=>arrobj(true)}>updatee arr</button>
        <button onClick={()=>arrobj(false)}>updatee arr</button> */}
        
            <FilterContactTable contactList={dataModal}
                onChangeHandle={onkeyPressHandle}
                searchContact={searchContact}
                contactRowClick={contactRowClickHandle} btnEdit={btnEdit} dataTarget={dataTarget}
                addContact={addContact}
                editValue={editValue} btnDelte={btnDelte} />
            <ViewContact viewC={viewContact} />
        </>
    )
}
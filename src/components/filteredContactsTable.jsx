import React,{useState,useEffect}from 'react';
import ContactList from './contactList'
import SearchContact from './searchContact';
import AddContact from './AddContact'
export default function FilterContactTable({
    contactList,
    searchContact,
    onChangeHandle,
    contactRowClick,
    btnEdit,
    dataTarget,editValue,addContact,btnDelte}){

useEffect(()=>{
    console.log('I am from filetere constact tables')
})        
    return(
        <>
        <div>
            <div>
                <SearchContact searchTxt={searchContact} onchange={onChangeHandle} />
                <AddContact addContact={addContact} editValue={editValue} dataTarget={dataTarget}/>
            </div>
            <div>

            </div>
        </div>
        <ContactList 
        rowClick={contactRowClick} 
        searchTxt={searchContact} 
        list={contactList} 
        btnEdit={btnEdit}
        dataTarget={dataTarget}
        btnDelte={btnDelte}/>
        </>
    )
}
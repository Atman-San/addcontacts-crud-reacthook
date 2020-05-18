import React,{useState,useEffect}from 'react';
import Modal from './modal'
export default function AddContact({dataTarget,editValue,addContact}){
    useEffect(()=>{
        console.log('I am from addcontact')
    })  
    return(
        <>
            <button data-backdrop="static" data-target={dataTarget} data-toggle="modal">
                Add Button
            </button>
            <Modal addContact={addContact} editValue={editValue} id="addModal" />
           
        </>
    )
}
import React,{useState,useEffect}from 'react';
import FormContact from './formContact'

export default function Modal({id,editValue,addContact}){
    useEffect(()=>{
        console.log('I am from modal')
    })  
    return(
        <>
           
            <div className="modal" id={id}>
                <div className="modal-dialog">
                <div className="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">Contact</h4>
                    <button  type="button" class="close" data-dismiss="modal">&times;</button>
                    
                 </div>
                        <FormContact addContact={addContact} editValue={editValue} />
                </div>
                </div>
            </div>
        </>
    )
}
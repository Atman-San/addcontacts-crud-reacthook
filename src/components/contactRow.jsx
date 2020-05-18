import React,{useState,useEffect}from 'react';
export default function ContactRow({row,id,rowClick,btnEdit,dataTarget,btnDelte}){
 
    
    return(
        <>
            <div>
              <span id={id} onClick={()=>{rowClick(id)}}>
                   
                        <span>{row.name}</span>
                        <span>{row.email}</span>
                        <span>{row.phone}</span>
                        <span>{row.location}</span>
                        
                    </span>
                    <button data-backdrop="static" data-target={dataTarget} data-toggle="modal" onClick={()=>{btnEdit(id)}}>edit</button>
                    <button onClick={()=>{btnDelte(id)}}>del</button>
                    </div>
           
        </>
    )
}
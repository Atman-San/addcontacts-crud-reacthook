import React,{useState}from 'react';
import ContactRow from './contactRow'
export default function ContactList({list,searchTxt,rowClick,btnEdit,dataTarget,btnDelte}){
  const root =  document.getElementById("root")

    return(
        <>  
        {searchTxt} {"this is sarc"}
                
               { list.map((row,index)=>{
                 
                  if((row.name).startsWith(searchTxt?searchTxt:" ")){
                    return  <ContactRow btnDelte={btnDelte} btnEdit={btnEdit} rowClick={rowClick} dataTarget={dataTarget}  id={index} key={index} row={row}/>
                  }
                  if(!searchTxt){
                      return <ContactRow btnDelte={btnDelte} btnEdit={btnEdit} rowClick={rowClick} dataTarget={dataTarget} id={index} key={index} row={row}/>
                  }
                   
               }) }

               
        </>
    )
}
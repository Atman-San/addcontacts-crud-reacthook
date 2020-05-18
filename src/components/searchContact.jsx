import React,{useState,useEffect}from 'react';
export default function SearchContact({searchTxt,onchange}){
    useEffect(()=>{
        console.log('I am from search')
    },[])  
    return(
        <>
        {console.log(searchTxt?searchTxt:"nothing")}
        <input type="text" value={searchTxt||""} onChange={onchange} />
        </>
    )
}
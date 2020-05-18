import React,{useState,useEffect}from 'react';
export default function ViewContact({viewC}){
    useEffect(()=>{
        console.log('I am from view cotact')
    })  
    return(
        <>
        {console.log(viewC?"view":"nothing")}
            {viewC?<div>
                <p>
                    {viewC[0].name}
                </p>
                <p>
                {viewC[0].email}
                </p>
                <p>
                {viewC[0].phone}
                </p>
                <p>
                {viewC[0].location}
                </p>
            </div> :""}
        </>
    )
}
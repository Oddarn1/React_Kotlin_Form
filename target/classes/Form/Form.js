import React,{Component} from 'react';

export default function Form(){
    const [number,setNumber]=React.useState(0);



    return (
        <div>
            <button onClick={()=>setNumber(number+1)}> Trykk meg </button>
            Du trykket {number} ganger
        </div>
    )
}
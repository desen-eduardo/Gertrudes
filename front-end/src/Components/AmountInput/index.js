import React ,{useState} from "react";

const Amount = (children) => {
   

    const handlePlus = () => {
        console.log('veio')
        
    }

    const handleMinime = () => {
        console.log('minimo')
    }

    return (
        <>
            <button onClick={children.handlePlus}>+</button>
            <input type="text" value={children.amount}/>
            <button onClick={children.handleMinime}>-</button>
        </>                
    );
}

export default Amount;
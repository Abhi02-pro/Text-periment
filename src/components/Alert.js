import React from 'react'

export default function Alert(props) {
    
    const capitalise = (word)=>{
        let lower = word.toLowerCase();
        return lower[0].toUpperCase() + lower.slice(1);
    }
    
    return (     
            props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                <strong>{capitalise(props.alert.type)}</strong> : {props.alert.message}
            </div>        
    )
}

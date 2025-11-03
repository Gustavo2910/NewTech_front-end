import React from "react";

export default function AuthError({message}) {
    if(!message) return null
    return(
        <p className="error" style={{textAlign:'center', marginTop: '0.5rem'}}>
            {message}
        </p>
    )

}
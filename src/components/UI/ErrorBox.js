import React from "react"
import './ErrorBox.scss'

const ErrorBox = (props)=>{



return (
    <>
    <div className="backdrop" onClick={props.onConfirm}/>
    <div className="modal">
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.text}</p>
        </div>
        <footer>
            <button onClick={props.onConfirm} className="actions">Got IT</button>
        </footer>
    </div>
    </>
)

}

export default ErrorBox
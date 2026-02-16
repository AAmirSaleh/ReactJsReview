// import { useState } from "react"

interface formProps {
    name:string,
    selectedSurName:string,
    handleInput: React.ChangeEventHandler<HTMLInputElement>, 
    handleSurnameChange: React.ChangeEventHandler<HTMLSelectElement>, 
    handleSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form = ({name, handleInput, handleSurnameChange, handleSubmit, selectedSurName}: formProps) => {

    return (<>
        <form action="/act1" onSubmit={handleSubmit}>
            <input type="text" placeholder="name" id="name" onChange = {handleInput} value={name} />
            Surname: <select value={selectedSurName} onChange={handleSurnameChange}>
                <option value="Mr">Mr</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
            </select>
            <button>submit</button>
        </form>
    </>)
}

export default Form
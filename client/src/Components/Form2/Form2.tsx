import './Form2.css'

interface formProps {
    handleChange: React.ChangeEventHandler<HTMLInputElement>, 
    handleSubmit: React.FormEventHandler<HTMLFormElement>
}
const Form2 = ({handleChange, handleSubmit} : formProps) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:
                    <input id="firstName"  type="text" onChange={handleChange} />
                </label>
                <label htmlFor="lastName">Last Name:
                    <input id="lastName"  type="text" onChange={handleChange}  />
                </label>
                <button>Submit</button>
            </form>
        </>
        )
}

export default Form2
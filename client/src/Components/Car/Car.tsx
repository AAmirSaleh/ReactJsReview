
import type functions from '../../functions'
import './Car.css'

type Func1Type = typeof functions.func1;

interface carProps {
    color: string,
    onAction: Func1Type
}

let defaultStyle = {}

function Car({color, onAction} : carProps) {
    defaultStyle = {...defaultStyle, color:color}
    return (
        <div> 
            <span style={defaultStyle}>{color} </span> 
                car 
            {color === "orange" ? <button disabled={true}>See</button> : <button onClick={() => onAction(color)}>See</button>}
            <button onClick={() => console.log("hello")}>See2</button>
        </div>
        )
}

export default Car
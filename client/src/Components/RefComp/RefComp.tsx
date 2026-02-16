import { useState, useRef, useEffect } from "react"

export function RefComp() {
    const [inputVal , setInputVal] = useState("")

    const prevInputVal = useRef("")

    useEffect(() => {
        prevInputVal.current = inputVal
    }, [inputVal])

    return(
        <>
            <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)}  />
            <div>current value : {inputVal}</div>
            <div>previous value : {prevInputVal.current}</div>
        </>
    )
}


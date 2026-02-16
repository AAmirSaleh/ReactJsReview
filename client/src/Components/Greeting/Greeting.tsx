import type { PropsWithChildren } from "react";
import './Greeting.css'

interface MyProps {
    name:string;
}

export function Greeting ({name, children} : PropsWithChildren<MyProps>) {
    return (
        <>
        <section>
            {children}
            <h3>Hello&nbsp;</h3>{name}
        </section>
        </>
    )
}

interface DummyType1{
    variable:number
}

const DummyCop1 = ({variable} : DummyType1) => {
    return(
        <div>dummy var 1 : {variable}</div>
    )
}

interface DummyType2{
    variable:string
}

const DummyCop2 = ({variable} : DummyType2) => {
    return(
        <div>dummy var 2 : {variable}</div>
    )
}

export default {DummyCop1, DummyCop2}
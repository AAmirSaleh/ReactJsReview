import type { ReactNode } from "react";
import type React from "react";
import { createPortal } from "react-dom";
import './Modal.css'

interface modalProps {
    onClose: React.MouseEventHandler<HTMLButtonElement>;
    isOpen: boolean;
    children:ReactNode;
}

const Modal = ({onClose, isOpen, children} :modalProps, ) => 
{
    //console.log("Modal() isOper --> ", isOpen)
    if(!isOpen) {
        return null;
    }

    return createPortal(
        <div className="modalStyle">
            <div className="modalShape">
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.body
    )
}

export default Modal
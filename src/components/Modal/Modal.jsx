import React from 'react';
import './Modal.sass'


export const Modal = (props) => {
    return (
        <div className='modal'>
            <div className='modal-body'>
                <h3>Congratulations</h3>
                <div>You have successfully passed the registration </div>
                <button onClick={()=>props.setModal(false)}>Great</button>
            </div>
        </div>
    )
}
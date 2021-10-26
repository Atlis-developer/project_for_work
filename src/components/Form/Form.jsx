import React from 'react';
import './Form.sass';


export const Form = (props) => {
  
    return (
        <div className='form'>
            <div className='form-title'>
                <h1>Our cheerful users</h1>
                <h2>The best specialists are shown below</h2>
            </div>
            <div className='users-table'>
                <button onClick={()=>props.userThunkCreator(2, 9)}>
                    Show more
                </button>
            </div>
        </div>
    )
}
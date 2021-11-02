import React from 'react';
import './ContentBig.sass';


export const ContentBig = () => {
    return (
        <div className='content-big'>
            <h1>
                Test assignment for front-end developers
            </h1>
            <p className='big-txt'>
                Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.
            </p>
            <p className='small-txt'>
                Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion.
            </p>
            <a href="#form">
                <button >
                    Sign up
                </button>
            </a>

        </div>
    )
}
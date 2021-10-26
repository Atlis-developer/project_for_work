import React from 'react';
import './Content.sass';
import People from '../../images/Image-387x340.svg'

export const Content = () =>{
    return(
        <div className='content'>
           <div className='content-big'>
                <h1>
                Test assignment for front-end developers
                </h1>
                <p>
                Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.
                </p>
                <button>
                Sign up
                </button>
           </div>
           <div className='content-small'>
                <div className='content-small-img'>
                    <img src={People}/>
                </div>
                <div className='content-small-txt'>
                    <h1>
                    Let's get acquainted
                    </h1>
                    <h2>
                    I'm a good front-end developer
                    </h2>
                    <p>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </p>
                    <button>
                    Sign up
                    </button>
                </div>
           </div>
        </div>
    )
}
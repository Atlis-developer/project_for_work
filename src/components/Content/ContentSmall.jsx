import React from 'react';
import './ContentSmall.sass';
import PeopleL from '../../images/Image-387x340.svg'
import PeopleM from '../../images/Image-328x287.svg'
import PeopleS from '../../images/Image-296x260.svg'

export const ContentSmall = () => {
    
    return (
        <div className='content-small'>
            <div className='content-small-img'>
                <img src={PeopleL} className='PeopleL'/>
                <img src={PeopleM} className='PeopleM'/>
                <img src={PeopleS} className='PeopleS'/>
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
                <a href="#form">
                    <button >
                        Sign up
                    </button>
                </a>
                
            </div>
        </div>
    )
}
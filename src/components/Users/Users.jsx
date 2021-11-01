import React from 'react';
import './Users.sass';


export const Users = (props) => {


    const getUsers = () => {
        props.addUsers(props.numberPage, props.pageSize);
        props.setNumberPage(prev => prev + 1);
    }

    let usersArray = props.users.sort((a, b) => parseFloat(a.registration_timestamp) - parseFloat(b.registration_timestamp));
    console.log(props.token)
    
    

    return (
        <div className='users'>
            <div className='users-title'>
                <h1>Our cheerful users</h1>
                <h2>The best specialists are shown below</h2>
            </div>
            <div className='users-catalog'>
            {usersArray.map(u => 
                <div className='users-catalog-user'>
                    <img src={u.photo} key={u.id}/>
                    <h2>{u.name}</h2>
                    <div>
                    {u.position}<br/>
                    {u.email}<br/>
                    {u.phone}<br/>
                    </div>
                </div>
            )}
            </div>
            {props.numberPage <= props.allPages && <button onClick={getUsers}>
                Show more
            </button>}
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { userThunkCreator, addUsers } from '../../Redux/users-reducer'
import { Users } from './Users';

const UsersContainer = (props) => {

    const [numberPage, setNumberPage] = useState(1)

    useEffect(() => {
        props.userThunkCreator(numberPage, props.pageSize);
        setNumberPage(prev=>prev+1);
    }, [])

    return <Users userThunkCreator={props.userThunkCreator}
                  setNumberPage={setNumberPage}
                  numberPage={numberPage}
                  pageSize={props.pageSize}
                  addUsers={props.addUsers}
                  allPages={props.allPages}
                  users={props.users}
                  token={props.token}
                  />
}




let mapStateToProps = (state) => {
    return {
        pageSize: state.usersPage.pageSize,
        users: state.usersPage.users,
        allPages: state.usersPage.allPages,
        token: state.usersPage.token,
        state: state.usersPage
    }
}
export default connect(mapStateToProps, { userThunkCreator, addUsers })(UsersContainer)
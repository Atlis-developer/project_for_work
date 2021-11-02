import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formThunkCreator } from '../../Redux/form-reducer'
import { Forms } from './Form';
import { setUserThunk, changeModal } from '../../Redux/users-reducer'


const FormContainer = (props) => {

    useEffect(() => {
        props.formThunkCreator();
    }, [])

    return <Forms position={props.position}
                  setUserThunk={props.setUserThunk}
                  error={props.error}
                  modal={props.modal}
                  changeModal={props.changeModal}
                  />
}




let mapStateToProps = (state) => {
    return {
        position: state.formPage.position,
        error: state.usersPage.messageError,
        modal: state.usersPage.modal,
    }
}
export default connect(mapStateToProps, { formThunkCreator, setUserThunk, changeModal })(FormContainer)
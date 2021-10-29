import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formThunkCreator } from '../../Redux/form-reducer'
import { Forms } from './Form';
import { setUserThunk } from '../../Redux/users-reducer'

const FormContainer = (props) => {

    useEffect(() => {
        props.formThunkCreator();
    }, [])

    return <Forms position={props.position}
                  setUserThunk={props.setUserThunk}/>
}




let mapStateToProps = (state) => {
    return {
        position: state.formPage.position,

    }
}
export default connect(mapStateToProps, { formThunkCreator, setUserThunk })(FormContainer)
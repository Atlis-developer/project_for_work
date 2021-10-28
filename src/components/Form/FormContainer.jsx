import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { formThunkCreator } from '../../Redux/form-reducer'
import { Forms } from './Form';

const FormContainer = (props) => {

    useEffect(() => {
        props.formThunkCreator();
    }, [])

    return <Forms position={props.position}/>
}




let mapStateToProps = (state) => {
    return {
        position: state.formPage.position,

    }
}
export default connect(mapStateToProps, { formThunkCreator })(FormContainer)
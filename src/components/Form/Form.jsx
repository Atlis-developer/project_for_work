import React, { useState } from 'react';
import './Form.sass';
import { Form, Field } from "react-final-form";
import { Modal } from '../Modal/Modal';


export const Forms = (props) => {


    const onSubmit =(values) => {
        let needId = props.position.find(i=> i.name == values.position);
        values.position = needId.id;
        props.setUserThunk(values)
      }

      const required = (value) => (value ? undefined : "Field must be filled");
      const composeValidators = (...validators) => (value) =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <div id='form'>
          {props.modal && <Modal changeModal={props.changeModal}/>}
            <div className='form-title'>
                <h1>Register to get a work</h1>
                <h2>Your personal data is stored according to the Privacy Policy</h2>
            </div>
            <div className='form-table'>
              
            <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} enctype="multipart/form-data">
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div className='input-box'>
                  <input {...input} type="text" placeholder="Your name" className={meta.error && meta.touched ? 'error' : null}/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div className='input-box'>
                  <input {...input} type="text" placeholder="Email" className={meta.error && meta.touched ? 'error' : null}/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="phone"
              validate={composeValidators(required)}
            >
              {({ input, meta }) => (
                <div className='input-box'>
                  <input {...input} type="text" placeholder="Phone" className={meta.error && meta.touched ? 'error' : null}/>
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className='form-position'>
            Select your position
            </div>
                {props.position.map(u=>
                    <label >
                  <Field
                    name="position"
                    component="input"
                    type="radio"
                    value={u.name}
                  />
                  {u.name}
                </label >
                    )}
            <label className="custom-file-upload">
            <Field
              name="photo"
              component="input"
              type="file"
              id="file-upload"
            >
            </Field>
            <i class="fa fa-cloud-upload"></i> Upload
            </label>
            <div className='button'>
              <button className={pristine ? 'close': 'open'} type="submit" disabled={submitting || pristine}>
              Sign up
              </button>
              {props.error}    
            </div>
          </form>
          
        )}
      />
            </div>
        </div>
    )
}
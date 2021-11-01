import React, { useState } from 'react';
import './Form.sass';
import { Form, Field } from "react-final-form";
import { Modal } from '../Modal/Modal';


export const Forms = (props) => {
  const [modal, setModal] = useState (true)
    const onSubmit =(values) => {

      props.setUserThunk(values)
      }

      const required = (value) => (value ? undefined : "Field must be filled");
      const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
      const composeValidators = (...validators) => (value) =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <div id='form'>
          {modal && <Modal setModal={setModal}/>}
            <div className='form-title'>
                <h1>Register to get a work</h1>
                <h2>Your personal data is stored according to the Privacy Policy</h2>
            </div>
            <div className='form-table'>
              
            <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name" validate={required}>
              {({ input, meta }) => (
                <div className='input-box'>
                  <input {...input} type="text" placeholder="Your name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div className='input-box'>
                  <input {...input} type="text" placeholder="Email" />
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
                  <input {...input} type="text" placeholder="Phone" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className='form-position'>
            Select your position
            </div>
                {props.position.map(u=>
                    <label>
                  <Field
                    name="position"
                    component="input"
                    type="radio"
                    value={u.name}
                  />
                  {u.name}
                </label>
                    )}
            <label class="custom-file-upload">
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
            </div>
          </form>
        )}
      />
      
            </div>
        </div>
    )
}
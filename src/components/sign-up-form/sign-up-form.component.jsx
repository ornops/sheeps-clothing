import React from 'react'
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss'
import Button from '../button/button.component';
import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
const defaultFormFields ={
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields,setFormFields] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('passwords do not match');
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already exists')
            }else{
                console.log('use signup encountered an error', error);
            }
            
        }
        
    }

    const handleChange = (event) =>{
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }
 
  return (
    <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <form action="" onSubmit={handleSubmit}>
            <FormInput label='Display Name' type='text' onChange={handleChange} required name='displayName' value={displayName}/>
            <FormInput label='Email' type='email' onChange={handleChange} required name='email' value={email}/>
            <FormInput label='Password' type='password' onChange={handleChange} required name='password' value={password}/>
            <FormInput label='Confirm Password' type='password' onChange={handleChange} required name='confirmPassword' value={confirmPassword}/>
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;

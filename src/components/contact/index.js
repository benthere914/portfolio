import './index.css'
import { useState, useEffect } from 'react'
import{ init, send } from 'emailjs-com';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {userId, accessToken, serviceId} from '../email'
const validator = require('email-validator')
const { phone } = require('phone')

init(userId);

const Contact = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')

    useEffect(() => {
        setPhoneError('')
    }, [phoneNum])

    const updateInputHandler = (e, setFunc, setErrorFunc) => {
        setFunc(e.target.value)
        setErrorFunc('')
    }

    const reset = () => {
        setName('')
        setNameError('')
        setPhoneNum('')
        setPhoneError('')
        setEmail('')
        setEmailError('')
        setMessage('')
        setMessageError('')
    }

    const sendMessageHandler = () => {
        if (!name){
            setNameError(' - required')
        }else{
            setNameError('')
        }
        if (!phoneNum){
            setPhoneError(' - required')
        }else if (!phone(phoneNum)?.isValid){
            setPhoneError(' - invalid phone number')
        }else{
            setPhoneError('')
        }
        if (!email){
            setEmailError(' - required')
        } else if (!validator.validate(email)){
            setEmailError(' - Invalid Email')
        }else{
            setEmailError('')
        }
        if (!message){
            setMessageError(' - required')
        }else{
            setMessageError('')
        }
        if (name && phoneNum && phone(phoneNum)?.isValid && email && validator.validate(email) && message){
            send(serviceId, 'template_fbgmesj', {name, message, phoneNum, email}).then(() => {alert('your message was sent. I will get back to you ASAP'); reset()})
        }
        else{
            // console.log('not yet')
        }
    }
    return (
        <>
            <div className='contactPage'>
                <h2>Contact Me</h2>
                <div className='contactForm'>
                    <p style={nameError?{color: 'red'}:null}>Name{nameError}</p>
                    <input style={nameError?{border: 'solid red 1px'}:null} value={name} onChange={(e) => {updateInputHandler(e, setName, setNameError)}}/>
                    <p style={phoneError?{color: 'red'}:null}>Phone Number{phoneError}</p>
                    <PhoneInput country='us' onlyCountries={['us', 'ca']} value={phoneNum} onChange={setPhoneNum} containerClass='phoneInput' inputClass='phone_input'/>
                    <p style={emailError?{color: 'red'}:null}>Email{emailError}</p>
                    <input style={emailError?{border: 'solid red 1px'}:null} value={email} onChange={(e) => {updateInputHandler(e, setEmail, setEmailError)}}/>
                    <p style={messageError?{color: 'red'}:null}>Message{messageError}</p>
                    <input style={messageError?{border: 'solid red 1px'}:null} value={message} onChange={(e) => {updateInputHandler(e, setMessage, setMessageError)}}/>
                    <button onClick={() => {sendMessageHandler()}}>Send Message</button>
                </div>
            </div>
        </>
    )
}

export default Contact

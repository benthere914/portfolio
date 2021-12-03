import './index.css'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import{ init, send } from 'emailjs-com';
// import userId from '../email'
// import accessToken from '../email'
import {userId, accessToken, serviceId} from '../email'
init(userId);

const Contact = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')
    const [successfulCount, setSuccessfulCount] = useState(0)

    const updateInputHandler = (e, setFunc, setErrorFunc) => {
        setFunc(e.target.value)
        setErrorFunc('')
    }

    const sendMessageHandler = () => {
        if (!name){
            setNameError(' - required')
        }else{
            setNameError('')
        }
        if (!phone){
            setPhoneError(' - required')
        }else{
            setPhoneError('')
        }
        if (!email){
            setEmailError(' - required')
        }else{
            setEmailError('')
        }
        if (!message){
            setMessageError(' - required')
        }else{
            setMessageError('')
        }
        console.log(name, phone, email, message)
        if (name && phone && email && message){
            send(serviceId, 'template_fbgmesj', {name, message, phone, email}).then(() => {alert('your message was sent. I will get back to you ASAP')})
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
                    <input type='' style={phoneError?{border: 'solid red 1px'}:null} value={phone} onChange={(e) => {updateInputHandler(e, setPhone, setPhoneError)}}/>
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

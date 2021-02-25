import  React, { useState }  from 'react'
import  {FormContact}  from './FormContact'
import {FormSuccess} from './FormSuccess'
import './Form.css'
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div className="form-container">
            {!isSubmitted ? <FormContact submitForm = {submitForm} /> : <FormSuccess /> }
        </div>
    )
}

export default Form

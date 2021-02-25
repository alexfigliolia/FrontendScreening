import  React, { useState }  from 'react'
import  {FormContact}  from './FormContact'
import './Form.css'
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div className="form-container bg-body">
            <FormContact submitForm = {submitForm} />  }
        </div>
    )
}

export default Form

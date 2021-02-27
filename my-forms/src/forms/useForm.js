import { useState, useEffect } from 'react'
import nameRegex from '../helpers/data'
import numberRegex from '../helpers/data'
const useForm = validate => {
    const [values, setValues] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        zipCode: ''
    })
    
    const [selectedCountry, setCountry] = useState({
        selectedCountry: null
    })
    const [selectedState, setState] = useState({
        selectedState: null
    })
    const [middleName, setMiddleName] = useState({
        hasMiddleName: false,
    })
    const [address2, setAddress] = useState({
        apartmentOrSuite: false
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        console.log(e.target.name)
        const { name, value } = e.target
        setValues({
            ...values,
            [name] : value
        })
        if(e.target.name === 'hasMiddleName') {
            setMiddleName({
                hasMiddleName : e.target.checked
            })
        } 
        if(e.target.name === 'apartmentOrSuite' ){
            setAddress({
                apartmentOrSuite : e.target.checked
            })
        }
        
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    const handleCountry = selected => {
        setCountry({selectedCountry: selected.value})
    }
    const handleState = selected => {
        setState({
            selectedState : selected.value
        })
    }

    return { handleChange, values, handleSubmit, errors, middleName, address2, handleCountry, handleState, selectedCountry, selectedState }
};
export default useForm;
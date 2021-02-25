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
        state:'',
        country: '',
        zipCode: ''
    })
    const [selectedCountry, setCountry] = useState({
        selectedCountry: ''
    })
    const [selectedState, setState] = useState({
        selectedState: ''
    })
    const [dependencies, setDependencies] = useState({
        hasMiddleName: false,
        apartmentOrSuite: false
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        const { middleName, checked } = e.target
        setValues({
            ...values,
            [name] : value
        })
        if(e.target.name == 'hasMiddleName') {
            setDependencies({
                hasMiddleName : checked
            })
        } else if(e.target.name == 'apartmentOrSuite' ){
            setDependencies({
                apartmentOrSuite : checked
            })
        }
        
    }
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    const handleCountry = selected => {
        setCountry({selected: selected.value})
    }
    const handleState = selected => {
        setState({
            selectedState : selected.value
        })
        console.log(selected.label)
    }

    return { handleChange, values, handleSubmit, errors, dependencies, handleCountry, handleState, selectedCountry, selectedState }
};
export default useForm;
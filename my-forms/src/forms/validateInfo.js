
import nameRegex from '../helpers/data'
import numberRegex from '../helpers/data'

export default function validateInfo(values, dependencies) {
    let errors = {}


    if(!values.firstName.trim()) {
        errors.firstName = "First name required"
    }
    if(!values.lastName.trim()) {
        errors.lastName = "Last name is required"
    }
    if(!values.zipCode.trim()) {
        errors.zipCode = "Invalid zip code"
    }


    return errors;
}
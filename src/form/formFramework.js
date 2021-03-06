export function createOptionControl (number) {
    return createControl({
        label: `Option ${number}`,
        errorMessage: 'Option cannot be empty',
        id: number
    }, {required: true})
}

export function createControl(config, validation) {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export function validate (value, validation=null) {
    if (!validation) {
        return true
    }

    let isValid = true

    if (validation.required) {
        isValid = value.trim() !== '' && isValid  // trim() - delete all spaces
    }

    return isValid  
}

export function validateForm(formControls) {
    let isFormValid = true

    for (let control in formControls) {
        if (formControls.hasOwnProperty(control)) {
            isFormValid = formControls[control].valid && isFormValid
        }
    }
    return isFormValid

}

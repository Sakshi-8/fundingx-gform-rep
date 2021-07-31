export default function validateInfo(values) {
    let errors = {}

    // name
    if (!values.name.trim()) {
        errors.name = "This is a required question"
    }

    // email
    if (!values.email){
        errors.email = "This is a required question"
    }

    // phone
    if (!values.phone){
        errors.phone = "This is a required question"
    }

    //url
    if (!values.url){
        errors.url = "This is a required question"
    }

    //about
    if (!values.about){
        errors.about = "This is a required question"
    }

    return errors
}
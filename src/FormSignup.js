import React from 'react'
import './Form.css'
import useForm from './useForm'
import validate from './validateInfo'
// import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';

const FormSignup = ({submitForm}) => {

    const {handleChange, values, handleSubmit, errors} 
    = useForm(
        submitForm,
        validate
        );

    return (
        <body className='form-layout'>
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>

            {/* <div class="freebirdFormviewerViewHeaderCard freebirdFormviewerViewCenteredContent freebirdViewerHeaderCard freebirdHeaderCard"></div> */}
            {/* <div class="freebirdFormviewerViewHeaderTitle exportFormTitle freebirdCustomFont" dir="auto" role="heading" aria-level="1">Web Development Task</div>
            <div class="freebirdFormviewerViewHeaderDescription" dir="auto">
                Welcome to FundingX! 
                <br/><br/>
                To become a part of our Web Development Team, please complete the task before the deadline mentioned.
                <br/> <br/>
                No task submissions will be entertained after the deadline 
                <br/><br/>
                TASK -<br/>Replicate this Google form which you are looking at.
                <br/><br/>
                You may use HTML,CSS or ReactJs. Preference will be given to one using ReactJs and able to send JSON file to a URL.
                <br/><br/>
                If you like, you may enhance the looks of the page according to you.
                <br/><br/>
                Host this page on GitHub pages or any hosting service you like and paste link in the form.
                <br/><br/>
                The tasks given are for understanding how well you are equipped with the skills.
                <br/><br/>
                Deadline for submission- July 31, 4:00 p.m.
            </div> */}

            {/* <div class="freebirdFormviewerViewHeaderRequiredLegend" aria-hidden="true" dir="auto">*Required</div> */}

            <div className='header-card'></div>

            <div className='content'>

                <div className='description'>
                    <div className='heading'>
                        Web Development Task
                    </div>
                    <p>Welcome to FundingX! </p>
                    <p>To become a part of our Web Development Team, please complete the task before the deadline mentioned. </p>
                    <p>No task submissions will be entertained after the deadline </p>
                    <p>TASK - <br></br>Replicate this Google form which you are looking at. </p>
                    <p>You may use HTML,CSS or ReactJs. Preference will be given to one using ReactJs and able to send JSON file to a URL. </p>
                    <p>If you like, you may enhance the looks of the page according to you. </p>
                    <p>Host this page on GitHub pages or any hosting service you like and paste link in the form. </p>
                    <p>The tasks given are for understanding how well you are equipped with the skills. </p>
                    <p>Deadline for submission- July 31, 4:00 p.m. </p>
                    <div className='required-info'>
                        <p>*Required</p>
                    </div>
                </div>


                <div className='from-fields'>
                <div className="form-inputs">
                    {/* <label htmlFor="name" className="form-label">Name</label> */}
                    <p>Name <span className='asterisk-required'>*</span></p>
                        <input 
                            // type="text" 
                            id='name'
                            name='name' 
                            className="form-input" 
                            placeholder="Your answer"
                            value={values.name}
                            onChange={handleChange}/>
                            {errors.name && <p className='error-alert'>{errors.name}</p>}
                </div>

                <div className="form-inputs">
                    {/* <label htmlFor="email" className="form-label">Email Id</label> */}
                    <p>Email Id <span className='asterisk-required'>*</span></p>
                        <input 
                            // type="email" 
                            id='email'
                            name='email' 
                            className="form-input" 
                            placeholder="Your answer"
                            value={values.email}
                            onChange={handleChange}/>
                            {errors.email && <p className='error-alert'>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    {/* <label htmlFor="phone" className="form-label">Phone No.</label> */}
                    <p>Phone No. <span className='asterisk-required'>*</span></p>
                        <input 
                            // type="tel" 
                            id='phone'
                            name='phone' 
                            className="form-input" 
                            placeholder="Your answer"
                            value={values.phone}
                            onChange={handleChange}/>
                            {errors.phone && <p className='error-alert'>{errors.phone}</p>}
                </div>
                
                <div className="form-inputs">
                    {/* <label htmlFor="url" className="form-label">Page URL</label> */}
                    <p>Page URL <span className='asterisk-required'>*</span></p>
                        <input 
                            // type="url" 
                            id='url'
                            name='url' 
                            className="form-input" 
                            placeholder="Your answer"
                            value={values.url}
                            onChange={handleChange}/>
                            {errors.url && <p className='error-alert'>{errors.url}</p>}
                </div>
                
                <div className="form-inputs">
                    {/* <label htmlFor="about" className="form-label">What is FundingX about?</label> */}
                    <p>What is FundingX about?  <span className='asterisk-required'>*</span></p>
                    <p className='query-descriptions'>Just a one liner as to what you think we do.</p>
                        <input 
                            // type="text" 
                            id='about'
                            name='about' 
                            className="form-input" 
                            placeholder="Your answer"
                            value={values.about}
                            onChange={handleChange}/>
                            {errors.about && <p className='error-alert'>{errors.about}</p>}
                </div>
                </div>

                <button className='form-input-btn' type='submit'>
                    Submit
                </button>

                <p className='footnotes-form'>Never submit passwords through Google Forms.</p>
            
            </div>
            </form>

            <div className='footnotes'>
                <div className='disclaimer'>
                    This content is neither created nor endorsed by Google.
                    <a className='links' 
                    href="https://docs.google.com/forms/u/0/d/e/1FAIpQLScENQ4WJNUKPlof7pvMuqker8VmbTTYXCNByBX-SQrnBdzPFQ/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLScENQ4WJNUKPlof7pvMuqker8VmbTTYXCNByBX-SQrnBdzPFQ/viewform" 
                    target="_blank">Report Abuse</a>
                    -
                    <a className='links' href="https://policies.google.com/terms" target="_blank">Terms of Service</a>
                    -
                    <a className='links' href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a>
                </div>

                <div className='google-forms-link'>
                    <a dir="auto" 
                    href="//www.google.com/forms/about/?utm_source=product&amp;utm_medium=forms_logo&amp;utm_campaign=forms">
                        <img src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_dark_clr_74x24px.svg" alt="Google" width="74px" height="24px"></img>
                        <span className="forms-text">Forms</span>
                    </a>
                </div>
            </div>
        </div>
        </body>
    )
}

export default FormSignup

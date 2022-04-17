import {Container} from '@mui/material'
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

/**
 * StAuth10244: I Nguyen Duc Long, 000837437 certify that this material is my original work. 
 * No other person's work has been used without due acknowledgement. I have not made my work available to anyone else.
 * @returns 
 */
/**
 * @date April 03, 2022
 * @author DUC LONG NGUYEN (Paul)
 * @returns 
 */
export function Forms(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [gender, setGender] = useState("");
    const [issue, setIssue] = useState("");
    const [isRedirect, set_isRedirect] = useState(false);


    if (isRedirect === true) {
        // this.printOutput();
        // return <Redirect to={"/home"}/>;
    }
    return (
        <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
            {/* * * * * * * * * * * * * * * **/}
            {/* * * SB Forms Contact Form * **/}
            {/* * * * * * * * * * * * * * * **/}
            {/* This form is pre-integrated with SB Forms.*/}
            {/* To make this form functional, sign up at*/}
            {/* https://startbootstrap.com/solution/contact-forms*/}
            {/* to get an API token!*/}
                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <Form   id="name"  type="text" placeholder="Enter your name..."
                            validations="required" name="formname"  label="Full name" 
                            feedback1="name:required" contentFeedback1="A name is required."
                            feedback2=" " contentFeedback2=" "
                            getInput={(printInput)=>{
                                setName(printInput);
                            }}/>
                    <Form   id="email" type="email" placeholder="name@example.com" 
                            name="formemail" validations="required,email"  label="Email address" 
                            feedback1="email:required" contentFeedback1="An email is required."
                            feedback2="email:email" contentFeedback2="Email is not valid."
                            getInput={(printInput)=>{
                                setEmail(printInput);
                            }}/>
                    <Form   id="phone" type="tel" placeholder="(123) 456-7890" 
                            name="formphone" validations="required" label="Phone number" 
                            feedback1="phone:required" contentFeedback1="A phone number is required."
                            feedback2=" " contentFeedback2=" "
                            getInput={(printInput)=>{
                                setPhone(printInput);
                            }}/>
                    <FormMessage id="message" type="text" placeholder="Enter your message here..."
                            name="formmesage"validations="required" label="Message"
                            feedback="message:required" contentFeedback="A message is required."
                            getInput={(printInput)=>{
                                setMessage(printInput);
                            }}/>
                    <FormSelect id="gender" name="formgender" 
                            getInput={(printInput)=>{
                                setGender(printInput);
                            }}/>
                    {
                        props.signIn ? "" : (
                            <FormFiles id="avatar" name="formavatar" type="file"
                                    getInput={(printInput)=>{
                                        setIssue(printInput);
                                    }}/>
                        )    
                    }
                    <div className="d-grid">
                        <div className="btn btn-primary btn-lg " id="submitButton"
                            onClick={(event) =>{
                                set_isRedirect(name && email && phone && (message|| issue));
                            }}>Submit</div>
                    </div>
                    {
                        !isRedirect ? "" :
                        (
                            <div className="d-grid">
                                <Container>
                                    <Row>
                                        <Col xs={12} className="my-3 d-flex justify-content-left h5">Your Issue: </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={3}></Col>
                                        <Col sm={9} className="my-3 d-flex justify-content-left ">
                                            <div>
                                                <span  className='d-flex justify-content-left'>Name: {name}</span>
                                                <span  className='d-flex justify-content-left'>Email: {email}</span>
                                                <span  className='d-flex justify-content-left'>Phone: {phone}</span>
                                                <span  className='d-flex justify-content-left'>Your messages: {message}</span>
                                                {
                                                    !props.signIn ? "" : (
                                                        <span  className='d-flex justify-content-left'>Gender {gender}</span>
                                                    )
                                                }
                                                <span  className='d-flex justify-content-left'>
                                                    {
                                                        props.signIn ? "" : (`File Issues: ${issue}`)
                                                    }
                                                    
                                                </span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    );
}

export function Header(props) {
    return (
        <div className="text-center mb-5">
            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope" /></div>
            <h1 className="fw-bolder">{props.signIn ? "SIGN IN" : "Get in touch"}</h1>
            <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
        </div>
    );
}
function Form(props) {
    const [_input, setInput] = useState('');
    const isChange=(event)=>{
        var targetValue= event.target.value;
        setInput(targetValue);
        props.getInput(targetValue)
    }
    
    return (
        <div className="form-floating mb-3">
            <input className="form-control" id={props.id} type={props.type} placeholder={props.placeholder} 
                    data-sb-validations={props.validations} name={props.name} 
                    onChange={(event) => isChange(event) }/>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="invalid-feedback" data-sb-feedback={props.feedback1}>{props.contentFeedback1}</div>
            <div className="invalid-feedback" data-sb-feedback={props.feedback2}>{props.contentFeedback2}</div>
        </div>
    );
}

function FormMessage(props) {
    const [_input, setInput] = useState('');

    const isChange=(event)=>{
        var targetValue= event.target.value;
        setInput(targetValue);
        props.getInput(targetValue)
    }
    
    
    return (/* Message input*/
        <div className="form-floating mb-3">
            <textarea className="form-control" id={props.id} type={props.type} placeholder={props.placeholder} 
                        style={{height: '10rem'}} data-sb-validations={props.validations}  defaultValue={""} 
                        onChange={(event) => isChange(event) }/>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="invalid-feedback" data-sb-feedback={props.feedback}>{props.contentFeedback}</div>
        </div>
    );
}

function FormSelect(props) {
    const [select, setSelect] = useState('');
    const isChange=(event)=>{
        var targetValue= event.target.value;
        setSelect(targetValue);
        props.getInput(targetValue)
    }
    return (
        <div className="form-floating mb-3 form-group">
            <select className="form-control" name={props.name} id={props.id}
                    onChange={(event) =>isChange(event) }>     
                <option value="male">Man</option>
                <option value="female">Woman</option>
                <option value="les">Lesbian</option>
                <option value="gay">Gay</option>
                <option value="bis">Bisexual</option>
                <option value="trans">Transgender</option>
                <option value="queer">Queer</option>
            </select>
            <label htmlFor={props.id}>Gender</label>                            
        </div>
    );
}

function FormFiles (props) {
    const [file, setFile] = useState('');

    const isChange=(event)=>{
        var targetValue= event.target.files[0].name;
        setFile(targetValue);
        props.getInput(targetValue)
    }
    return (
        <div className="form-group my-5">
            <div className="row">
                <div className="col-sm-6"><label htmlFor={props.id}>Give us your problems/issues</label></div>
                <div className="col-sm-6">
                    <input type={props.type} className="form-control-file" name={props.name} id={props.id} 
                    onChange={(event) =>isChange(event) }/> 
                </div>
            </div>
        </div>
    );
}
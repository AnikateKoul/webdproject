import React, {useState, useEffect} from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactUS(props) {
  // All this data is for the validation of the data entered
  const onSubmit = data => console.log(data);
  const initialValues = { firstname: "", lastname: "", email: "", companyName: "", phone: "", subject: "", issue: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const init = { value1: 1, value2: 1, value3: 1, value4: 1, value5: 1, value6: 1};
  const [formErrors, setFormErrors] = useState(init);
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormValues({...formValues, [name] : value});
    setFormErrors(validate(formValues));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(formValues);
    console.log(formErrors);
    setFormErrors(validate(formValues));
  }
  const validate = (values) => {
    const errors = {};
    const regex1 = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    const regex2 = /^([_\-.0-9a-zA-Z]+)@([_\-.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    const regex3 = /^([0-9]){10}$/;
    if((!values.firstname) || (!regex1.test(values.firstname))) {
      errors.firstname = "First name is required!";
      errors.value1 = 1;
    }
    else
    {
      errors.value1 = 0;
    }
    if(!values.lastname || (!regex1.test(values.lastname))) {
      errors.lastname = "Last name is required!";
      errors.value2 = 1;
    }
    else
    {
      errors.value2 = 0;
    }
    if(!values.email || (!regex2.test(values.email))) {
      errors.email = "Email is required!";
      errors.value3 = 1;
    }
    else
    {
      errors.value3 = 0;
    }
    if((!values.phone) || (!regex3.test(values.phone))) {
      errors.phone = "Phone is required!";
      errors.value4 = 1;
    }
    else
    {
      errors.value4 = 0;
    }
    if(!values.subject) {
      errors.subject = "Subject is required!";
      errors.value5 = 1;
    }
    else
    {
      errors.value5 = 0;
    }
    if(!values.issue) {
      errors.issue = "Issue is required!";
      errors.value6 = 1;
    }
    else
    {
      errors.value6 = 0;
    }

    return errors;
  }
  useEffect(() =>{
    console.log(formErrors);
    if(Object.keys(formErrors).length != 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <> 
    {/* These are the main headings */}
      <div style={{ marginTop: "70px" }}></div>
      <div className="main2">
        <div style={{ height: "75px" }}>

          <div className="container my-5 py-5 z-depth-1 containerTemp">
            <section className="px-md-5 mx-md-5 text-center text-lg-left">
              <h1
                className={`font-weight-bold text-${props.mode === "light" ? "dark" : "light"
                  } heading`}
              >
                Contact Us
              </h1>
              <p
                className={`text-${props.mode === "light" ? "dark" : "light"
                  } sub-heading`}
              >
                We'd love to hear from you.
              </p>

              <hr className="my-5" />

              <div className="row">
                <div
                  className={`col-lg-5 col-md-12 mb-0 mb-md-0 text-${props.mode === "light" ? "dark" : "light"
                    } leftDiv`}
                >
                {/* These are information on the left side */}
                  <div className="innerLeftDiv">
                    <h1 className="font-weight-bold leftDivHeading">
                      Contact Information
                    </h1>

                    <p className="mb-4 sub-heading2">
                      <i>
                        Fill up the form and our team will get back to you
                        within 24 hours.
                      </i>
                    </p>
                    <div className="phone">
                      <p>
                        <BsFillTelephoneFill /> +91 9725144789
                      </p>
                    </div>
                    <div className="email">
                      <p>
                        <FaEnvelope /> wanderlusters@gmail.com
                      </p>
                    </div>
                    <div className="address">
                      <p>
                        <FaAddressCard /> Lucknow, UP 50012, India
                      </p>
                    </div>
                    <div className="svgs">
                      <p>
                        <a href="https://twitter.com/iiit_lucknow" target={"_blank"} rel={"noreferrer"}> <FaTwitter/> Twitter</a>
                      </p>
                    </div>
                    <div className="svgs">
                      <p>
                        <a href="https://www.facebook.com/iiitlucknow/" target={"_blank"} rel={"noreferrer"}> <FaFacebook/> Facebook</a> 
                      </p>
                    </div>
                    <div className="svgs">
                      <p>
                        <a href="https://www.instagram.com/iiitlucknow/" target={"_blank"} rel={"noreferrer"}> <FaInstagram/> Instagram </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* This is the main form on the page */}
                <div className="col-lg-7 col-md-12 mb-4 mb-md-0 form-floating rightDiv">
                <form onSubmit={handleSubmit} id="contactForm">
                  <div className="row">
                    <div className="col-md-6 name1">
                      <div className="md-form md-outline mb-0 form-floating">
                        <input
                          type="text"
                          id="form-first-name"
                          className="form-control colorChange"
                          name="firstname"
                          defaultValue={formValues.firstname}
                          onChange={handleChange}
                        />
                        <p style={{ color: 'red' }}>{formErrors.firstname}</p>
                        <label htmlFor="form-first-name" className='contactLab'>First name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="md-form md-outline mb-0 form-floating lastName">
                        <input
                          type="text"
                          id="form-last-name"
                          className="form-control colorChange"
                          name="lastname"
                          defaultValue={formValues.lastname}
                          onChange={handleChange}
                        />
                        <p style={{ color: 'red' }}>{formErrors.lastname}</p>
                        <label htmlFor="form-last-name" className='contactLab'>Last name</label>
                      </div>
                    </div>
                  </div>

                  <div className="md-form md-outline mt-3 form-floating">
                    <input
                      type="text"
                      id="form-company"
                      className="form-control colorChange"
                      name="companyName"
                      defaultValue={formValues.companyName}
                      onChange={handleChange}
                    />
                    <label htmlFor="form-company" className='contactLab'>Company name</label>
                  </div>

                  <div className="md-form md-outline mt-3 form-floating">
                    <input
                      type="email"
                      id="form-email"
                      className="form-control colorChange"
                      name="email"
                      defaultValue={formValues.email}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{formErrors.email}</p>
                    <label htmlFor="form-email" className='contactLab'>E-mail</label>
                  </div>

                  <div className="md-form md-outline mt-3 form-floating">
                    <input
                      type="text"
                      id="form-number"
                      className="form-control colorChange"
                      minLength={10}
                      maxLength={10}
                      name="phone"
                      defaultValue={formValues.phone}
                      onChange={handleChange}
                    />
                    <p style={{ color: 'red' }}>{formErrors.phone}</p>
                    <label htmlFor="form-number" className='contactLab'>Phone</label>
                  </div>

                  <div className="md-form md-outline my-3 form-floating">
                    <input
                      type="text"
                      id="form-subject"
                      className="form-control colorChange"
                      name="subject"
                      defaultValue={formValues.subject}
                      onChange={handleChange}
                    />
                    <label htmlFor="form-subject" className='contactLab'>Subject</label>
                  </div>
                  <p style={{ color: 'red' }}>{formErrors.subject}</p>
                  <div className="md-form md-outline mb-3 form-floating">
                    <textarea
                      id="form-message"
                      className="md-textarea form-control colorChange"
                      rows="3"
                      name="issue"
                      defaultValue={formValues.issue}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="form-message" className='contactLab'>How we can help?</label>
                  </div>
                  {(!(formErrors.value1 + formErrors.value2 + formErrors.value3 + formErrors.value4 + formErrors.value5 + formErrors.value6)) ?
                  (<Link to="/thank">
                  <button
                    type="submit"
                    className={`btn btn-${props.mode === "light" ? "info" : "light"
                      } ml-0 my-10 contactButton`}
                    id="submit"
                  >
                    Submit
                  </button>
                  </Link>) : (<button
                    type="submit"
                    className={`btn btn-${props.mode === "light" ? "info" : "light"
                      } ml-0 my-10 contactButton`}
                    id="submit"
                  >
                    Submit
                  </button>)}
                </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
    </>
  );
}

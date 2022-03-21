import React from "react";
import { Link } from "react-router-dom";
import "./SignupForm.css";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <div>
        <div style={{ height: "90px" }}></div>
        <section>
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        Create an account
                      </h2>
                      <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Field>
                          <input placeholder="Name" type="text" {...register("name", { required: true, minLength: 3, maxLength: 10 })} />
                          <label>Your Name</label>
                        </Form.Field>
                        {errors.name && <p>Name length should be between 3 and 10</p>}
                        <Form.Field>
                          <input placeholder="Email" type="email" {...register("email", { 
                            required: true,  
                            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })} />
                          <label>Email</label>
                          {errors.email && <p>Please check your email address</p>}
                        </Form.Field>
                        <Form.Field>
                          <input placeholder="Password" type="password"  {...register("password", { 
                            required: true, 
                            minLength: 6,
                            maxLength: 15
                        })}/>
                          <label>Password</label>
                        </Form.Field>
                        {errors.password && <p>Password length should be between 6 and 15</p>}
                        <Button type="submit" className="gradient-custom-4">Submit</Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ height: "90px" }}></div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import './App.css';



const Styles = styled.div`

.contact {
  background: rgb(52, 58, 64);
}
.contact h1 {
  color: orange;
  padding: 1.3rem 0;
  text-transform: uppercase;
}

.contact p {
  color: #FFFFFF;
  font-size: 1.2rem;
}
/*------------------ INPUTS -------------------------------*/
.contact input, .contact textarea {
  width: 100%;
  box-sizing: border-box;
  background: none;
  resize: none;
  border: 0;
  border-bottom: 0.125rem  #666666;
  border-radius: 0;
  color: orange;
  outline: 0 !important;
  box-shadow: none !important;
  margin-bottom: 1rem;
  padding-left: 0 !important;
}

.contact .container {
  padding: 4rem 0;
}

.contact input:focus, .contact textarea:focus {
  background: transparent;
  color: orange;
  border-bottom: 0.125rem  #666666;
}


.contact textarea {
  height: 12.2rem !important;
}

.contact-btn {
  top:3rem;
  bottum:3rem;
  margin: 1rem 0 0 0;
  width: 100%;
  background: none;
 
}


.line {
  position: relative;
  top: -0.8rem;
  width: 0;
  height: 0.125rem;
  background: orange;
  display: inline-block;
}

input:focus+.line, textarea:focus+.line {
  width: 100%;
  transition: width 0.5s ease-in-out;
}

input.form-control {
  margin: -0.3rem 0;
}

textarea.form-control {
  margin: -0.3rem 0;
}

.error-message {
  color: #ffffff;
  background: #ef4035;
  text-align: left;
}

.success-message {
  font-weight: 900;
  color: green;
}

/*---------------- MEDIA -----------------------*/
@media(max-width: 768px) {
  .contact {
    overflow-x: hidden;
  }
  
  .contact .container {
    padding: 0 1rem;
  }

  .contact p {
    padding: 0 0.4rem;
  }
}

@media screen and (min-width: 601px) {
  .example {
    font-size: 60px;
  }
}

@media screen and (max-width: 600px) {
  .example {
    font-size: 20px;
  }
}
`;

export const Contact = () => {
    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_67iC5IXmpHZWDQhE1b4vo";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    )
    r.target.reset();
  }

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs.send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Mezmun ghelbilik ewetildi, uzun qalmaymay sizbilen alaqide bolimiz");
      }).catch(err => console.error(`Something went wrong ${err}`));
  }

  return (
    <Styles className="body">
     <div className="contact my-3">
      <div className="text-center">
        <h1 className="example">Biz Bilen Alaqe qiling</h1>
        <p>Jedwelni telepler boyunche toluq toshturup bizge mehsidingizni yollusingiz, tiz ara ichide sizge jawap qilimiz.</p>
        <span className="success-message">{successMessage}</span>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Isim"
                  name="name"
                  ref={
                    register({
                      required: "Ismingizni kirguzing",
                      maxLength: {
                        value: 20,
                        message: "20 me herip cheklimiside isim familingizni kirguzing"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Telphone nomuringiz"
                  name="phone"
                  ref={
                    register({
                      required: "Telphone numuringizni kirguzing",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={
                    register({
                      required: "E-maillingizni kirguzing",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* SUBJECT INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mezmun"
                  name="mezmun"
                  ref={
                    register({
                      required: "OOPS, Mezmun yezishni unuttingiz.",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">
              {/* DESCRIPTION */}
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Alaqe qilishtiki mexsitingizni yezing..."
                  name="description"
                  ref={
                    register({
                      required: "Alaqe qilishtiki mexsitingizni yezing...",
                    })
                  }
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>

              <div className="line"></div>
              <button className="btn btn-outline-success contact-btn " type="submit">Eweting</button>
              <div className="line py-5" ></div>{/* - */}
            </div>
          </div>
        </form>
      </div>
    </div>
    </Styles>
  )
}








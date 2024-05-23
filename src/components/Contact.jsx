import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n4mkhz9",
        "template_ugoztxr",
        form.current,
        "user_vYmDSd9PwIuRXUQEDjYwN"
      )
      .then(
        (result) => {
          toast.success("Nachricht erfolgreich verschickt!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error(
            "Da ist etwas schief gelaufen! Ihre Nachricht konnte nicht verschickt werden!",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }
      );
  };

  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(form.current);
  //   const emailData = {
  //     name: formData.get("name"),
  //     email: formData.get("user_email"),
  //     subject: formData.get("subject"),
  //     message: formData.get("message"),
  //   };
  //   console.log("Sending email data:", emailData); // Log the email data

  //   try {
  //     const response = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(emailData),
  //     });
  //     console.log("Response status:", response.status);
  //     if (response.ok) {
  //       toast.success("Nachricht erfolgreich verschickt!", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       });
  //       document.getElementById("myForm").reset();
  //     } else {
  //       toast.error(
  //         "Da ist etwas schief gelaufen! Ihre Nachricht konnte nicht verschickt werden!",
  //         {
  //           position: "top-right",
  //           autoClose: 2000,
  //           hideProgressBar: false,
  //           closeOnClick: true,
  //           pauseOnHover: true,
  //           draggable: true,
  //           progress: undefined,
  //         }
  //       );
  //     }
  //   } catch (error) {
  //     toast.error(
  //       "Da ist etwas schief gelaufen! Ihre Nachricht konnte nicht verschickt werden!",
  //       {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //       }
  //     );
  //   }
  // };

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" placeholder="IHR NAME" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="IHRE EMAIL"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="IHR ANLIEGEN"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="IHRE NACHRICHT"
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Nachricht senden</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;

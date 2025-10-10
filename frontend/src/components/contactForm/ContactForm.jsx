import { useState } from "react";
import emailjs from "@emailjs/browser"
import "./contactForm.css"

function ContactForm() {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        message: "",

    })

    const sendCustomEmail = (details) => {
        //initialize using userID saved in the .env file
        emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
        emailjs.send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                from_name: details.from_name,
                email: details.email,
                message: details.message
            }
        )
            .then((response) => {
                //debug statement on the console to show the function has been executed successfully
                console.log(response);

            })

            .catch((error) => {
                console.log(error);
            })

    }

    const handleDetailChange = (e) => {
        const { name, value } = e.target
        setDetails((prevDetails) => {
            return {
                ...prevDetails,
                [name]: value
            }
        })
    }

    const handleSendEmail = () => {
        sendCustomEmail(details)
        alert("Message sent successfully!")
    }


    return (
        <div className="contactFrom-container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="from_name" className="form-label">Name:</label>
                        <input
                            className="form-control"
                            name="from_name"
                            value={details.from_name}
                            onChange={handleDetailChange}
                            type="text"
                            placeholder="Required" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input
                            className="form-control"
                            name="email"
                            value={details.email}
                            onChange={handleDetailChange}
                            type="email"
                            placeholder="name@example.com" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <label for="message">Message:</label>
                        <textarea
                            className="form-control"
                            name="message"
                            value={details.message}
                            onChange={handleDetailChange}
                            type="text"
                            placeholder="" />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 mt-3">
                    <button
                        className="btn btn-primary"
                        disabled={!details.from_name || !details.email || !details.message}
                        onClick={handleSendEmail}
                    >
                        Send Email
                    </button>
                </div>
            </div>


        </div>



    )
}

export default ContactForm
import { useState } from "react";
import emailjs from "@emailjs/browser"
import "./contactForm.css"

function ContactForm() {
    const [details, setDetails] = useState({
        name:"",
        email:"",
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
    }




    return (
        <div className="main">
            <div>
                <span>Name:</span>
                <input
                    name="from_name"
                    value={details.from_name}
                    onChange={handleDetailChange}
                    type="text"
                    placeholder="Required.." />
            </div>

            <div>
                <span>Email:</span>
                <textarea
                    name="email"
                    value={details.email}
                    onChange={handleDetailChange}
                    type="email"
                    placeholder="Required" />
            </div>
            <div>
                <span>Message</span>
                <textarea
                    name="message"
                    value={details.message}
                    onChange={handleDetailChange}
                    type="text"
                    placeholder="Required.." />
            </div>
            <button
                disable={!details.from_name || !details.email || !details.message}
                onClick={handleSendEmail}
            >
                <span>Send Email</span>
            </button>

        </div>
    )
}

export default ContactForm
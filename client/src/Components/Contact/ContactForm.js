import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function contactForm() {
    const SERVICE_ID = "service_vbemywk";
    const TEMPLATE_ID = "template_i0d498p";
    const USER_ID = "dMWjLU5PXNQ0ufq1N";

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
            (result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    title: "Message Sent Successfully",
                });
            },
            (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Ooops, something went wrong",
                    text: error.text,
                });
            }
        );
        e.target.reset();
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input
                type="email"
                name="from_email"
                placeholder="E-Mail address"
                required
            />
            <input
                type="tel"
                name="from_phone"
                placeholder="Phone number (Optional)"
            />
            <textarea
                type="text"
                name="message"
                placeholder="What's your message?"
            />
            <div id="formBtns">
                <input type="reset" id="resetBtn" />
                <input
                    type="submit"
                    name="submit"
                    value="Submit"
                    id="submitBtn"
                />
            </div>
        </form>
    );
}

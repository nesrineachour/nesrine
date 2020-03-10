import React, { useState } from "react";
import styles from "./Email.module.css";
import validator from "validator";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const Email = props => {
  const [emailFields, setEmailFields] = useState({
    fName: "",
    lName: "",
    email: "",
    reason: "",
    subject: "",
    message: "",
    loading: false
  });

  const handleChange = (type, event) => {
    const usersEntry = event.target.value;
    console.log(usersEntry);

    setEmailFields({ ...emailFields, [type]: usersEntry });
  };

  const handleSubmit = event => {
    const templateId = "template_5bxXPKXs";
    sendFeedback(templateId, {
      message_html: emailFields.message,
      from_name: emailFields.fName + " " + emailFields.lName,
      reply_to: emailFields.email,
      subject: emailFields.subject,
      to_name: "Nesrine Achour"
    });
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then(res => {
        setEmailFields({
          fName: "",
          lName: "",
          email: "",
          reason: "",
          subject: "",
          message: "",
          loading: true
        });

        setTimeout(() => {
          setEmailFields({
            fName: "",
            lName: "",
            email: "",
            reason: "",
            subject: "",
            message: "",
            loading: false
          });
        }, 1000);

        console.log("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch(err =>
        console.error(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <form className={styles.Email}>
      <div className={styles.Form}>
        <input
          type="text"
          placeholder="First Name"
          value={emailFields.fName}
          onChange={e => handleChange("fName", e)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={emailFields.lName}
          onChange={e => handleChange("lName", e)}
        />
        <input
          className={styles.Subject}
          placeholder="*Email Address"
          value={emailFields.email}
          onChange={e => handleChange("email", e)}
        />
        <input
          className={styles.Subject}
          placeholder="Subject"
          value={emailFields.subject}
          onChange={e => handleChange("subject", e)}
        />
        <textarea
          id="test-mailing"
          onChange={e => handleChange("message", e)}
          placeholder="Enter Message"
          required
          value={emailFields.message}
        />
      </div>
      <button
        type="button"
        value="Submit"
        className={styles.SendButton}
        onClick={handleSubmit}
        disabled={!validator.isEmail(emailFields.email)}
      >
        {emailFields.loading === true ? <LoadingSpinner /> : "Send"}
      </button>
    </form>
  );
};

export default Email;

import React from "react";
import EmailForm from "../components/EmailForm";

function ContactPage(props) {
  return (
    <div>
      <EmailForm title={props.title} />
    </div>
  );
}

export default ContactPage;

import React from "react";
import emailjs from "emailjs-com";

class ContactForm extends React.Component {
  state = { name: "", email: "", message: "" };

  onNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  onEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  onMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const templateId = "template_9ZdYvkLO";

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.name,
      reply_to: this.state.email,
    });
  };

  sendFeedback(templateId, variables) {
    emailjs.init("user_FsLazMir7KWE5H3cLHLFt");

    emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        alert("Email successfully sent!");
        this.resetForm();
      })
      .catch((err) =>
        alert(
          "Oh well, you failed. Here some thoughts on the error that occured:",
          err
        )
      );
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <form className="js-form" onSubmit={this.onFormSubmit} method="POST">
        <div className="form-group">
          <input
            className="form-field js-field-name"
            type="text"
            placeholder="Your name"
            value={this.state.name}
            onChange={this.onNameChange}
            required
          />
          <span className="form-validation"></span>
          <span className="form-invalid-icon">
            <i className="mdi mdi-close" aria-hidden="true"></i>
          </span>
        </div>
        <div className="form-group">
          <input
            className="form-field js-field-email"
            type="email"
            placeholder="Your e-mail"
            value={this.state.email}
            onChange={this.onEmailChange}
            required
          />
          <span className="form-validation"></span>
          <span className="form-invalid-icon">
            <i className="mdi mdi-close" aria-hidden="true"></i>
          </span>
        </div>
        <div className="form-group">
          <textarea
            className="form-field js-field-message"
            placeholder="Type the message here"
            value={this.state.message}
            onChange={this.onMessageChange}
            required
          ></textarea>
          <span className="form-validation"></span>
          <span className="form-invalid-icon">
            <i className="mdi mdi-close" aria-hidden="true"></i>
          </span>
        </div>
        <button className="site-btn site-btn--form" type="submit" value="Send">
          Send
        </button>
      </form>
    );
  }
}

export default ContactForm;

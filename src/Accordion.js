import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Accordion.css";
import { useState } from "react";
import { Layout } from "./components/Layout";
import emailjs from "emailjs-com";
import { Container } from "react-bootstrap";

const keys = require("./keys");

export const Accordion = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(keys.serviceID, keys.templateID, e.target, keys.userID)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    alert("Your message was successfully sent!");
  }

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div class="container">
      <div class="row">
        <section class="mb-4">
          <div class="py-4" />
          <div className="headerBlue text-center">CONTACT US</div>
          <div class="py-3" />
          <p class="text-center w-responsive mx-auto mb-5">
            Have any questions? Don’t hesitate to reach out to us directly! Our
            team will get back to you as soon as possible. <br />
            Please email us at ubcbionicsteam@gmail.com for urgent inquiries.
          </p>

          <div class="row">
            <div class="col-md-12 mb-md-0 mb-5">
              <form name="contact-form" onSubmit={sendEmail}>
                <p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <label for="name" class="">
                          Your name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="md-form mb-0">
                        <label for="email" class="">
                          Your email
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </p>

                <p>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="md-form mb-0">
                        <label for="subject" class="">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </p>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <label for="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="5"
                        class="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                  style={{ marginTop: "20px" }}
                />
              </form>
            </div>
          </div>
        </section>

        <div className="wrapper">
          <div className="accordion">
            <div class="py-2" />
            <div className="headerBlue text-center">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <div class="py-3" />
            {data.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.question}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content show" : "content"}>
                  {" "}
                  {item.answer}{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    question: "When can I apply?",
    answer:
      "The best time to apply is during our recruitment season, which occurs at the start of every winter session semester at the end of August! However, our email inbox remains open throughout the year.",
  },
  {
    question:
      "Will I be considered if I do not have prior experience being on a design team?",
    answer:
      "Yes! We encourage all candidates interested in joining the team to send in an application, regardless of what your experience may include. We are ultimately looking for those who are willing to dedicate the time and energy to learn and further the goals of our team.",
  },
  {
    question: "What sub-team should I apply for?",
    answer:
      "The final choice that you list on your application is up to you! All we ask is that you have an idea of which sub-team(s) aligns best with your own interests or studies, to better help us decide what the best fit is for you.",
  },
  {
    question: "How do I join the research team?",
    answer:
      "The research team is a new addition to our team as a whole, and requires membership on one of our sub-teams to be eligible for consideration. Recommendation from your sub-team lead is also required to apply for a position on the research team. All applications will be reviewed by the executive team and the professor/graduate student in charge.",
  },
];

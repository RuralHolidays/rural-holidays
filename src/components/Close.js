import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Close() {
  const [state, handleSubmit] = useForm("xbjqdoje");
  return (
    <>
      <section className="ui-section-close" id="contact">
        <div className="ui-layout-container">
          <div className="ui-section-close__layout ui-layout-flex">
            <div>
              <h2>Contact Us</h2>
              <p className="ui-text-intro">
                Pre booking is essential for all services listed. We prefer as much notice in advance (minimum 21 days)
                to arrange and pre book our hosts. Our central reservation office is based in Christchurch.
              </p>
            </div>
            <div className="ui-component-cta ui-layout-flex">
              {state.succeeded && <p>Thanks for contacting Rural Holidays. We will be in touch shortly.</p>}
              <form onSubmit={handleSubmit} className="ui-component-form">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="ui-component-input ui-component-input-medium"
                    placeholder={"Name"}
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div>
                  <input
                    type="email"
                    className="ui-component-input ui-component-input-medium"
                    name="email"
                    id="email"
                    placeholder={"Email"}
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                <div>
                  <textarea
                    className="ui-component-input ui-component-input-medium"
                    name="message"
                    id="message"
                    required
                    placeholder={"Your Message"}
                    style={{
                      minHeight: "5rem",
                      resize: "none",
                    }}
                    disabled={state.submitting}
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <div>
                  <button
                    className="ui-component-button ui-component-button-normal ui-component-button-primary"
                    type="submit"
                    disabled={state.submitting}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

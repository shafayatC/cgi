import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  function randomDate(end) {
    return new Number(end + Math.random());
  }
  var p = randomDate(new Number()) * 10000000000000000;
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1zfatsb",
        "template_0ciuxfr",
        e.target,
        "user_3TcS4pRKMgpo7fArsKmSf"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.href = "./thank-you/" + p;
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  useEffect(() => {
    document.getElementById("hello").innerHTML = p;
  }, []);

  return (
    <div className="container mx-auto  ">
      <div className="container">
        <div className="row">
          <div className="mb-10" style={{ marginTop: "4%" }}>
            <p
              className="text-white"
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontFamily: "Branch",
                fontWeight: "700",
              }}
            >
              GET IN TOUCH WITH US
            </p>

            <p
              className="text-white"
              style={{
                marginBottom: "2%",
                textAlign: "center",

                fontWeight: "700",
                marginTop: "-1%",
              }}
            >
              Contact us
            </p>
            <form onSubmit={sendEmail}>
              <div className="container flex flex-col gap-y-2 justify-center  w-96 mx-auto mt-5">
                <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>

                <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                  <input
                    type="email"
                    className="w-full"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                  <input
                    type="text"
                    className="w-full"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </div>

                <div className=" px-2 py-2 rounded-md mx-auto bg-white w-96">
                  <textarea
                    className="form-control w-full"
                    id=""
                    rows="8"
                    placeholder="Your message"
                    name="message"
                    required
                  ></textarea>
                </div>

                <div
                  className=" px-2 py-2 rounded-md mx-auto bg-white w-96"
                  hidden
                >
                  <textarea
                    rows="8"
                    type="number"
                    className="form-control"
                    name="uniqueid"
                    id="hello"
                  />
                </div>

                <div className="  mx-auto">
                  <div className="text-center">
                    <input
                      type="submit"
                      id="button-19"
                      className="bg-shade-color w-40 mt-2 font-semibold cursor-pointer text-white px-3 rounded-md py-1 "
                      value="SUBMIT"
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default ContactForm;

import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="mt-20 heading_3 mb-20">
        <h2>Discuss your ambitions with us</h2>
        <div className="flex flex-col mt-10 items-center">
          <p className=" text-white text-lg ">
            Use our knowledge to get your organization ready for the future.{" "}
            <br />
            Contact our experts now for an introductory meeting.
          </p>
          <a
            href="contact-form"
            target="_blank"
            className="bg-shade-color px-4 py-1 mt-6 text-lg font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

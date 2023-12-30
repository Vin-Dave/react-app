import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="flex justify-center items-center w-full h-screen bg-[#0a192f] p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/659eda6f-02c5-4420-bc67-8bc787f6fab9"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#f17921] text-white">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            If you would like to contact me, please fill out the contact form
            below. I will try to answer your questions and information as soon
            as possible.
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#ea580c] hover:border-[#ea580c] px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

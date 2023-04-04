import React from 'react';

const Contact = () => {
  return (
    
 
    <div
      id="contact"
      className=" w-full h-screen pt-48 pb-20 lg:m-0.5  text-black dark:text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 lg:mx-2">
          <p className="text-4xl text-cyan-500 font-bold inline border-b-4 border-black dark:border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/a72c5fd6-c8bc-4787-8a3f-5b9412a0ba5f"
            method="POST"
            className=" flex flex-col w-full md:w-1/2  text-black dark:text-white"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2  border-black dark:border-gray-500 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  border-black dark:border-gray-500 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md  border-black dark:border-gray-500 focus:outline-none"
            ></textarea>

            <button className=" btn text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
  
  </div>)
};

export default Contact;

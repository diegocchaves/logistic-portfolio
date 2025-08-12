"use client";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef(null);
  const [resultMessage, setResultMessage] = useState("");
  const [resultColor, setResultColor] = useState("text-gray-500");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    // Botcheck: If the field is filled, treat as bot/spam
    if (formData.get("botcheck")) {
      setResultMessage("Bot submission detected.");
      setResultColor("text-red-500");
      return;
    }

    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    const json = JSON.stringify(object);

    setResultMessage("Please wait...");
    setResultColor("text-gray-500");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await response.json();

      if (response.status === 200) {
        setResultMessage(data.message);
        setResultColor("text-green-500");
      } else {
        setResultMessage(data.message);
        setResultColor("text-red-500");
      }
    } catch (error) {
      console.error(error);
      setResultMessage("Something went wrong!");
      setResultColor("text-red-500");
    }

    form.reset();
    setTimeout(() => setResultMessage(""), 5000);
  };

  return (
    <section
      name="contact"
      className="flex flex-col items-center justify-center p-4 py-16  bg-[#0a192f] md:py-36"
    >
      <div className="flex flex-col text-center text-gray-300 md:py-10">
        <p className="inline text-lg font-bold md:text-xl">[ Contact ]</p>
        <p className="py-6 text-[15px] md:text-lg">
          //Submit the form below or shoot me an email -
          diegocchaves21@gmail.com
        </p>
      </div>

      {/* Form at the Right Side */}
      <form
        className="flex flex-col max-w-[600px] w-full border border-gray-700 shadow-lg shadow-gray-800 p-4 md:p-8 rounded-lg text-sm text-gray-300"
        ref={formRef}
        onSubmit={handleSubmit}
        id="form"
        autoComplete="off"
      >
        <input
          type="hidden"
          name="access_key"
          value="ad2d7ecd-4086-444a-90f8-0cad43733952"
        />
        <input
          type="hidden"
          name="subject"
          value="New Submission from Micro Actions Form"
        />
        <input type="checkbox" name="botcheck" className="hidden" />
        <input
          type="hidden"
          name="from_name"
          value="Micro Actions Form"
        ></input>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm ">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            required
            autoFocus
            className="w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#0edef1] focus:border-indigo-300"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm custom-placeholder-color"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@company.com"
            required
            autoFocus
            className="w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#0edef1] focus:border-indigo-300 "
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm">
            Your Message
          </label>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Your Message"
            className="w-full px-3 py-2 text-black placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#0edef1] focus:border-indigo-300 "
          ></textarea>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full px-3 py-4 bg-[#0194c1] text-white cursor-pointer rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            Send Message
          </button>
          {resultMessage && (
            <p
              id="result"
              className={`flex items-center mt-4 text-sm ${resultColor} `}
            >
              {resultMessage}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;

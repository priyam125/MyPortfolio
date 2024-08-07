"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import FooterImg from "@/assets/Contact/footer-cropped.png";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const form = e.target;
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "cda0ff9a-7350-4ca4-a59b-9343765ed66f",
        name: form.name.value,
        email: form.email.value,
        message: form.message.value,
      }),
    });
    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully!");
      form.reset();
      setSuccess(true);
    } else {
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  }

  return (
    <div className="flex flex-col">
      <h1 className="text-white text-3xl font-bold">Contact</h1>
      <div className="contact-container">
        <div id="form-container" className="flex-1">
          <div
            id="form"
            className="max-w-[600px] w-full pt-[25px] px-[25px] pb-[30px] rounded-lg md:m-6 text-slate-300"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="input-box">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="mt-2 w-full h-1/2 bg-transparent border border-[#ddd] outline-none rounded-md p-3"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="input-box">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="mt-2 w-full h-1/2 bg-transparent border border-[#ddd] outline-none rounded-md p-3"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="input-box">
                <label>Your Message</label>
                <textarea
                  name="message"
                  id=""
                  className="mt-2 w-full h-[150px] bg-transparent border border-[#ddd] outline-none rounded-md p-3 resize-none"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-button w-full h-[55px] border-none rounded-md cursor-pointer text-[#fff] font-semibold transition-[0.5s]"
                disabled={loading || success}
              >
                {loading ? (
                  <div className="loader"></div>
                ) : success ? (
                  <span className="checkmark">&#10003;</span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
        <div id="image-container" className="flex-1 hidden md:flex">
          <Image
            src={FooterImg}
            alt="dsd"
            width={1550}
            height={600}
            className="scale-110"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;

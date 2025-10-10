import axios from "axios";
import React, { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:8000"
      : "https://my-portfolio-api-theta.vercel.app";

  const sendMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !message || !budget) {
      // alert("Please fill in all fields");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post(`${BASE_URL}/api/send-email`, {
        name,
        email,
        message,
        budget,
      });

      if (response.status === 200) {
        setSuccess(true);
        setName("");
        setBudget("");
        setMessage("");
        setEmail("");
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative">
      <form
        onSubmit={sendMessage}
        className="border  rounded-3xl flex flex-col gap-6  bg-[#121212] border-[#1f1f1f] p-6 lg:p-10 xl:w-[900px]"
      >
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 ">
          <div className="flex flex-col gap-2 w-full">
            <label id="name" className="font-satoshi-bold">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#1f1f1f] w-full border border-[#252525] px-4 py-2 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label id="email" className="font-satoshi-bold">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#1f1f1f]  border border-[#252525] px-4 py-2 rounded-lg"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="budget" className="font-satoshi-bold">
            What's your budget?
          </label>
          <select
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundPosition: "right 1rem center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "1rem",
            }}
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className=" appearance-none bg-[#1f1f1f] border border-[#252525] px-4 py-2 rounded-lg"
            required
          >
            <option value="">Select budget</option>
            <option value="1000">Up to $1,000</option>
            <option value="2000-5000">$2,000-$5,000</option>
            <option value="10000">$10,000+</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label id="message" className="font-satoshi-bold">
            How can I help you?
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-[#1f1f1f] min-h-44 max-h-44 w-full border border-[#252525] px-4 py-2 rounded-lg"
            required
            data-lenis-prevent
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-[#1f1f1f] " : "bg-[#65e844] "
            } flex items-center justify-center text-black bg-[#65e844] transition-all duration-300 hover:bg-[#1f1f1f]  hover:text-white  w-full border  border-[#252525] py-4`}
          >
            {loading ? (
              <AiOutlineLoading3Quarters className="spin text-2xl text-white " />
            ) : (
              "Send Message"
            )}
          </button>
        </div>
      </form>
      {success && (
        <div className="absolute w-1/2 shadow-lg left-52 top-52 right-52 rounded-xl border text-lg  border-[#141414] flex flex-col gap-2 items-center justify-center  bg-[#161616] p-4">
          <div>
            {" "}
            <IoIosCheckmarkCircle className="text-[3rem]" />
          </div>
          Thanks for your email. I'll get back to you soon!
        </div>
      )}
    </div>
  );
};

export default ContactForm;

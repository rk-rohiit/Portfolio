import React from "react";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    formData.append("access_key", "379435b8-6c7c-4d65-9aaf-6ec745b13e81");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! 🚀", {
          theme: "dark",
          autoClose: 3000,
          position: "top-right",
        });
        form.reset();
      } else {
        toast.error("Failed to send message. Try again later.", {
          theme: "dark",
          autoClose: 3000,
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.", {
        theme: "dark",
        autoClose: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <div className="flex justify-end px-4 mt-10">
      {/* Toast Container with Orange Theme */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: "rgba(30, 20, 10, 0.85)",
          color: "aliceblue",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 165, 0, 0.2)",
          borderRadius: "8px",
        }}
      />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-[600px] backdrop-blur-md bg-white/10 rounded-xl shadow-lg p-4 md:p-6 text-[aliceblue]"
      >
        <h2 className="text-1xl md:text-2xl mb-8 mt-2 font-thin text-center text-orange-400">
          Request a Quote
        </h2>

        {/* First & Last Name */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {["first_name", "last_name"].map((name, idx) => (
            <div key={name} className="relative flex-1 group">
              <div className="flex items-center gap-2">
                <FiUser className="text-orange-500" />
                <input
                  type="text"
                  name={name}
                  required
                  placeholder={idx === 0 ? "First Name" : "Last Name"}
                  className="bg-transparent w-full py-2 font-thin focus:outline-none border-b border-white/20 placeholder-orange-100"
                />
              </div>
              <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            </div>
          ))}
        </div>

        {/* Email */}
        <div className="relative group mb-6">
          <div className="flex items-center gap-2">
            <FiMail className="text-orange-500" />
            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="bg-transparent w-full py-2 font-thin focus:outline-none border-b border-white/20 placeholder-orange-100"
            />
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </div>

        {/* Phone */}
        <div className="relative group mb-6">
          <div className="flex items-center gap-2">
            <FiPhone className="text-orange-500" />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Contact Number"
              className="bg-transparent w-full py-2 font-thin focus:outline-none border-b border-white/20 placeholder-orange-100"
            />
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </div>

        {/* Message */}
        <div className="relative group mb-6">
          <div className="flex items-start gap-2">
            <FiMessageSquare className="text-orange-500 mt-2" />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="4"
              className="bg-transparent font-thin w-full py-2 resize-none focus:outline-none border-b border-white/20 placeholder-orange-100"
            ></textarea>
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="mt-1 px-6 py-2 rounded-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-400 text-black font-medium transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Send Message ✉️
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

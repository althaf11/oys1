import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const STORAGE_KEY = "studentQueries";

const readMessages = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const saveMessages = (data) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    college: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.college || !form.message) {
      alert("Please fill all required fields");
      return;
    }

    const newMsg = {
      id: Date.now(),
      ...form,
      date: new Date().toISOString(),
      adminReply: "",
    };

    saveMessages([newMsg, ...readMessages()]);
    alert("Message sent successfully!");
    setForm({ name: "", email: "", college: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl max-w-2xl mx-auto"
        >
          We’d love to hear from you! Whether you have a question, suggestion, or need assistance —
          our team is here to help.
        </motion.p>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <MapPin className="w-10 h-10 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Our Location</h3>
          <p className="text-gray-600">Plot No:84,Kavuri Hills,Madhapur,Hyderabad, Telangana, India</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <Mail className="w-10 h-10 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Email Us</h3>
          <p className="text-gray-600">support@brainserve.com</p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition duration-300 p-8 text-center"
        >
          <div className="flex justify-center mb-4">
            <Phone className="w-10 h-10 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold text-orange-600 mb-2">Call Us</h3>
          <p className="text-gray-600">+91 98765 43210</p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-orange-600 mb-10"
        >
          Send Us a Message
        </motion.h2>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
            <Input label="Email Address" name="email" value={form.email} onChange={handleChange} />
            <Input label="College Name" name="college" value={form.college} onChange={handleChange} />
            <Input label="Subject" name="subject" value={form.subject} onChange={handleChange} />
          </div>

          <Textarea label="Message" name="message" value={form.message} onChange={handleChange} />

          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-orange-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div>
    <label className="block font-semibold mb-2">{label}</label>
    <input {...props} className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none" />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div className="mb-6">
    <label className="block font-semibold mb-2">{label}</label>
    <textarea {...props} rows="5" className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none" />
  </div>
);

export default Contact;

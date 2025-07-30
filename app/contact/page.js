"use client";
import { useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setLoading(false);
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center bg-night text-white px-2 sm:px-4 pb-24">
      <div className="relative w-full flex flex-col items-center justify-center py-10 sm:py-16 mb-6 sm:mb-8 bg-black/60 border-b border-white/10 shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 text-center tracking-tight">Contact Us</h1>
        <p className="text-base sm:text-lg text-slate-300 text-center max-w-xs sm:max-w-2xl mt-2">Ready to start your next project or need expert advice? Reach out to us for a free consultation or to discuss how we can help your business grow with technology.</p>
      </div>
      <form onSubmit={handleSubmit} className="relative w-full max-w-xs sm:max-w-md bg-black/80 rounded-lg p-4 sm:p-8 border border-white flex flex-col gap-4 mb-6 sm:mb-8">
        <input name="name" className="bg-black border border-white rounded px-3 sm:px-4 py-2 text-white text-sm sm:text-base" type="text" placeholder="Your Name" required />
        <input name="email" className="bg-black border border-white rounded px-3 sm:px-4 py-2 text-white text-sm sm:text-base" type="email" placeholder="Your Email" required />
        <textarea name="message" className="bg-black border border-white rounded px-3 sm:px-4 py-2 text-white text-sm sm:text-base" placeholder="Your Message" rows={4} required />
        <button className="bg-white text-black font-semibold rounded px-3 sm:px-4 py-2 mt-2 hover:bg-slate-200 transition text-sm sm:text-base" type="submit" disabled={loading}>{loading ? "Sending..." : "Send Message"}</button>
        {status === "success" && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        {status === "error" && <p className="text-red-400 mt-2">Failed to send message. Please try again.</p>}
      </form>
      <div className="relative text-slate-300 text-center text-sm sm:text-base">
        <p>Email: info@mytechpadu.com</p>
        <p>Phone: 01126738407 - Afiq</p>
        {/* <p>Address: (Your company address here)</p> */}
      </div>
    </div>
  );
} 
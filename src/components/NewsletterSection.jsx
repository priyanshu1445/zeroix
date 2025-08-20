import React from "react";
import { Mail } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6 flex justify-center items-center">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse -top-10 -left-10"></div>
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse top-10 -right-10"></div>
      </div>

      {/* Content Box */}
      <div className="relative max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center border border-white/20">
        <div className="flex justify-center mb-6">
          <span className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg">
            <Mail className="text-white w-8 h-8" />
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Stay updated with the latest news, exclusive offers, and premium
          insights delivered straight to your inbox.
        </p>

        {/* Input & Button */}
        <form className="flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 px-5 py-4 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
            required
          />
          <button
            type="submit"
            className="px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Subscribe
          </button>
        </form>

        {/* Disclaimer */}
        <p className="text-xs text-gray-400 mt-6">
          By subscribing, you agree to receive our newsletters. You can
          unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;

import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-12 pb-14 px-4">
      <h1 className="md:text-4xl text-2xl font-medium">
        Subscribe now
      </h1>
      <p className="md:text-base text-gray-500/80 pb-6 max-w-xl">
        Be the first to hear about new books, curated picks, and exclusive offers.
      </p>

      <div className="w-full max-w-xl">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 md:py-3 shadow-sm">
            <input
              className="w-full bg-transparent text-sm md:text-base text-gray-700 placeholder:text-gray-400 outline-none"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <button className="whitespace-nowrap rounded-full bg-zinc-900 text-zinc-50 px-5 md:px-6 py-2 md:py-3 text-sm font-medium transition-colors hover:bg-zinc-800">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

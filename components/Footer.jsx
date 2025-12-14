import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
        <h2 className="font-medium text-gray-900 mb-5">About Bookstore</h2>
          <p className="mt-6 text-sm">
            Our bookstore is a place for people who are interested in mastering data science, machine learning, and artificial intelligence. We offer a curated selection of books that cover the latest recommended reads.
            and timeless classics to inspire knowledge and imagination. This website is developed for educational purposes.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About the Store</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Browse Books</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Contact</h2>
            <div className="text-sm space-y-2">
              <p>asseliabooks@gmail.com</p>
              <p>This project is built for educational purpose.</p>
            </div>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-xs md:text-sm">
        © 2025 Assel. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

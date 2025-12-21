import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import boxes from "./boxes.png";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import upload_area from "./upload_area.png";
import ace_the_data_science from "./ace_the_data_science.jpeg";
import the_perfectionists from "./the_perfectionists.jpeg";
import understanding_deep_learning from "./understanding_deep_learning.png";
import ai_engineering from "./ai_engineering.jpeg";
import artificial_intelligence from "./artificial_intelligence.jpeg";
import becoming_a_data_head from "./becoming_a_data_head.jpeg";
import data_science_from_scratch from "./data_science_from_scratch.jpeg";
import hands_on_machine_learning from "./hands_on_machine_learning.jpeg";
import python_with_python from "./python_with_python.jpeg";
import think_like_a_data_scientist from "./think_like_a_data_scientist.jpeg";
import checkmark from "./checkmark.png";
import python_data_science from "./python_data_science.jpeg";

export const assets = {
  logo,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  boxes,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  upload_area,
  ace_the_data_science,
  the_perfectionists,
  understanding_deep_learning,
  checkmark,
  python_data_science,
  ai_engineering,
  artificial_intelligence,
  becoming_a_data_head,
  data_science_from_scratch,
  hands_on_machine_learning,
  python_with_python,
  think_like_a_data_scientist,
};

export const BagIcon = () => {
  return (
    <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z" />
    </svg>
  )
}

export const CartIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z" stroke="#4b5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>

  )
}

export const BoxIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z" />
  </svg>
);

export const HomeIcon = () => (
  <svg className="w-5 h-5 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
  </svg>
);

export const productsDummyData = [
  {
    _id: "67b0f52e3f34a77b6dde9102",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "The Perfectionists",
    description:
      "Simon Winchester traces how increasing levels of engineering precision—from early machine tools to modern space telescopes—reshaped manufacturing, technology, and the modern world.",
    price: 24.99,
    offerPrice: 19.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/the_perfectionists.jpeg"
    ],
    category: "Book",
    date: 1739500000002,
    __v: 0
  },
  {
    _id: "67b0f5663f34a77b6dde9103",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "AI Engineering",
    description:
      "Chip Huyen introduces AI engineering as the craft of building real-world applications with foundation models, covering topics like prompt engineering, RAG, fine-tuning, deployment, and evaluation.",
    price: 74.99,
    offerPrice: 64.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/ai_engineering.jpeg"
    ],
    category: "Book",
    date: 1739500000003,
    __v: 0
  },
  {
    _id: "67b0f5993f34a77b6dde9104",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Data Science from Scratch",
    description:
      "Joel Grus teaches fundamental data science and machine learning concepts using pure Python, emphasizing from-scratch implementations of algorithms to build deep understanding.",
    price: 59.99,
    offerPrice: 49.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/data_science_from_scratch.jpeg"
    ],
    category: "Book",
    date: 1739500000004,
    __v: 0
  },
  {
    _id: "67b0f5ef3f34a77b6dde9105",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Artificial Intelligence: A Modern Approach",
    description:
      "The classic comprehensive AI textbook by Stuart Russell and Peter Norvig, covering intelligent agents, search, knowledge representation, planning, probabilistic reasoning, learning, and applications.",
    price: 119.99,
    offerPrice: 99.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/artificial_intelligence.jpeg"
    ],
    category: "Book",
    date: 1739500000005,
    __v: 0
  },
  {
    _id: "67b0f70c3f34a77b6dde9106",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Think Like a Data Scientist",
    description:
      "Brian Godsey focuses on the end-to-end data science process, showing how to structure projects, formulate questions, collect data, and iterate toward useful business insights.",
    price: 54.99,
    offerPrice: 44.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/think_like_a_data_scientist.jpeg"
    ],
    category: "Book",
    date: 1739500000006,
    __v: 0
  },
  {
    _id: "67b0f7c93f34a77b6dde9107",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Deep Learning with Python",
    description:
      "François Chollet, creator of Keras, presents a practical introduction to deep learning in Python, guiding readers through building and training neural networks for real-world problems.",
    price: 69.99,
    offerPrice: 59.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/python_with_python.jpeg"
    ],
    category: "Book",
    date: 1739500000007,
    __v: 0
  },
  {
    _id: "67b0f8363f34a77b6dde9108",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Becoming a Data Head",
    description:
      "Alex J. Gutman and Jordan Goldmeier explain how to think and communicate like a data scientist, emphasizing intuition for statistics, machine learning, and data-driven decision making.",
    price: 39.99,
    offerPrice: 32.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/becoming_a_data_head.jpeg"
    ],
    category: "Book",
    date: 1739500000008,
    __v: 0
  },
  {
    _id: "67b0f85e3f34a77b6dde9109",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Python Data Science Handbook",
    description:
      "Jake VanderPlas provides a practical reference to core data science tools in Python, including NumPy, pandas, Matplotlib, scikit-learn, and related workflows for analysis.",
    price: 69.99,
    offerPrice: 59.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/python_data_science.jpeg"
    ],
    category: "Book",
    date: 1739500000009,
    __v: 0
  },
  {
    _id: "67b0fa4b3f34a77b6dde9110",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
    description:
      "Aurélien Géron teaches practical machine learning and deep learning with Python, using scikit-learn, Keras, and TensorFlow to build end-to-end projects from data preprocessing to deployment.",
    price: 89.99,
    offerPrice: 74.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/hands_on_machine_learning.jpeg"
    ],
    category: "Book",
    date: 1739500000010,
    __v: 0
  },
  {
    _id: "67b0fa4b3f34a77b6dde9111",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Ace the Data Science Interview",
    description:
      "Kevin Huo and Nick Singh compile real data science interview questions, covering SQL, product sense, statistics, ML, and case studies to help candidates prepare for tech and finance roles.",
    price: 49.99,
    offerPrice: 39.99,
    image: [
      "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/ace_the_data_science.jpeg"
    ],
    category: "Book",
    date: 1739500000011,
    __v: 0
  }
];


export const userDummyData = {
  "_id": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  "name": "Assel Altayeva",
  "email": "asselia@gmail.com",
  "imageUrl": "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/74c47c9e1356ea27826b6e51213a0347382f4f0c/ai-books-images/default.png",
  "cartItems": {
    // "67a1f4e43f34a77b6dde9144": 3
  },
  "__v": 0
}

export const orderDummyData = [
  {
    _id: "67b20934b3db72db5cc77b2b",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67b0f4e43f34a77b6dde9101",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Understanding Deep Learning",
          description:
            "A modern deep learning textbook by Simon J. D. Prince that explains core ideas such as supervised learning, neural networks, transformers, and diffusion models with intuitive visuals and minimal prerequisites in applied math.",
          price: 89.99,
          offerPrice: 79.99,
          image: [
            "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/understanding_deep_learning.png"
          ],
          category: "Book",
          date: 1739500000001,
          __v: 0
        },
        quantity: 1,
        _id: "67b20934b3db72db5cc77b2c"
      }
    ],
    amount: 79.99,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "Alice Johnson",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      __v: 0
    },
    status: "Order Placed",
    date: 1739672426822,
    __v: 0
  },
  {
    _id: "67b20949b3db72db5cc77b2e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67b0f5663f34a77b6dde9103",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "AI Engineering",
          description:
            "Chip Huyen introduces AI engineering as the craft of building real-world applications with foundation models, covering topics like prompt engineering, RAG, fine-tuning, deployment, and evaluation.",
          price: 74.99,
          offerPrice: 64.99,
          image: [
            "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/ai_engineering.jpeg"
          ],
          category: "Book",
          date: 1739500000003,
          __v: 0
        },
        quantity: 1,
        _id: "67b20949b3db72db5cc77b2f"
      }
    ],
    amount: 64.99,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "Sara",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Main Road , 123 Street, G Block",
      city: "City",
      __v: 0
    },
    status: "Order Placed",
    date: 1739672448031,
    __v: 0
  },
  {
    _id: "67b209bab3db72db5cc77b34",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    items: [
      {
        product: {
          _id: "67b0fa4b3f34a77b6dde9111",
          userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
          name: "Ace the Data Science Interview",
          description:
            "Kevin Huo and Nick Singh compile real data science interview questions, covering SQL, product sense, statistics, ML, and case studies to help candidates prepare for tech and finance roles.",
          price: 49.99,
          offerPrice: 39.99,
          image: [
            "https://raw.githubusercontent.com/asselaltayeva/ai-books-img/fa171c24057cc5ca5361f43257e29060e3efe1aa/ai-books-images/ace_the_data_science.jpeg"
          ],
          category: "Book",
          date: 1739500000011,
          __v: 0
        },
        quantity: 2,
        _id: "67b209bab3db72db5cc77b35"
      }
    ],
    amount: 79.98,
    address: {
      _id: "67a1e4233f34a77b6dde9055",
      userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
      fullName: "Kevin Kim",
      phoneNumber: "0123456789",
      pincode: 654321,
      area: "Some Area, 456 Avenue, H Block",
      city: "City",
      __v: 0
    },
    status: "Order Placed",
    date: 1739672560698,
    __v: 0
  }
];


export const addressDummyData = [
  {
    "_id": "67a1e4233f34a77b6dde9055",
    "userId": "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    "fullName": "Soon Lee",
    "phoneNumber": "0123456789",
    "pincode": 654321,
    "area": "Gangnam street, 45",
    "city": "Seoul",
    "__v": 0
  }
]
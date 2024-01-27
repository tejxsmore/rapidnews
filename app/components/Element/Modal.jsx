import { IoMdMail } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Modal({ open, onClose }) {
  if (!open) return null;
  else
    return (
      <div
        onClick={onClose}
        className="fixed top-0 right-0 h-full w-full sm:p-0 p-5 flex justify-center items-center backdrop-blur-lg"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-5 text-center bg-white text-black rounded-md sm:max-w-lg"
        >
          <h1 className="text-4xl font-bold py-5 text-black">
            Subscribe to our Newsletter!
          </h1>
          <p className="text-gray-700 py-5">
            Rapid News provides its users with curated news and events happening
            around the world, click the "Subscribe" button and be a part of a
            larger and wiser community.
          </p>
          <div className="flex justify-evenly">
            <button
              onClick={onClose}
              className="bg-white text-saffron hover:bg-saffron hover:text-white border-2 border-saffron rounded-md px-3 py-2 my-5"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
}

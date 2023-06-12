export default function Modal({ open, onClose }) {
  if (!open) return null;
  else
    return (
      <div
        onClick={onClose}
        className="fixed top-2 right-2 h-full w-full flex justify-center items-center backdrop-blur-sm"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-5 text-center bg-white text-black rounded-sm sm:max-w-lg"
        >
          <img
            src="img/email.png"
            alt="Email icon"
            className="ml-auto mr-auto w-12"
          />
          <h1 className="text-4xl font-bold p-3 py-6 text-gray-700">
            Subscribe to our Newsletter!
          </h1>
          <p>
            Rapid News provides its users with curated news and events happening
            around the world, click the "Subscribe" button and be a part of a
            larger and wiser community.
          </p>
          <div className="flex justify-evenly">
            <button
              onClick={onClose}
              className="bg-blue-300 my-6 px-2 py-1 rounded-sm hover:text-gray-700"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
}

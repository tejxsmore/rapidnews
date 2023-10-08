export default function Modal({ open, onClose }) {
  if (!open) return null;
  else
    return (
      <div
        onClick={onClose}
        className="fixed top-0 right-0 h-full w-full sm:p-0 p-3 flex justify-center items-center backdrop-blur-md"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-5 text-center bg-white text-black rounded-sm sm:max-w-lg"
        >
          <img
            src="img/mail.png"
            alt="Email icon"
            className="ml-auto mr-auto w-10"
          />
          <h1 className="text-4xl font-bold p-3 py-6 text-black">
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
              className="bg-violet-900 text-white mt-6 rounded-sm px-3 py-2"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
}

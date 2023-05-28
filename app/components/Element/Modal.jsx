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
          className="p-3 text-center bg-blue-500"
        >
          <h1 className="text-4xl font-bold p-3 pb-6">
            Subscribe to our Newsletter!
          </h1>
          <div className="flex justify-evenly">
            <button onClick={onClose} className="bg-white p-2 rounded-md">
              Subscribe
            </button>
            <button onClick={onClose} className="bg-white p-2 rounded-md">
              Close Modal
            </button>
          </div>
        </div>
      </div>
    );
}

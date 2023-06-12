"use client";
import { useState } from "react";
import Modal from "./Modal";

function Subscribe() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="px-2 rounded-sm hover:text-white hover:bg-blue-400">
      <button onClick={() => setOpenModal(true)}>Subscribe</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Subscribe;

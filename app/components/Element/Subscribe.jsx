"use client";
import { useState } from "react";
import Modal from "./Modal";
import { IoMdMail } from "react-icons/io";

function Subscribe() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="font-semibold rounded-md text-gray-200 hover:text-white">
      <button onClick={() => setOpenModal(true)}>
        <IoMdMail className="text-[30px] mt-1.5 text-saffron" />
      </button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default Subscribe;

"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Modal = () => {
  return (
    <div className="fixed bg-beige p-2">
      <ul>
        <li>
          <Link href="/sports">Sports</Link>
        </li>
        <li>
          <Link href="/science">Science</Link>
        </li>
        <li>
          <Link href="/business">Business</Link>
        </li>
        <li>
          <Link href="/entertainment">Entertainment</Link>
        </li>
      </ul>
    </div>
  );
};

const Label = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(!showModal)} className="px-2">
        Topics ↓
      </button>
      {showModal && <Modal />}
    </div>
  );
};

export default Label;

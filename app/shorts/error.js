"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>There was an Error : {error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

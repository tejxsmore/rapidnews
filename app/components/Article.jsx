// import Link from "next/link";

// export default function Article({ date, title, content, url, img }) {
//   return (
//     <div className="flex justify-center items-center ">
//       <div className="items-center my-4 bg-gray-200 rounded-xl p-2">
//         <h6 className="max-w-lg py-1">{date}</h6>
//         <h1 className="max-w-lg py-1 ">{title}</h1>
//         <img src={img} alt="Image" style={{ width: 512 }} />
//         <h6 className="max-w-lg py-1">{content}</h6>
//         <Link className="py-1" href={url}>
//           Read more ➡️
//         </Link>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function Article({ title, content, url, img }) {
  return (
    <div className="p-3">
      <h1 className="max-w-lg py-1 ">{title}</h1>
      <img src={img} alt="Image" style={{ width: 500 }} />
      <h6 className="max-w-lg py-1">{content}</h6>
      <Link className="py-1" href={url}>
        Read more ➡️
      </Link>
    </div>
  );
}

// import { useEffect } from "react";

// const Mailaccess = ({ onClose }) => {
//   useEffect(() => {
//     // Disable background scrolling when the modal is open
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto"; // Re-enable scrolling on close
//     };
//   }, []);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
//       <div className="bg-black text-white p-6 rounded-lg shadow-lg w-96 relative">
//         {/* Close Button */}
//         <button className="absolute top-2 right-2 text-gray-300 hover:text-white" onClick={onClose}>
//           ✖
//         </button>

//         <h2 className="text-xl font-semibold mb-4">Get Early Access</h2>
//         <p className="text-gray-300 mb-4">Enter your email to receive updates.</p>
//         <form className="w-full flex flex-col gap-2">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="p-2 border rounded-md w-full bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
//           />
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Mailaccess;

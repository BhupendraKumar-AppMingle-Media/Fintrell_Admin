// const Assumptions = () => {
//   return (
//     <div className="flex justify-center bg-[#f4f9fd] ml-10">
//       <div className="w-full max-w-5xl  bg-[#f4f9fd] ">
//         <form className="space-y-6">
//           {/* Name of the Company */}
//           <div>
//             <label className="block text-gray-700 mb-1" htmlFor="companyName">
//               Name of the Company
//             </label>
//             <input
//               type="text"
//               id="companyName"
//               placeholder="Enter Company Name"
//               className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>

//           {/* Name of the Promoter */}
//           <div>
//             <label className=" text-gray-700 mb-1" htmlFor="constitution">
//               Constitution
//             </label>
//             <select
//               id="constitution"
//               className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="">--Select--</option>
//             </select>
//           </div>

//           <div className="flex gap-4">
//             {/* Year of the Commencement*/}
//             <div className="flex  gap-4">
//               <div>
//                 <label
//                   className=" text-gray-700 mb-1"
//                   htmlFor="yearEstablishment"
//                 >
//                   Date Of Commencement
//                 </label>
//                 <input
//                   type="date"
//                   id="yearEstablishment"
//                   className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <p className="text-sm text-gray-500 mt-1">Format:DD-MM-YYYY</p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div>
//                 <label
//                   className=" text-gray-700 mb-1"
//                   htmlFor="yearEstablishment"
//                 >
//                   Select Dispersemnt
//                 </label>
//                 <input
//                   type="month"
//                   id="yearEstablishment"
//                   className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <p className="text-sm text-gray-500 mt-1">Format: MM-YYYY</p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <div>
//                 <label
//                   className=" text-gray-700 mb-1"
//                   htmlFor="yearEstablishment"
//                 >
//                   Select Dispersemnt
//                 </label>
//                 <input
//                   type="year"
//                   id="yearEstablishment"
//                   className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <p className="text-sm text-gray-500 mt-1">Format:YYYY</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-4">
//             <div className="flex gap-4">
//               <div>
//                 <label
//                   className=" text-gray-700 mb-1"
//                   htmlFor="yearEstablishment"
//                 >
//                   Monotorium Period (month)
//                 </label>
//                 <input
//                   type="year"
//                   id="yearEstablishment"
//                   className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 <p className="text-sm text-gray-500 mt-1">Format:MM</p>
//               </div>
//             </div>

//             <div className="flex  gap-4">
//               <div>
//                 <label
//                   className=" text-gray-700 mb-1"
//                   htmlFor="yearEstablishment"
//                 >
//                   Rate Of Interest (%)
//                 </label>
//                 <input
//                   type="year"
//                   id="yearEstablishment"
//                   className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
//                 />

//                 {/* <p className="text-sm text-gray-500 mt-1">%</p> */}
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-between items-center mt-4">
//             <button
//               // onClick={handleSubmit}
//               className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Submit
//             </button>
//             <button
//               // onClick={handleSubmit}
//               className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Next
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Assumptions;


const Assumptions = () => {
  return (
    <div className="flex justify-center bg-[#f4f9fd] ml-10 pt-10"> {/* Add 'pt-20' for spacing */}
      <div className="w-full max-w-5xl bg-[#f4f9fd]">
        <form className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Assumptions</h1>
          {/* Name of the Company */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="companyName">
              Name of the Company
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter Company Name"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Constitution */}
          <div>
            <label className="text-gray-700 mb-1" htmlFor="constitution">
              Constitution
            </label>
            <select
              id="constitution"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">--Select--</option>
            </select>
          </div>

          {/* Date and Dispersment Fields */}
          <div className="flex gap-4">
            <div>
              <label className="text-gray-700 mb-1" htmlFor="dateOfCommencement">
                Date Of Commencement
              </label>
              <input
                type="date"
                id="dateOfCommencement"
                className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Format: DD-MM-YYYY</p>
            </div>

            <div>
              <label className="text-gray-700 mb-1" htmlFor="dispersmentMonth">
                Select Dispersment (MM-YYYY)
              </label>
              <input
                type="month"
                id="dispersmentMonth"
                className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Format: MM-YYYY</p>
            </div>

            <div>
              <label className="text-gray-700 mb-1" htmlFor="dispersmentYear">
                Select Dispersment (YYYY)
              </label>
              <input
                type="number"
                id="dispersmentYear"
                placeholder="YYYY"
                className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Format: YYYY</p>
            </div>
          </div>

          {/* Other Fields */}
          <div className="flex gap-4">
            <div>
              <label className="text-gray-700 mb-1" htmlFor="monotoriumPeriod">
                Monotorium Period (month)
              </label>
              <input
                type="number"
                id="monotoriumPeriod"
                placeholder="MM"
                className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Format: MM</p>
            </div>

            <div>
              <label className="text-gray-700 mb-1" htmlFor="rateOfInterest">
                Rate Of Interest (%)
              </label>
              <input
                type="number"
                id="rateOfInterest"
                placeholder="%"
                className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit and Next Buttons */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Assumptions;


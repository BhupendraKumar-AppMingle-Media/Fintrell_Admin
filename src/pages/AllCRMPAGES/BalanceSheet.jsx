// const Assumptions = () => {
//   return (
//     <div className="flex justify-center bg-[#f4f9fd] ml-10 pt-10">
//       {" "}
//       {/* Add 'pt-20' for spacing */}
//       <div className="w-full max-w-5xl bg-[#f4f9fd]">
//         <form className="space-y-6">
//           <h1 className="text-2xl font-bold text-gray-800 mb-6">
//             Balance Sheet
//           </h1>

//           {/* Name of the Company */}

//           <div className="flex  gap-4  flex-wrap w-full">
//             <div className="flex  w-1/3">
//               <label className="block text-gray-700 mb-1" htmlFor="companyName">
//                 DEBT Liabilities:
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 placeholder="Enter Company Name"
//                 className="w-full   border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="flex  w-1/3">
//               <label className="block text-gray-700 mb-1" htmlFor="companyName">
//                 Existing loan:
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 placeholder="Enter Company Name"
//                 className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="flex  w-1/3">
//               <label className="block text-gray-700 mb-1" htmlFor="companyName">
//                 Total Secur Loan
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 placeholder="Enter Company Name"
//                 className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="flex  w-1/3">
//               <label className="block text-gray-700 mb-1" htmlFor="companyName">
//                 Unseen loan
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 placeholder="Enter Company Name"
//                 className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="flex  w-1/3">
//               <label className="block text-gray-700 mb-1" htmlFor="companyName">
//                 Government Fund
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 placeholder="Enter Company Name"
//                 className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             <div className="flex  w-1/3">
//               <label className="block text-gray-700 mb-1" htmlFor="companyName">
//                 Total Unsecure
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 placeholder="Enter Company Name"
//                 className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           {/* curent liabilities */}
//           <div className="flex  flex-col">
//             <div className="font-semibold">Cureent Liabilites:</div>

//             <div className="flex gap-4 mt-2">
//               <div className="flex  w-1/3">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Cash Credit
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className="flex  w-1/3">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Sundry Creditor
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* other current  */}
//           <div className="flex flex-col ">
//             <div className=" font-semibold">Other Current Assets:</div>

//             <div className=" flex  w-1/3 mt-2">
//               <label className="block text-gray-700 mb-1" htmlFor="companyName">
//                 Total Current Liabilities
//               </label>
//               <input
//                 type="text"
//                 id="companyName"
//                 placeholder="Enter Company Name"
//                 className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>
//           </div>

//           {/* net worth */}

//           <div className="flex flex-col ">
//             <div className=" font-semibold">Net Worth:</div>

//             <div className="flex  flex-wrap gap-4">
//               <div className=" flex gap-2 w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Capital Balance
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Opening Balance/Share Capital
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Our Contribution
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Surplus or Deficit in P&L
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Drawing
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Sub Total
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Total Libilities
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* assets */}

//           <div className="flex flex-col ">
//             <div className=" font-semibold">Current Aseest</div>

//             <div className="flex  flex-wrap gap-4">
//               <div className=" flex gap-2 w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Cash & Bank
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Stock in hand
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Sundry Debtors and Closing Receivables
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Loan & Advance
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Deposit
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Other Current Assets
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Sub Total
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* investment */}

//           <div className="flex flex-col ">
//             <div className=" font-semibold">Investment</div>

//             <div className="flex  flex-wrap gap-4">
//               <div className=" flex gap-2 w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Other Non-Current Assets
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Additor
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Depreciation
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Net Block
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>

//               <div className=" flex  w-1/3 mt-2">
//                 <label
//                   className="block text-gray-700 mb-1"
//                   htmlFor="companyName"
//                 >
//                   Total Assets
//                 </label>
//                 <input
//                   type="text"
//                   id="companyName"
//                   placeholder="Enter Company Name"
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Assumptions;




const Assumptions = () => {
  return (
    // <di className="flex justify-center bg-[#f4f9fd] p-10">
      <div className="w-full max-w-6xl bg-[#f4f9fd]  rounded-lg p-8">
        <form className="space-y-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 ">
            Balance Sheet
          </h1>

          {/* DEBT Liabilities */}
          <div>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="debtLiabilities">
                  DEBT Liabilities
                </label>
                <input
                  type="text"
                  id="debtLiabilities"
                  value="Data from backend"
                  readOnly
                  className="w-full bg-slate-300 border border-gray-300 rounded-xl p-2 focus:outline-none cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="existingLoan">
                  Existing Loan
                </label>
                <input
                  type="text"
                  id="existingLoan"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="totalSecureLoan">
                  Total Secure Loan
                </label>
                <input
                  type="text"
                  id="totalSecureLoan"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="unseenLoan">
                  Unseen Loan
                </label>
                <input
                  type="text"
                  id="unseenLoan"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="governmentFund">
                  Government Fund
                </label>
                <input
                  type="text"
                  id="governmentFund"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="totalUnsecure">
                  Total Unsecure
                </label>
                <input
                  type="text"
                  id="totalUnsecure"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="totalUnsecure">
                  Total Libilities
                </label>
                <input
                  type="text"
                  id="totalUnsecure"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Current Liabilities */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Current Liabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="cashCredit">
                  Cash Credit
                </label>
                <input
                  type="text"
                  id="cashCredit"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="sundryCreditor">
                  Sundry Creditor
                </label>
                <input
                  type="text"
                  id="sundryCreditor"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Other Current Assets */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Other Current Liabilities
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label  className="block text-gray-700 mb-1" htmlFor="totalCurrentLiabilities">
                  Total Current Liabilities
                </label>
                <input
                  readOnly
                  type="text"
                  id="totalCurrentLiabilities"
                  placeholder="Enter value"
                  value="Data from backend"
                  className="w-full border bg-slate-300 border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500  focus:outline-none cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Net Worth */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Net Worth
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="capitalBalance">
                  Capital Balance
                </label>
                <input
                  type="text"
                  id="capitalBalance"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="openingBalance">
                  Opening Balance/Share Capital
                </label>
                <input
                  type="text"
                  id="openingBalance"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="ourContribution">
                  Our Contribution
                </label>
                <input
                  type="text"
                  id="ourContribution"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="ourContribution">
                  Surplus or Deficit in P&L
                </label>
                <input
                  type="text"
                  id="ourContribution"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="ourContribution">
                  Drawing
                </label>
                <input
                  type="text"
                  id="ourContribution"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="ourContribution">
                 Sub Total
                </label>
                <input
                  type="text"
                  id="ourContribution"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="ourContribution">
                 Total libilities
                </label>
                <input
                  type="text"
                  id="ourContribution"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>







            </div>
          </div>

          {/* Current Assets */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Current Assets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="cashBank">
                  Cash & Bank
                </label>
                <input
                  type="text"
                  id="cashBank"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="stockInHand">
                  Stock in Hand
                </label>
                <input
                  type="text"
                  id="stockInHand"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="sundryDebtors">
                  Sundry Debtors and Closing Receivables
                </label>
                <input
                  type="text"
                  id="sundryDebtors"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="sundryDebtors">
                  Loan & Advances
                </label>
                <input
                  type="text"
                  id="sundryDebtors"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="sundryDebtors">
                  Deposit
                </label>
                <input
                  type="text"
                  id="sundryDebtors"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="sundryDebtors">
                  Other Current Assets
                </label>
                <input
                  type="text"
                  id="sundryDebtors"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="sundryDebtors">
                  Sub Total
                </label>
                <input
                  type="text"
                  id="sundryDebtors"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

             







            </div>
          </div>




          {/* Investment */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Investment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="nonCurrentAssets">
                  Other Non-Current Assets
                </label>
                <input
                  type="text"
                  id="nonCurrentAssets"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="depreciation">
                  Depreciation
                </label>
                <input
                  type="text"
                  id="depreciation"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="closingValue">
                  Additior
                </label>
                <input
                  type="text"
                  id="closingValue"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1" htmlFor="closingValue">
                  Net Block
                </label>
                <input
                  type="text"
                  id="closingValue"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="closingValue">
                  Total Assets
                </label>
                <input
                  type="text"
                  id="closingValue"
                  placeholder="Enter value"
                  className="w-full border border-gray-300 rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
       </div>
    // </di>
  );
};

export default Assumptions;

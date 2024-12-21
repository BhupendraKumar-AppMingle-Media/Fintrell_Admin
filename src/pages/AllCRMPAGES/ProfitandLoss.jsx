// import { useState, useEffect } from "react";
// import { RiRestartFill } from "react-icons/ri"; // Example of a valid icon from RemixIcons


// const Assumptions = () => {
//   const [formData, setFormData] = useState({
//     domesticRevenue: "",
//     otherIncome: "",
//     openingStock: "",
//     purchases: "",
//     labourAndTransport: "",
//     powerAndFuel: "",
//     otherPriceCost: "",
//     closingStock: "",
//     indirectExpenses: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Simulate fetching data from backend
//   useEffect(() => {
//     const fetchedData = {
//       domesticRevenue: 5000,
//       otherIncome: 1200,
//       openingStock: 3000,
//       purchases: 4000,
//       labourAndTransport: 1500,
//       powerAndFuel: 800,
//       otherPriceCost: 600,
//       closingStock: 2500,
//       indirectExpenses: 900,
//     };
//     setFormData(fetchedData);
//   }, []);

//   const handleChange = (e) => {
//     const { id, value } = e.target;

//     // Validate input: only numbers allowed
//     if (isNaN(value)) {
//       setErrors((prev) => ({
//         ...prev,
//         [id]: "Only numeric values are allowed.",
//       }));
//     } else {
//       setErrors((prev) => ({
//         ...prev,
//         [id]: "",
//       }));
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [id]: value,
//     }));
//   };

//   const handleRefresh = (field) => {
//     // Simulate fetching data for a specific field
//     const fetchedData = {
//       domesticRevenue: 5000,
//       otherIncome: 1200,
//       openingStock: 3000,
//       purchases: 4000,
//       labourAndTransport: 1500,
//       powerAndFuel: 800,
//       otherPriceCost: 600,
//       closingStock: 2500,
//       indirectExpenses: 900,
//     };

//     setFormData((prev) => ({
//       ...prev,
//       [field]: fetchedData[field],
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//   };

//   return (
//     <div className="flex ml-4 min-h-screen bg-[#f4f9fd] py-10">
//       {/* <di className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8"> */}
//         <form className="space-y-6" onSubmit={handleSubmit}>
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">Profit And Loss</h1>

//           {/* Render all input fields */}
//           {[
//             { id: "domesticRevenue", label: "Domestic Revenue" },
//             { id: "otherIncome", label: "Other Income" },
//             { id: "openingStock", label: "Opening Stock" },
//             { id: "purchases", label: "Purchases" },
//             { id: "labourAndTransport", label: "Labour And Transport" },
//             { id: "powerAndFuel", label: "Power And Fuel" },
//             { id: "otherPriceCost", label: "Other Price Cost" },
//             { id: "closingStock", label: "Closing Stock" },
//             { id: "indirectExpenses", label: "Indirect Expenses" },
//           ].map((field) => (
//             <div key={field.id} className="grid grid-cols-12 gap-4 items-center">
//               <label
//                 htmlFor={field.id}
//                 className="col-span-3 text-gray-700 font-medium"
//               >
//                 {field.label}
//               </label>
//               <div className="col-span-7">
//                 <input
//                   type="text"
//                   id={field.id}
//                   value={formData[field.id]}
//                   onChange={handleChange}
//                   className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//                 {errors[field.id] && (
//                   <p className="text-sm text-red-500 mt-1">{errors[field.id]}</p>
//                 )}
//               </div>


//               <button
//                 type="button"
//                 onClick={() => handleRefresh(field.id)}
//                 // className=" bg-blue-500 text-white  hover:bg-blue-600"
//                 className=" "
//               >
//                 <RiRestartFill  className="w-8"/>
//                 {/* Refresh */}

//               </button>

              
//             </div>
//           ))}

//           {/* Submit Button */}
//           <div className="flex justify-end mt-8">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-800"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       {/* </di> */}
//     </div>
//   );
// };

// export default Assumptions;





import { useState, useEffect } from "react";
import { RiRestartFill } from "react-icons/ri"; // Example of a valid icon from RemixIcons

const Assumptions = () => {
  const [formData, setFormData] = useState({
    domesticRevenue: "",
    otherIncome: "",
    openingStock: "",
    purchases: "",
    labourAndTransport: "",
    powerAndFuel: "",
    otherPriceCost: "",
    closingStock: "",
    indirectExpenses: "",
    cashCredit: "",
    termLoan: "",
  });

  const [errors, setErrors] = useState({});

  // Simulate fetching data from backend
  useEffect(() => {
    const fetchedData = {
      domesticRevenue: 5000,
      otherIncome: 1200,
      openingStock: 3000,
      purchases: 4000,
      labourAndTransport: 1500,
      powerAndFuel: 800,
      otherPriceCost: 600,
      closingStock: 2500,
      indirectExpenses: 900,
      cashCredit: 2000,
      termLoan: 5000,
    };
    setFormData(fetchedData);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Validate input: only numbers allowed
    if (isNaN(value)) {
      setErrors((prev) => ({
        ...prev,
        [id]: "Only numeric values are allowed.",
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        [id]: "",
      }));
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRefresh = (field) => {
    // Simulate fetching data for a specific field
    const fetchedData = {
      domesticRevenue: 5000,
      otherIncome: 1200,
      openingStock: 3000,
      purchases: 4000,
      labourAndTransport: 1500,
      powerAndFuel: 800,
      otherPriceCost: 600,
      closingStock: 2500,
      indirectExpenses: 900,
      cashCredit: 2000,
      termLoan: 5000,
    };

    setFormData((prev) => ({
      ...prev,
      [field]: fetchedData[field],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="flex justify-center min-h-screen bg-[#f4f9fd] py-10">
      <form className="space-y-6 w-full max-w-4xl bg-[#f4f9fd]  rounded-lg " onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Profit And Loss</h1>

        {/* Render all input fields */}
        {[
          { id: "domesticRevenue", label: "Domestic Revenue" },
          { id: "otherIncome", label: "Other Income" },
        ].map((field) => (
          <div key={field.id} className="grid grid-cols-12 gap-4 items-center">
            <label
              htmlFor={field.id}
              className="col-span-3 text-gray-700 font-medium"
            >
              {field.label}
            </label>
            <div className="col-span-7">
              <input
                type="text"
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors[field.id] && (
                <p className="text-sm text-red-500 mt-1">{errors[field.id]}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => handleRefresh(field.id)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <RiRestartFill className="w-5 h-5" />
            </button>
          </div>
        ))}

        {/* Cost Section */}
        <h2 className="text-xs font-semibold text-gray-500 mt-2">Cost</h2>

        {[
          { id: "openingStock", label: "Opening Stock" },
          { id: "purchases", label: "Purchases" },
          { id: "labourAndTransport", label: "Labour And Transport" },
          { id: "powerAndFuel", label: "Power And Fuel" },
          { id: "otherPriceCost", label: "Other Price Cost" },
          { id: "closingStock", label: "Closing Stock" },
          { id: "indirectExpenses", label: "Indirect Expenses" },
        ].map((field) => (
          <div key={field.id} className="grid grid-cols-12 gap-4 items-center">
            <label
              htmlFor={field.id}
              className="col-span-3 text-gray-700 font-medium"
            >
              {field.label}
            </label>
            <div className="col-span-7">
              <input
                type="text"
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors[field.id] && (
                <p className="text-sm text-red-500 mt-1">{errors[field.id]}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => handleRefresh(field.id)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <RiRestartFill className="w-5 h-5" />
            </button>
          </div>
        ))}

        {/* Intent and Financial Charge Section */}
        <h2 className="text-lg font-semibold text-gray-800 mt-8">Intent and Financial Charge</h2>

        {[
          { id: "cashCredit", label: "Cash Credit" },
          { id: "termLoan", label: "Term Loan" },
        ].map((field) => (
          <div key={field.id} className="grid grid-cols-12 gap-4 items-center">
            <label
              htmlFor={field.id}
              className="col-span-3 text-gray-700 font-medium"
            >
              {field.label}
            </label>
            <div className="col-span-7">
              <input
                type="text"
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {errors[field.id] && (
                <p className="text-sm text-red-500 mt-1">{errors[field.id]}</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => handleRefresh(field.id)}
              className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
            >
              <RiRestartFill className="w-5 h-5" />
            </button>
          </div>
        ))}






        {/* Submit Button */}
        <div className="flex justify-between mt-8">

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-800"
          >
            Submit
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-800"
          >
            Next
          </button>
        </div>



      </form>
    </div>
  );
};

export default Assumptions;


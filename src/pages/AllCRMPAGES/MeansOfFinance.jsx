// import  { useState } from "react";

const MeansOfFinance = () => {


  // const [fields, setFields] = useState({
  //   termLoan: { amount: "", roi: "" },
  //   workingCapital: { amount: "", roi: "" },
  //   governmentSubsidy: { amount: "" },
  //   ourContribution: { amount: "" },
  // });

  // const handleInputChange = (field, subField, value) => {
  //   setFields({
  //     ...fields,
  //     [field]: {
  //       ...fields[field],
  //       [subField]: value,
  //     },
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation to ensure no empty fields
    // for (const key in fields) {
    //   const subFields = fields[key];
    //   for (const subField in subFields) {
    //     if (subFields[subField] === "") {
    //       alert("Please fill all fields or enter 0 if no value.");
    //       return;
    //     }
    //   }
    // }

    // alert("All fields are filled. Submitting form.");
    // console.log(fields);

  };

  return (
    <div className="flex justify-center min-h-screen bg-[#f4f9fd] mt-4">
      <div className="w-full max-w-4xl bg-[#f4f9fd]">
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* <div><p className="font-semibold  text-[22px]">Means OF Finance</p></div> */}
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Means OF Finance</h1>
          {/* Term Loan */}
          <div className="space-y-2">
            <p  className="font-medium">Team Loan :</p>
            <div className="flex gap-2">
            <label className="block text-gray-700 mb-1 mt-2">Amount</label>
            <div className="flex  gap-4">
              <input
                type="number"
                placeholder="Amount (in Lakh)"
                // value={fields.termLoan.amount}
                // onChange={(e) =>
                //   handleInputChange("termLoan", "amount", e.target.value)
                // }
                className="w-1/2 border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
               <label className="block text-gray-700 mb-1 mt-2">ROI</label>
              <input
                type="number"
                placeholder="ROI (%)"
                // value={fields.termLoan.roi}
                // onChange={(e) =>
                //   handleInputChange("termLoan", "roi", e.target.value)
                // }
                className="w-1/2 border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <p className="mt-2">%</p>
            </div>
            </div>

          </div>

          {/* Working Capital */}
          {/* <div className="space-y-2">
            <label className="block text-gray-700 mb-1">Working Capital</label>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Amount (in Lakh)"
                value={fields.workingCapital.amount}
                onChange={(e) =>
                  handleInputChange("workingCapital", "amount", e.target.value)
                }
                className="w-1/2 border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="ROI (%)"
                value={fields.workingCapital.roi}
                onChange={(e) =>
                  handleInputChange("workingCapital", "roi", e.target.value)
                }
                className="w-1/2 border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div> */}

            <div className="space-y-2">
            <p  className="font-medium">Working Capital :</p>
            <div className="flex gap-2">
            <label className="block text-gray-700 mb-1 mt-2">Amount</label>
            <div className="flex  gap-4">
              <input
                type="number"
                placeholder="Amount (in Lakh)"
                // value={fields.termLoan.amount}
                // onChange={(e) =>
                //   handleInputChange("termLoan", "amount", e.target.value)
                // }
                className="w-1/2 border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
               <label className="block text-gray-700 mb-1 mt-2">ROI</label>
              <input
                type="number"
                placeholder="ROI (%)"
                // value={fields.termLoan.roi}
                // onChange={(e) =>
                //   handleInputChange("termLoan", "roi", e.target.value)
                // }
                className="w-1/2 border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <p className="mt-2">%</p>
            </div>
            </div>

          </div>

          {/* Government Subsidy */}
          <div className="space-y-2">
            <label className="block text-gray-700 font-medium mb-1">
              Government Subsidy :
            </label>
            <input
              type="number"
              placeholder="Amount (in Lakh)"
              // value={fields.governmentSubsidy.amount}
              // onChange={(e) =>
              //   handleInputChange(
              //     "governmentSubsidy",
              //     "amount",
              //     e.target.value
              //   )
              // }
              className="w-[300px] border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Our Contribution */}
          <div className="flex">
          <div className="space-y-2">
            <label className="block text-gray-700 font-semibold mb-1">Our Contribution :</label>
            <input
              type="number"
              placeholder="Amount (in Lakh)"
              // value={fields.ourContribution.amount}
              // onChange={(e) =>
              //   handleInputChange("ourContribution", "amount", e.target.value)
              // }
              className="w-[300px] border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          </div>

          {/* Submit Button */}
          {/* <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button> */}

<div className="flex justify-between items-center mt-4">
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
        <button
          onClick={handleSubmit}
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

export default MeansOfFinance;

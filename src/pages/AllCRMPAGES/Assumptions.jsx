const Assumptions = () => {
  return (
    <div className="flex justify-center  min-h-screen bg-[#f4f9fd]   mt-4">
      <div className="w-full max-w-5xl  bg-[#f4f9fd]">
        <form className="space-y-6">
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

          {/* Name of the Promoter */}
          <div>
            <label className=" text-gray-700 mb-1" htmlFor="constitution">
              Constitution
            </label>
            <select
              id="constitution"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">--Select--</option>
            </select>
          </div>

          <div className="flex gap-4">
            {/* Year of the Commencement*/}
            <div className="flex  gap-4">
              <div>
                <label
                  className=" text-gray-700 mb-1"
                  htmlFor="yearEstablishment"
                >
                  Date Of Commencement
                </label>
                <input
                  type="date"
                  id="yearEstablishment"
                  className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">Format:DD-MM-YYYY</p>
              </div>
            </div>

            <div className="flex gap-4">


              <div>
                <label
                  className=" text-gray-700 mb-1"
                  htmlFor="yearEstablishment"
                >
                  Select Dispersemnt
                </label>
                <input
                  type="month"
                  id="yearEstablishment"
                  className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">Format: MM-YYYY</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <label
                  className=" text-gray-700 mb-1"
                  htmlFor="yearEstablishment"
                >
                  Select Dispersemnt
                </label>
                <input
                  type="year"
                  id="yearEstablishment"
                  className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">Format:YYYY</p>
              </div>
            </div>

         

         





          </div>

           <div className="flex gap-4">


           <div className="flex gap-4">
              <div>
                <label
                  className=" text-gray-700 mb-1"
                  htmlFor="yearEstablishment"
                >
                  Monotorium Period (month)
                </label>
                <input
                  type="year"
                  id="yearEstablishment"
                  className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">Format:MM</p>
              </div>
            </div>


            <div className="flex  gap-4">
              <div>
                <label
                  className=" text-gray-700 mb-1"
                  htmlFor="yearEstablishment"
                >
                  Rate Of Interest (%)
                </label>
                <input
                  type="year"
                  id="yearEstablishment"
                  className="w-full border rounded-xl p-2 mt-2 focus:ring-blue-500 focus:border-blue-500"
                />

                {/* <p className="text-sm text-gray-500 mt-1">%</p> */}
              </div>
            </div>





           </div>

        </form>
      </div>
    </div>
  );
};

export default Assumptions;

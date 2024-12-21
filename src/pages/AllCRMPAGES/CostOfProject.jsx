import { useState } from "react";

const CostOfProject = () => {
  // Data structure for rows
  const initialRows = [
    { name: "Land & Plot", amount: 0, rate: 0 },
    { name: "Building & Construction", amount: 0, rate: 0 },
    { name: "Plant & Machinery", amount: 0, rate: 0 },
    { name: "Stock", amount: 0, rate: 0 },
    { name: "Computers", amount: 0, rate: 0 },
    { name: "Vehicles", amount: 0, rate: 0 },
    { name: "Equipment", amount: 0, rate: 0 },
    { name: "Other Assets", amount: 0, rate: 0 },
    { name: "Working Capital", amount: 0 }, // No rate for "Working Capital"
  ];

  const [rows, setRows] = useState(initialRows);
  const [projectCost, setProjectCost] = useState(0);

  // Handle input change
  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value === "" ? "" : parseFloat(value); // Allow empty field for validation
    setRows(updatedRows);

    // Recalculate project cost
    const total = updatedRows.reduce((sum, row) => sum + (row.amount || 0), 0);
    setProjectCost(total);
  };

  // Handle form submission
  const handleSubmit = () => {
    const emptyFields = rows.some((row) => row.amount === "");

    if (emptyFields) {
      alert("Please fill all Amount fields with at least 0.");
    } else {
      alert(`Project Cost: ₹${projectCost}`);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4"> Cost Of Project</h1>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4 font-semibold text-lg mb-2">
          <span></span>
          <span>Amount</span>
          <span>Rate of DAP</span>
        </div>
        {rows.map((row, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-4 items-center mb-4"
          >
            <div className="text-gray-800">{row.name}</div>
            <input
              type="number"
              value={row.amount}
              onChange={(e) =>
                handleInputChange(index, "amount", e.target.value)
              }
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter amount"
            />
            {row.rate !== null ? (
              <div className="flex items-center">
                <input
                  type="number"
                  value={row.rate}
                  onChange={(e) =>
                    handleInputChange(index, "rate", e.target.value)
                  }
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter rate"
                />
                <span className="ml-2 text-gray-600">%</span>
              </div>
            ) : (
              <div className="text-gray-500 italic"></div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-xl font-bold">
          <strong>Project Cost:</strong> ₹{projectCost}
        </p>
        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CostOfProject;
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill CSS for styling
import { useNavigate } from "react-router-dom";

const ProjectDescription = () => {
  // Titles for each editor
  const titles = [
    
    "Brief Project Description",
   
  ];

  const navigator=useNavigate();

  const handleNext =()=>{

    navigator('/need-of-the-project')
    
  }

  

  // State to hold content for each editor
  const [content, setContent] = useState(Array(titles.length).fill(""));

  // Handler for updating editor content
  const handleContentChange = (value, index) => {
    const updatedContent = [...content];
    updatedContent[index] = value;
    setContent(updatedContent);
  };

  return (
    <>
    <div className="p-4  min-h-screen  bg-[#f4f9fd]">
      {/* <h1 className="text-2xl font-bold mb-6 text-center">Project Description Page</h1> */}
      <div className="space-y-6">
        {titles.map((title, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            {/* Title for each editor */}
            <p className="text-xl font-bold mb-4">{title}</p>
            {/* Rich Text Editor */}
            <ReactQuill
              value={content[index]}
              onChange={(newValue) => handleContentChange(newValue, index)}
              modules={{
                toolbar: [
                  ["bold", "italic", "underline", "strike"], // Formatting buttons
                  [{ list: "ordered" }, { list: "bullet" }], // Lists
                  ["link", "image"], // Link and image options
                  [{ header: [1, 2, 3, false] }], // Header dropdown
                  [{ align: [] }], // Alignments
                  [{ color: [] }, { background: [] }],
                ],
              }}
              placeholder={`Write your content for ${title} here...`}
              className="w-full"
              style={{
                height: "500px", // Set the height of the text editor
                overflowY: "auto", // Add vertical scrolling if needed
              }}
            />
          </div>
        ))}
      </div>
      
      <div className=" w-[100px]  mt-2  bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
        <button className="" onClick={handleNext}>Next </button>
       </div>

    </div>


  


    </>
  );
};

export default ProjectDescription;

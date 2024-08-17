import ResumePDF from "../assets/Levan_Gulbatashvili_Resume.pdf";

const Resume = () => {
  return (
    <div className="font-roboto mx-auto my-10 max-w-4xl p-8 rounded-lg shadow-lg text-center">
     
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full">
          {/* Displaying the PDF with increased size */}
          <iframe
            src={ResumePDF}
            title="Resume"
            className="border border-gray-300 rounded shadow"
            style={{ width: "100%", height: "800px" }}
          />
        </div>
        <div className="mt-4">
          <a
            href={ResumePDF}
            download
            className="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
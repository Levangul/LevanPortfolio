import ResumeImage from "../assets/6CF567B8-F852-428F-B840-D2F139162A69_1_105_c.jpeg";

const Resume = () => {
  return (
    <div className="font-roboto mx-auto my-10 max-w-4xl p-8 rounded-lg shadow-lg text-center">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Resume</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <img
            src={ResumeImage}
            alt="Resume"
            className="w-full max-w-full border border-gray-300 rounded shadow"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="mt-4">
          <a
            href={ResumeImage}
            download
            className= "text-white font-bold py-2 px-4 rounded-full "
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
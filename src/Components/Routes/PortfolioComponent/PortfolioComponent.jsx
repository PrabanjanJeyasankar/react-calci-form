import React from 'react';
// import Tailwind styles
// import PrabanjanProfile from '../Components/img/PrabanjanProfile.jpg';

function App() {
  return (
    <div className="flex">
      <div className="bg-gray-300 rounded-r-[20px] w-1/3 min-h-screen py-12 px-8">
        <div className="flex justify-center">
          {/* <img src={PrabanjanProfile} alt="Profile" className="w-2/3 rounded-full" /> */}
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">Prabanjan Jeyasankar</h1>
        <h2 className="text-lg font-medium text-gray-600 mt-2">Software Engineer</h2>
        <p className="text-gray-700 text-sm mt-4">I am a Full Stack developer
                 with a passion for creating innovative software solutions.
                  With a Bachelor's degree in Computer Science. I have honed my skills in various 
                   programming languages and development frameworks. My expertise includes
                    but not limited to Java, Python, JavaScript, ReactJS, NodeJS, and SQL.</p>
      </div>
      <div className="bg-white w-2/3 min-h-screen py-12 px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Skills</h1>
        <div className="flex flex-wrap">
          <div className="bg-gray-300 pl-6 pr-6 pt-3 pb-3 rounded-full m-1">React</div>
          <div className="bg-gray-300 pl-6 pr-6 pt-3 pb-3 rounded-full m-1">Node.js</div>
          <div className="bg-gray-300 pl-6 pr-6 pt-3 pb-3 rounded-full m-1">JavaScript</div>
          <div className="bg-gray-300 pl-6 pr-6 pt-3 pb-3 rounded-full m-1">CSS</div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mt-8 mb-8">Experience</h1>
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700">Software Engineer</h2>
          <p className="text-gray-600">ACME Corporation</p>
          <p className="text-gray-600">Jan 2018 - Present</p>
          <ul className="list-disc list-inside">
            <li>Developed a new feature for the company's flagship product, resulting in a 20% increase in user engagement.</li>
            <li>Improved the performance of the backend API, reducing server response time by 50%.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-700">Frontend Developer</h2>
          <p className="text-gray-600">XYZ Inc.</p>
          <p className="text-gray-600">Jun 2016 - Dec 2017</p>
          <ul className="list-disc list-inside">
            <li>Implemented responsive designs for the company's web applications, improving accessibility for mobile users.</li>
            <li>Collaborated with the design team to develop new UI components for the company's design system.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// const UserInputRecord = () => {
//   const [currentInput, setCurrentInput] = useState('');
//   const [inputRecord, setInputRecord] = useState([]);

//   const handleInputChange = (event) => {
//     setCurrentInput(event.target.value);
//   };

//   const handleAddInput = () => {
//     if (currentInput.trim() !== '') { 
//       setInputRecord([...inputRecord, currentInput]);
//       setCurrentInput(''); 
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2>User Input Record</h2>
//       <input
//         type="text"
//         value={currentInput}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//         style={{ padding: '10px', fontSize: '16px', width: '300px' }}
//       />
//       <button
//         onClick={handleAddInput}
//         style={{
//           padding: '10px',
//           marginLeft: '10px',
//           fontSize: '16px',
//           cursor: 'pointer',
//         }}
//       >
//         Add
//       </button>

//       <h3>Input History:</h3>
//       <ul style={{ listStyleType: 'none', padding: 0 }}>
//         {inputRecord.map((item, index) => (
//           <li key={index} style={{ border: '1px solid #ccc', margin: '5px 0', padding: '10px' }}>
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserInputRecord;

"use client";
import { useState } from "react";
import "./Input.css";

function Page() {
  const [data, setData] = useState([]);

  return (
    <div className="box">
      <h1>Hello</h1>
      <input 
        onChange={(event) => setData([event.target.value, ...data])}
        value={data[0]} 
        placeholder="Type something..."
      />
      <h1>{data.join(", ")}</h1>
    </div>
  );
}

export default Page;

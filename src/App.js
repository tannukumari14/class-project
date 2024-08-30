import React from 'react';

function ParentComponent() {
  const student = {
    name: "Tanu",
    age: 20,
    class: "Programming"
  };

  // passing function(callback function)
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <ChildComponent
      student={student}
      onClick={handleClick}
      header={<h1>Student Details</h1>}
    />
  );
}

function ChildComponent({ student, onClick, header }) {
  return (
    <div>
      {header}
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Class: {student.class}</p>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default ParentComponent;

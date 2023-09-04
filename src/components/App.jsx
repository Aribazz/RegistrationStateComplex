import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFullName((prevalue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevalue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevalue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          //value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          //value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

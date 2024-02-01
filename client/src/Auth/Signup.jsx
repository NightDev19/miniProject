// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//   const [signupData, setSignupData] = useState({
//     username: "",
//     password: "",
//     name: "",
//     age: "",
//     address: "",
//     birthday: "",
//     nickname: "",
//   });

//   const [message, setMessage] = useState("");

//   const handleSignup = () => {
//     axios
//       .post("http://localhost:5000/api/signup", signupData)
//       .then((response) => {
//         if (response && response.data) {
//           setMessage(response.data.message);
//         } else {
//           console.error("Invalid response from the server:", response);
//         }
//       })
//       .catch((error) => {
//         if (
//           error.response &&
//           error.response.data &&
//           error.response.data.error
//         ) {
//           console.error("Error signing up:", error.response.data.error);
//         } else {
//           console.error("Unknown error during signup:", error);
//         }
//       });
//   };

//   return (
//     <div className="border-solid border-2 border-sky-500 rounded-lg">
//       <h2 className="text-center mt-4">Signup</h2>
//       <p className="text-center m-4">{message}</p>
//       <form className="form flex flex-col align-items justify-center m-4">
//         <label>
//           Username:
//           <input
//             type="text"
//             placeholder="Username"
//             className="input input-bordered w-full max-w-xs mt-3 mb-3"
//             value={signupData.username}
//             onChange={(e) =>
//               setSignupData({ ...signupData, username: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Password:
//           <input
//             type="password"
//             placeholder="Password"
//             className="input input-bordered w-full max-w-xs mt-3"
//             value={signupData.password}
//             onChange={(e) =>
//               setSignupData({ ...signupData, password: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Name:
//           <input
//             type="text"
//             className="input input-bordered w-full max-w-xs mt-3 mb-3"
//             value={signupData.name}
//             onChange={(e) =>
//               setSignupData({ ...signupData, name: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Age:
//           <input
//             type="text"
//             className="input input-bordered w-full max-w-xs mt-3 mb-3"
//             value={signupData.age}
//             onChange={(e) =>
//               setSignupData({ ...signupData, age: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Address:
//           <input
//             type="text"
//             className="input input-bordered w-full max-w-xs mt-3 mb-3"
//             value={signupData.address}
//             onChange={(e) =>
//               setSignupData({ ...signupData, address: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Birthday:
//           <input
//             type="text"
//             className="input input-bordered w-full max-w-xs mt-3 mb-3"
//             value={signupData.birthday}
//             onChange={(e) =>
//               setSignupData({ ...signupData, birthday: e.target.value })
//             }
//           />
//         </label>
//         <label>
//           Nickname:
//           <input
//             type="text"
//             className="input input-bordered w-full max-w-xs mt-3 mb-3"
//             value={signupData.nickname}
//             onChange={(e) =>
//               setSignupData({ ...signupData, nickname: e.target.value })
//             }
//           />
//         </label>
//         <button
//           type="button"
//           className="btn btn-accent mt-8"
//           onClick={handleSignup}
//         >
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import axios from "axios";

{
  /*
  This code snippet defines a React component called InputField, 
  which takes in props for label, type, value, and onChange. 
  It returns a label and an input field with the specified attributes and event handlers.
  */
}

const InputField = ({ label, type, value, onChange }) => (
  <label>
    <span>{label}:</span>
    <input
      type={type}
      placeholder={label}
      className="input input-bordered w-full max-w-xs  h-9"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </label>
);

const Signup = () => {
  const [signupData, setSignupData] = useState({
    username: "",
    password: "",
    name: "",
    age: "",
    address: "",
    birthday: "",
    nickname: "",
  });

  const [message, setMessage] = useState("");

  const handleSignup = () => {
    axios
      .post("http://localhost:5000/api/signup", signupData)
      .then((response) => {
        if (response && response.data) {
          setMessage(response.data.message);
        } else {
          console.error("Invalid response from the server:", response);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          console.error("Error signing up:", error.response.data.error);
        } else {
          console.error("Unknown error during signup:", error);
        }
      });
  };

  return (
    <div className="border-solid border-2 border-sky-500 rounded-lg w-1/3 m-auto">
      <h2 className="text-center mt-4">Signup</h2>
      <p className="text-center m-4">{message}</p>
      <form className="form flex flex-col align-items justify-center m-4">
        <div className="flex flex-row align-items justify-evenly m-4 gap-4">
          <InputField
            label="Username"
            type="text"
            value={signupData.username}
            onChange={(value) =>
              setSignupData({ ...signupData, username: value })
            }
          />
          <InputField
            label="Password"
            type="password"
            value={signupData.password}
            onChange={(value) =>
              setSignupData({ ...signupData, password: value })
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4 m-4">
          <InputField
            label="Name"
            type="text"
            value={signupData.name}
            onChange={(value) => setSignupData({ ...signupData, name: value })}
          />
          <InputField
            label="Age"
            type="text"
            value={signupData.age}
            onChange={(value) => setSignupData({ ...signupData, age: value })}
          />
          <InputField
            label="Address"
            type="text"
            value={signupData.address}
            onChange={(value) =>
              setSignupData({ ...signupData, address: value })
            }
          />
          <InputField
            label="Birthday"
            type="date"
            value={signupData.birthday}
            onChange={(value) =>
              setSignupData({ ...signupData, birthday: value })
            }
          />
        </div>
        <div className="flex flex-row align-items justify-evenly">
          <InputField
            label="Nickname"
            type="text"
            value={signupData.nickname}
            onChange={(value) =>
              setSignupData({ ...signupData, nickname: value })
            }
          />
        </div>

        <button
          type="button"
          className="btn btn-accent mt-8"
          onClick={handleSignup}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

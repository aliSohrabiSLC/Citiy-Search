/* eslint-disable react/prop-types */

import "./Index.css";

const Input = ({ handleChange }) => {
  return (
    <div className="input">
      <input
        type="text"
        id="searchInput"
        onChange={handleChange}
        placeholder="please enter your city"
      />
    </div>
  );
};

export default Input;

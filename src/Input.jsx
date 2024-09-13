/* eslint-disable react/prop-types */

import "./Index.css";

const Input = ({ handleChange, hint }) => {
  return (
    <div className="input">
      <input
        type="text"
        id="searchInput"
        onChange={handleChange}
        placeholder="نام شهر را وارد کنید..."
      />
    </div>
  );
};

export default Input;

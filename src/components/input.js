"use client"

import { useState } from "react";

function InputCustom(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log(newValue);
    if (props.onValueChange) {
      props.onValueChange(newValue);
    }
  };

  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{props.topLeftLabel}</span>
        <span className="label-text-alt">{props.topRightLabel}</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={handleChange}
      />
      <div className="label">
        <span className="label-text-alt">{props.bottomLeftLabel}</span>
        <span className="label-text-alt">{props.bottomRightLabel}</span>
      </div>
    </label>
  );
}

export { InputCustom };
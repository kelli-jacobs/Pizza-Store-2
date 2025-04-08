import React from "react";

const RadioButtonGroup = ({ name, options, selectedValue, onChange}) => {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedValue === option}
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4 text-blue-500"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};



export default RadioButtonGroup;
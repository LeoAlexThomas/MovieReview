import React from "react";

const InputField = ({
  value,
  name,
  type,
  onChange,
  placeholder,
  label,
  max,
  min,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-lg font-medium">{label}</p>
      <input
        type={type}
        name={name}
        value={value}
        max={max}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border w-full bg-back rounded p-2 font-Body text-base text-black outline-none max-w-[150px]"
      />
    </div>
  );
};

export default InputField;

import React, { useEffect, useRef, useState } from "react";

const SelectField = ({ id, value, onChange, options, label }) => {
  // This is for changing arrow direction in select
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOptionSelect = (e) => {
    onChange(e.target.value);
    setIsDropdownOpen(false);
  };

  const handleSelectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectBlur = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const downArrow = document.getElementById(`${id}-${label}`);
    if (!isDropdownOpen) {
      downArrow.classList.remove("rotate-180");
      return;
    }
    downArrow.classList.add("rotate-180");
  }, [isDropdownOpen]);

  return (
    <div className="flex gap-2 items-center relative w-full max-w-full md:max-w-[250px]">
      <p className="text-lg font-medium w-[60px] hidden md:block">{label}</p>
      <select
        id={id}
        value={value}
        onBlur={handleSelectBlur}
        onChange={handleDropdownOptionSelect}
        onClick={handleSelectClick}
        className="col-span-6 border rounded-md bg-white appearance-none p-2 pr-12 w-full flex-1 outline-none"
      >
        {options.map((opt) => {
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
      <i
        id={`${id}-${label}`}
        className="fa-solid fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 "
      />
    </div>
  );
};

export default SelectField;

import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = ({ priority, priority_ring, setPriority_ring ,editModeSelectedPrio}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(editModeSelectedPrio||"");
  const dropdownRef = useRef(null);

  const priorities = ["High", "Normal", "Low"];

  const handleItemClick = (priority) => {
    setSelectedPriority(priority);
    setIsOpen(false);
    // You can perform actions based on the selected value here
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    priority(selectedPriority);
  }, [selectedPriority]);

  return (
    <div className="relative inline-block text-left my-4" ref={dropdownRef}>
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className={"inline-flex justify-center w-full rounded-md border  bg-white px-4 py-2 text-sm font-medium text-gray-700 focus:border-blue-500 focus:outline-none focus:ring " + priority_ring}
            onClick={() => { setIsOpen(!isOpen); setPriority_ring("border-gray-400")}}
            aria-haspopup="true"
            aria-expanded="true"
          >
            <span className="flex space-x-2 items-baseline font-semibold text-base">
              <span>{selectedPriority || "Select Priority"}</span>
              <span className="self-end">
                <FaAngleDown />
              </span>
            </span>
          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {priorities.map((priority, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => handleItemClick(priority)}
              >
                {priority}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

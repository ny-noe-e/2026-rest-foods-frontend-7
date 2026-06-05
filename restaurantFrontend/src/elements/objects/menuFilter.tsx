import React from "react";
export interface FilterState {
  vegan: boolean;
  vegetarian: boolean;
  lactoseFree: boolean;
  glutenFree: boolean;
}
export interface FilterProps {
  currfilt: FilterState;
  setCurrfilt: React.Dispatch<React.SetStateAction<FilterState>>;
}
export function Filter({ currfilt, setCurrfilt }: FilterProps) {
  const handleCheckboxChange = (key: keyof FilterState) => {
    setCurrfilt((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <div className="Menu_Filter_Container">
      <label>
        vegan
        <input
          type="checkbox"
          className="Menu_Filter_Checkbox"
          onChange={() => {
            handleCheckboxChange("vegan");
          }}
        />
      </label>
      <label>
        vegetarian
        <input
          type="checkbox"
          className="Menu_Filter_Checkbox"
          onChange={() => {
            handleCheckboxChange("vegetarian");
          }}
        />
      </label>
      <label>
        lactose Free
        <input
          type="checkbox"
          className="Menu_Filter_Checkbox"
          onChange={() => {
            handleCheckboxChange("lactoseFree");
          }}
        />
      </label>
      <label>
        gluten Free
        <input
          type="checkbox"
          className="Menu_Filter_Checkbox"
          onChange={() => {
            handleCheckboxChange("lactoseFree");
          }}
        />
      </label>
    </div>
  );
}

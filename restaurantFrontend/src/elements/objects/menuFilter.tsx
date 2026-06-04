import React from "react";

export function Filter() {
  return (
    <div className="Menu_Filter_Container">
      <label>
        vegan
        <input type="checkbox" className="Menu_Filter_Checkbox" />
      </label>
      <label>
        vegetarian
        <input type="checkbox" className="Menu_Filter_Checkbox" />
      </label>
      <label>
        lactose Free
        <input type="checkbox" className="Menu_Filter_Checkbox" />
      </label>
      <label>
        gluten Free
        <input type="checkbox" className="Menu_Filter_Checkbox" />
      </label>
    </div>
  );
}

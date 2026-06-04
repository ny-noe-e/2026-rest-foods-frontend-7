import React, { useEffect, useState } from "react";
import type { MenuData } from "../../tools/menu_Api";
import { Menu_Api } from "../../tools/menu_Api";
import { Menu_Item } from "../molecules/menuItem";

export function MenuList() {
  const [MenuData, setMenuData] = useState<MenuData[]>();
  const [CurrExtended, SetCurrExtended] = useState<number>();
  useEffect(() => {
    async function getData() {
      const data = await Menu_Api.getMenus();
      setMenuData(data);
    }
    getData();
  }, []);
  return (
    <div>
      {MenuData?.map((data: MenuData, key) => {
        return (
          <div key={key}>
            <Menu_Item
              data={data}
              currExtended={CurrExtended}
              setCurrExtended={SetCurrExtended} // Make sure the 'E' matches the child component!
            />
          </div>
        );
      })}
    </div>
  );
}

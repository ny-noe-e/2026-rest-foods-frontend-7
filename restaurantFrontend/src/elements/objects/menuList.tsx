import React, { useEffect, useState } from "react";
import type { MenuData } from "../../tools/menu_Api";
import { Menu_Api } from "../../tools/menu_Api";
import { Menu_Item } from "../molecules/menuItem";
import type { FilterProps } from "../objects/menuFilter";

export function MenuList({ currfilt, setCurrfilt }: FilterProps) {
  const [MenuData, setMenuData] = useState<MenuData[]>();
  const [CurrExtended, SetCurrExtended] = useState<number | undefined>();
  useEffect(() => {
    async function getData() {
      const data = await Menu_Api.getMenus({ currfilt, setCurrfilt });
      setMenuData(data);
      console.log("updated");
    }
    getData();
  }, [currfilt]);
  return (
    <div>
      {MenuData?.map((data: MenuData, key) => {
        return (
          <div key={key}>
            <Menu_Item
              data={data}
              currExtended={CurrExtended}
              setCurrExtended={SetCurrExtended}
            />
          </div>
        );
      })}
    </div>
  );
}

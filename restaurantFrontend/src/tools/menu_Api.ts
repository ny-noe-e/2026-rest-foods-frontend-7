import { Api } from "./Api";
export interface MenuData {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  chefChoice: string;
  glutenFree: boolean;
  lactoseFree: boolean;
  vegan: boolean;
  vegetarian: boolean;
}

export const Menu_Api = {
  getMenus: async (): Promise<MenuData[]> => {
    const menu_data = await Api.get("/menus");
    console.log(menu_data);
    return menu_data.data;
  },
};

import { Api } from "./Api";

const Menu_Api = {
  get_menus: async function name() {
    const menu_data = await Api.get("/menu");
    return menu_data;
  },
};

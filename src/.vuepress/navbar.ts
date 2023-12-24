import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/basics/",
  "/gasoline",
  
  {
    text: "新能源汽车",
    icon: "book",
    link: "/nevhicle",
  },
  {
    text: "购买指南",
    icon:"",
    link:"/guide"
  },
  {
    text: "汽车数据",
    icon:"",
    link:"/data"
  }
  
]);

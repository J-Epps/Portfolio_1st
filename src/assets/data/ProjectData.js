import { v4 as uuidv4 } from "uuid";

const projects = [
  {
    id: uuidv4(),
    name: "Restauraut - E-Commerce ",
    desc: "A first attempt at creating a E-Commerce Restaurant.",
    img:
      "https://cdn.pixabay.com/photo/2015/04/01/11/08/sillouette-702178_960_720.jpg",
    href: "https://iw7tqw.csb.app/"
  },
  {
    id: uuidv4(),
    name: "Store - E-Commerce",
    desc: "A second attempt creating a E-Commerce Store.",
    img:
      "https://cdn.pixabay.com/photo/2019/04/14/17/45/matrix-4127272_960_720.jpg",
    href: "https://m79473.csb.app/"
  },
  {
    id: uuidv4(),
    name: "Portfolio Website",
    desc: "My first Portfolio Website",
    img:
      "https://cdn.pixabay.com/photo/2016/11/09/11/42/hacker-1811568_960_720.png",
    href: "https://w9wu9.csb.app/"
  }
];

export default projects;

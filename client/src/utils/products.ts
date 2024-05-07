import img1 from '../assets/img1.jpeg';
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpeg";

export type product = {
    name: string,
    description: string,
    price: number,
    img: string
}

export const products: product[] = [
  {
    name: "Garry's Mod",
    description: "Best sandbox game ever created with huge community",
    price: 9.99,
    img: img1,
  },
  {
    name: "Five Nights at Freddy's",
    description: "Classic 2D horror game with interesting storyline",
    price: 7.99,
    img: img2,
  },
  {
    name: "Grand Theft Auto V",
    description: "Grand Theft Auto V is a 2013 action-adventure game",
    price: 29.99,
    img: img3,
  },
  {
    name: "Beat Saber",
    description: "Beat Saber is a 2017 musical VR game. Must have for every VR enjoyer",
    price: 39.99,
    img: img4,
  },
  {
    name: "Battlefield 2042",
    description: "Battlefield 2042 is a 2020 first-person shooter game",
    price: 49.99,
    img: img5,
  },
  {
    name: "Orcs Must Die! 3",
    description: "Orcs Must Die! 3 is an action-adventure game where you fight hordes of orcs",
    price: 25.99,
    img: img6,
  },
  {
    name: "Supreme Commander",
    description: "Best RTS game ever created. Similar to Starcraft series",
    price: 4.99,
    img: img7,
  },
  {
    name: "Supreme Commander 2",
    description: "Sequel of best realtime strategy game ever created.",
    price: 9.99,
    img: img8,
  },
];
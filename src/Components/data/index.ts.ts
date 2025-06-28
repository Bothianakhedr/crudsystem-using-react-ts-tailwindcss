import { v4 as uuidv4 } from "uuid";
import type { IFormInput, IProduct } from "../interfaces";

export const productInfo: IProduct[] = [
  {
    id: uuidv4(),
    title: "coco channel",
    price: 120.0,
    imageURL:
      "https://images.unsplash.com/photo-1640975972263-1f73398e943b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29jbyUyMGNoYW5lbHxlbnwwfHwwfHx8MA%3D%3D",
    description: `
Indulge your senses with our captivating selection of perfumes, designed to leave a lasting impression. Each fragrance is a carefully balanced blend of elegant notes, ranging from fresh florals and warm vanillas to rich ambers and exotic spices. Whether you prefer a soft and romantic scent or something bold and seductive, our collection caters to every personality and moment. Encased in beautifully designed bottles, these perfumes are the perfect finishing touch to your presence. Smell unforgettable, feel unstoppable.

`,
    color: ["#E8988A", "#FFECCC", "#FF9587", "#B13BFF"],
    category: {
      name: "coco",
      imageURL:
        "https://images.unsplash.com/photo-1640975972263-1f73398e943b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29jbyUyMGNoYW5lbHxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    id: uuidv4(),
    title: "Casual Beige Flats",
    price: 49.99,
    imageURL:
      "https://images.unsplash.com/photo-1727561141778-bf54e91fe23e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvc2UlMjBibGFja3xlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Step into confidence with our exclusive range of shoes and sneakers, crafted to combine comfort, durability, and style. Whether you're dressing up for a night out or running daily errands, our footwear collection offers something for every occasion. From sleek heels and elegant flats to high-performance sneakers, each pair is made with high-quality materials and attention to detail. Designed for both fashion and function, these shoes ensure you look great and feel even better. Walk your way with confidence, one stylish step at a time.",
    color: ["#E8988A", "#FFECCC", "#FF9587", "#D6D85D", "F68537"],
    category: {
      name: "elegant hells",
      imageURL:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob3NlfGVufDB8fDB8fHww",
    },
  },

  {
    id: uuidv4(),
    title: "Nike Air Max 270",
    price: 199.99,
    imageURL:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `
Step into confidence with our exclusive range of shoes and sneakers, crafted to combine comfort, durability, and style. Whether you're dressing up for a night out or running daily errands, our footwear collection offers something for every occasion. From sleek heels and elegant flats to high-performance sneakers, each pair is made with high-quality materials and attention to detail. Designed for both fashion and function, these shoes ensure you look great and feel even better. Walk your way with confidence, one stylish step at a time.

`,
    color: ["#9B177E", "#555879", "#DED3C4", "#98A1BC"],
    category: {
      name: "elegant nike",
      imageURL:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: uuidv4(),
    title: "Adidas Ultraboost 22",
    price: 179.99,
    imageURL:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvc2V8ZW58MHx8MHx8fDA%3D",
    description: `
Step into confidence with our exclusive range of shoes and sneakers, crafted to combine comfort, durability, and style. Whether you're dressing up for a night out or running daily errands, our footwear collection offers something for every occasion. From sleek heels and elegant flats to high-performance sneakers, each pair is made with high-quality materials and attention to detail. Designed for both fashion and function, these shoes ensure you look great and feel even better. Walk your way with confidence, one stylish step at a time.

`,
    color: ["#E8988A", "#FFECCC", "#FF9587"],
    category: {
      name: "elegant hells",
      imageURL:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvc2V8ZW58MHx8MHx8fDA%3D ",
    },
  },

  {
    id: uuidv4(),
    title: "Vintage Leather Shoulder Bag",
    price: 199.0,
    imageURL:
      "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8fHww",
    description: `
Discover the perfect blend of form and function with our stylish collection of handbags, totes, and shoulder bags. Made from premium materials and designed with versatility in mind, our bags are ideal for both casual days and formal outings. Whether you're looking for something sleek and minimal or bold and eye-catching, we’ve got it all. Each bag offers ample space, organized compartments, and that extra touch of elegance. Redefine your accessory game with a bag that complements every outfit and mood.

`,
    color: ["#687FE5", "#FFECCC", "#471396", "#FCD8CD"],
    category: {
      name: "Vintage Leather",
      imageURL:
        "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8fHww",
    },
  },

  {
    id: uuidv4(),
    title: "MAC Matte Lipstick - Ruby Woo",
    price: 24.99,
    imageURL:
      "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D",
    description: `Enhance your natural beauty with our expertly crafted makeup collection, featuring iconic shades and skin-loving formulas. From bold lipsticks to lightweight foundations, our products are made for all skin types and tones. Whether you're going for a subtle everyday glow or a dramatic evening look, our makeup is designed to empower and inspire. Long-lasting, blendable, and packed with pigment — every item is a must-have in your beauty routine. Be bold, be soft, be you.

`,
    color: ["#E8988A", "#687FE5", "#BA487F", "#687FE5"],
    category: {
      name: "MAC Matte Lipstick",
      imageURL:
        "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D",
    },
  },
  {
    id: uuidv4(),
    title: "Maybelline Fit Me Foundation",
    price: 14.99,
    imageURL:
      "https://images.unsplash.com/photo-1599733589046-10c005739ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm91bmRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    description: `Enhance your natural beauty with our expertly crafted makeup collection, featuring iconic shades and skin-loving formulas. From bold lipsticks to lightweight foundations, our products are made for all skin types and tones. Whether you're going for a subtle everyday glow or a dramatic evening look, our makeup is designed to empower and inspire. Long-lasting, blendable, and packed with pigment — every item is a must-have in your beauty routine. Be bold, be soft, be you.

`,
    color: ["#E8988A", "#FFECCC", "#FF9587"],
    category: {
      name: "Maybelline Fit Me Foundation",
      imageURL:
        "https://images.unsplash.com/photo-1599733589046-10c005739ef9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm91bmRhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    },
  },
  {
    id: uuidv4(),
    title: "Michael Kors Jet Set Tote",
    price: 249.99,
    imageURL:
      "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `
Discover the perfect blend of form and function with our stylish collection of handbags, totes, and shoulder bags. Made from premium materials and designed with versatility in mind, our bags are ideal for both casual days and formal outings. Whether you're looking for something sleek and minimal or bold and eye-catching, we’ve got it all. Each bag offers ample space, organized compartments, and that extra touch of elegance. Redefine your accessory game with a bag that complements every outfit and mood.

`,

    color: ["#E8988A", "#9B177E", "#FF9587", "#FF9587"],
    category: {
      name: "Michael Kors",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },

  {
    id: uuidv4(),
    title: "Dior Sauvage Eau de Parfum",
    price: 135.0,
    imageURL:
      "https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F1dmFnZXxlbnwwfHwwfHx8MA%3D%3D",
    description: `
Indulge your senses with our captivating selection of perfumes, designed to leave a lasting impression. Each fragrance is a carefully balanced blend of elegant notes, ranging from fresh florals and warm vanillas to rich ambers and exotic spices. Whether you prefer a soft and romantic scent or something bold and seductive, our collection caters to every personality and moment. Encased in beautifully designed bottles, these perfumes are the perfect finishing touch to your presence. Smell unforgettable, feel unstoppable.

`,
    color: ["#E8988A", "#FFECCC", "#FF9587"],
    category: {
      name: "Sauvage",
      imageURL:
        "https://images.unsplash.com/photo-1616640045164-deb3b104c4b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F1dmFnZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  },

  {
    id: uuidv4(),
    title: "Elegant Black Heels",
    price: 500,
    imageURL:
      "https://images.unsplash.com/photo-1610398752800-146f269dfcc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8fDA%3D",
    description:
      "Step into confidence with our exclusive range of shoes and sneakers, crafted to combine comfort, durability, and style. Whether you're dressing up for a night out or running daily errands, our footwear collection offers something for every occasion. From sleek heels and elegant flats to high-performance sneakers, each pair is made with high-quality materials and attention to detail. Designed for both fashion and function, these shoes ensure you look great and feel even better. Walk your way with confidence, one stylish step at a time.",

    color: ["#E8988A", "#FFECCC", "#FF9587"],
    category: {
      name: "elegant hells",
      imageURL:
        "https://images.unsplash.com/photo-1610398752800-146f269dfcc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVlbHN8ZW58MHx8MHx8fDA%3D",
    },
  },
];



export const formInput :IFormInput[] =[
  {
    id:"title",
    name:"title",
    label:"product Name",
    type:"text",
  },
  {
    id:"description",
    name:"description",
    label:"product description",
    type:"text",
  },
  {
    id:"image",
    name:"ImageURL",
    label:"product ImageURL",
    type:"text",
  },
  {
    id:"price",
    name:"price",
    label:"product price",
    type:"text",
  },
]

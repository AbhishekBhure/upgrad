import { rest } from "msw";
// For more information on creating simulated HTTP API endpoints, please visit https://mswjs.io/docs/
export const routes = [
  rest.get("/dishes", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "Pancakes",
          price: 7.99,
          desc: "Fluffy pancakes served with maple syrup and butter.",
          category: "Breakfast",
          img: "../img/img1.png",
        },
        {
          id: 2,
          title: "Caesar Salad",
          price: 8.25,
          desc: "Romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
          category: "Lunch",
          img: "../img/img2.png",
        },
        {
          id: 3,
          title: "Iced Coffee",
          price: 3.49,
          desc: "Chilled coffee served with ice cubes.",
          category: "Beverages",
          img: "../img/img3.png",
        },
        {
          id: 4,
          title: "Grilled Chicken",
          price: 12.75,
          desc: "Tender grilled chicken served with mashed potatoes and vegetables.",
          category: "Dinner",
          img: "../img/img4.png",
        },
        {
          id: 5,
          title: "Omelette",
          price: 9.5,
          desc: "Fluffy omelette with a choice of fillings, served with toast.",
          category: "Breakfast",
          img: "../img/img5.png",
        },
        {
          id: 6,
          title: "Margherita Pizza",
          price: 9.99,
          desc: "Classic pizza topped with tomatoes, mozzarella, and basil.",
          category: "Lunch",
          img: "../img/img6.png",
        },
        {
          id: 7,
          title: "Orange Juice",
          price: 2.99,
          desc: "Freshly squeezed orange juice.",
          category: "Beverages",
          img: "../img/img7.png",
        },
        {
          id: 8,
          title: "Steak",
          price: 19.99,
          desc: "Juicy steak served with a side salad and garlic bread.",
          category: "Dinner",
          img: "../img/img8.png",
        },
        {
          id: 9,
          title: "Waffles",
          price: 8.75,
          desc: "Golden brown waffles served with assorted toppings.",
          category: "Breakfast",
          img: "../img/img9.png",
        },
        {
          id: 10,
          title: "Chicken Salad",
          price: 10.99,
          desc: "Grilled chicken on a bed of mixed greens with vinaigrette.",
          category: "Lunch",
          img: "../img/img2.png",
        },
        {
          id: 11,
          title: "Cappuccino",
          price: 4.25,
          desc: "Espresso with steamed milk and a layer of froth.",
          category: "Beverages",
          img: "../img/img1.png",
        },
        {
          id: 12,
          title: "Salmon Fillet",
          price: 16.5,
          desc: "Pan-seared salmon served with quinoa and roasted vegetables.",
          category: "Dinner",
          img: "../img/img3.png",
        },
      ])
    );
  }),
];

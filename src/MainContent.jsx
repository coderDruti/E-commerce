import Category from "./Category.jsx";
export default function MainContent() {
  const prods = {
    1: "Office products",
    2: "Home & Kitchen",
    3: "Mobiles & Accessories",
    4: "Women's Fashion",
    5: "Men's Fashion",
  };
  const source = [
    {
      "Best seller": "best_seller_w.jpg",
      "Our choice": "office_supplies.jpg",
      "Highest rated": "office_desk.jpg",
    },
    {
      "Best seller": "./utensil.jpg",
      "Our choice": "./pan_set.jpg",
      "Highest rated": "./carrier.jpg",
    },
    {
      "Best seller": "./headset.jpg",
      "Our choice": "./earpods.jpg",
      "Highest rated": "./phone_stand.jpg",
    },
    {
      "Best seller": "./best_seller_w.jpg",
      "Our choice": "./our_choice.jpg",
      "Highest rated": "./highest.jpg",
    },
    {
      "Best seller": "./men_best_seller.jpg",
      "Our choice": "./m_our_choice.jpg",
      "Highest rated": "./mfashion.jpg",
    },
  ];
  return (
    <main>
      <span>
        <h2>Home</h2>
      </span>
      <Category catNumber={1} prods={prods[1]} source={source[0]} />
      <Category catNumber={2} prods={prods[2]} source={source[1]} />
      <Category catNumber={3} prods={prods[3]} source={source[2]} />
      <Category catNumber={4} prods={prods[4]} source={source[3]} />
      <Category catNumber={5} prods={prods[5]} source={source[4]} />
    </main>
  );
}

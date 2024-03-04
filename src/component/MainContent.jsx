import Category from "./Category.jsx";
import ergonomicChair from "../assets/images/ergonomic_chair.jpg";
import officeSupplies from "../assets/images/office_supplies.jpg";
import officeDesk from "../assets/images/office_desk.jpg";
import utensil from "../assets/images/utensil.jpg";
import panSet from "../assets/images/pan_set.jpg";
import carrier from "../assets/images/carrier.jpg";
import headset from "../assets/images/headset.jpg";
import earpods from "../assets/images/earpods.jpg";
import phoneStand from "../assets/images/phone_stand.jpg";
import bestSellerW from "../assets/images/best_seller_w.jpg";
import ourChoice from "../assets/images/our_choice.jpg";
import highest from "../assets/images/highest.jpg";
import menBestSeller from "../assets/images/men_best_seller.jpg";
import mOurChoice from "../assets/images/m_our_choice.jpg";
import mFashion from "../assets/images/mfashion.jpg";

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
      "Best seller": ergonomicChair,
      "Our choice": officeSupplies,
      "Highest rated": officeDesk,
    },
    {
      "Best seller": utensil,
      "Our choice": panSet,
      "Highest rated": carrier,
    },
    {
      "Best seller": headset,
      "Our choice": earpods,
      "Highest rated": phoneStand,
    },
    {
      "Best seller": bestSellerW,
      "Our choice": ourChoice,
      "Highest rated": highest,
    },
    {
      "Best seller": menBestSeller,
      "Our choice": mOurChoice,
      "Highest rated": mFashion,
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

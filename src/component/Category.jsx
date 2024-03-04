/* eslint-disable react/prop-types */
import Article from "./Article.jsx";

export default function Category({ catNumber, prods, ...s }) {
  console.log(s);
  const arr = Object.entries(s.source);
  console.log(arr);
  const Image1 = arr[0][1];
  const Image2 = arr[1][1];
  const Image3 = arr[2][1];
  console.log(Image1, Image2, Image3);
  return (
    <section>
      <h3 className="Category">
        Category {catNumber}: {prods}
      </h3>
      <h3 className="prod">Some of our products</h3>
      <div className="articles">
        <Article Image={Image1} caption={"Best Seller"} />
        <Article Image={Image2} caption={"Our choice"} />
        <Article Image={Image3} caption={"Highest rated"} />
      </div>
    </section>
  );
}

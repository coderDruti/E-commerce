/* eslint-disable react/prop-types */
export default function Article({ c, Image, caption }) {
  console.log(c);
  return (
    <figure>
      <img
        src={`${Image}`}
        alt="Article"
        style={{
          height: "250px",
          width: "250px",
          borderRadius: "10px",
          borderColor: "brown",
          borderStyle: "groove",
        }}
      />
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  );
}

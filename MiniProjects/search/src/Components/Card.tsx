import { Products } from "../Types/DataType";

const Card = ({ ele }: { ele: Products }) => {
  return (
    <div className="card" style={{ width: "600px", margin: "5px" }}>
      <img
        src={`${ele.image}`}
        className="card-img-top"
        alt="..."
        style={{ width: "200px", height: "200px", margin: "auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{ele.title}</h5>
        <p className="card-text">{ele.description}</p>
        <p>
          <span>Price: {ele.price}</span>
          <br />
          <span>Rating: {ele.rating.rate}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;

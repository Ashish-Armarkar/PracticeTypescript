import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Products } from "./Types/DataType";
import { fetchProducts } from "./Services/APIcall";
import Card from "./Components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSortAmountDown } from "react-icons/fa";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { TbSortDescendingNumbers } from "react-icons/tb";
import Pagination from "./Components/Pagination";
import Category from "./Components/Category";

function App() {
  const [data, setData] = useState<Products[]>();
  const [searched, setSearched] = useState<Products[] | undefined>();

  useEffect(() => {
    const productsData = async () => {
      try {
        const productsData = await fetchProducts();
        setData(productsData);
        setSearched(productsData);
      } catch (e) {
        console.error(e);
      }
    };
    productsData();
  }, []);
  return (
    <div className="container ">
      <div className="d-flex ">
        <Category data={data} setSearched={setSearched} />
        <div className="mb-3 " style={{ width: "80%", margin: " 10px auto" }}>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Search"
            name="Search"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTimeout(() => {
                let currentData = data?.filter((item) =>
                  item.title.toLowerCase().includes(e.target.value)
                );
                setSearched(currentData);
              }, 500);
            }}
          />
        </div>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-warning "
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "50px",
              height: "50px",
              margin: "auto",
              borderRadius: "5px",
            }}
          >
            <FaSortAmountDown />
          </button>
          <ul className="dropdown-menu">
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => {
                const newData = [...(data ?? [])].sort((a, b) =>
                  a.title.localeCompare(b.title)
                );
                setSearched(newData);
              }}
            >
              <FaSortAlphaDown />
              {"      "} Acending
            </button>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => {
                const newData = [...(data ?? [])].sort((a, b) =>
                  b.title.localeCompare(a.title)
                );
                setSearched(newData);
              }}
            >
              <FaSortAlphaDownAlt />
              {"      "} Decending
            </button>

            <button
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => {
                const newData = [...(data ?? [])].sort(
                  (a, b) => a.price - b.price
                );
                setSearched(newData);
              }}
            >
              <TbSortAscendingNumbers />
              {"      "} Lowest Price
            </button>
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => {
                const newData = [...(data ?? [])].sort(
                  (a, b) => b.price - a.price
                );
                setSearched(newData);
              }}
            >
              <TbSortDescendingNumbers />
              {"      "} Higest Price
            </button>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-row flex-wrap justify-content-around align-item-center">
        {searched?.map((ele, index) => (
          <Card key={index} ele={ele} />
        ))}
      </div>
      <Pagination data={data} setSearched={setSearched} searched={searched} />
    </div>
  );
}

export default App;

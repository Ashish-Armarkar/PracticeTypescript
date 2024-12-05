import { useEffect, useState } from "react";
import { Products } from "../Types/DataType";

interface CategoryPropsType {
  data: Products[] | undefined;
  setSearched: React.Dispatch<React.SetStateAction<Products[] | undefined>>;
}

const Category = ({ data, setSearched }: CategoryPropsType) => {
  const [categories, setCategories] = useState<string[]>([""]);
  useEffect(() => {
    if (data != undefined) {
      const cateData = data.map((ele) => ele.category);
      let uniqueCategory = new Set(cateData);
      setCategories([...uniqueCategory]);
    }
  }, [data]);

  return (
    <div
      className="btn-group"
      style={{ maxWidth: "100px", maxHeight: "50px", margin: "5px auto" }}
    >
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Categories
      </button>
      <ul className="dropdown-menu">
        {categories.map((ele, index) => (
          <li
            key={index}
            onClick={() => {
              const newSearchedData: Products[] | undefined = data?.filter(
                (i) => (i.category === ele ? i : null)
              );
              setSearched(newSearchedData);
            }}
          >
            <a className="dropdown-item" href="#">
              {ele}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;

import { useEffect, useState } from "react";
import { Products } from "../Types/DataType";
interface PaginationProps {
  data: Products[] | undefined;
  searched: Products[] | undefined;
  setSearched: React.Dispatch<React.SetStateAction<Products[] | undefined>>;
}

const Pagination = ({ data, searched, setSearched }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const numberOfDataOnPage: number = 4;
  const totalPage: number = Math.ceil(
    (searched ?? [])?.length / numberOfDataOnPage
  );
  let totalPageArr: number[] = [];
  for (let i = 1; i <= totalPage; i++) {
    totalPageArr.push(i);
  }

  useEffect(() => {
    const startIndex = (currentPage - 1) * numberOfDataOnPage;
    const endIndex = startIndex + numberOfDataOnPage;
    const newData = data?.slice(startIndex, endIndex);
    console.log(startIndex, endIndex);
    setSearched(newData);
  }, [currentPage, numberOfDataOnPage]);

  const handlePagination = (pagiType: string) => {
    if (pagiType === "Next" && currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
    } else if (pagiType === "Prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example m-auto">
        <ul className="pagination">
          <li className="page-item" onClick={() => handlePagination("Prev")}>
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {totalPageArr.map((i, index) => (
            <li
              className="page-item"
              onClick={() => {
                setCurrentPage(i);
              }}
              key={index}
            >
              <a className="page-link" href="#">
                {i}
              </a>
            </li>
          ))}

          <li className="page-item" onClick={() => handlePagination("Next")}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

import { useEffect, useState } from "react";

const Pagination = () => {

    const API_URL = "https://dummyjson.com/products";
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;
  const totalPages=5
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = pageData.slice(startIndex, endIndex);

  

  const fetchData = async () => {
    const apidata = await fetch(API_URL);
    const json = await apidata.json();
    console.log(json);
    setPageData(json.products);
  };
  useEffect(() => {
    fetchData();
  }, []);

  function handleNext() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function handlePrev(){
    if(page>1){
        setPage(page-1)

    }
  }

  return (
    <>
      {currentData.length > 0 && (
        <div className="product_container">
          {currentData.map((product) => {
            return (
              <div className="product_item" key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
                <span>{product.category}</span>
                <span>{product.price}</span>
              </div>
            );
          })}
        </div>
      )}
      <div>
        {
            page>1 && <span className="" onClick={handlePrev}>Prev</span>
        }
        
        {[...Array(5)].map((_, index) => (
          <button onClick={()=>setPage(index+1)}>{index + 1}</button>
        ))}
        {
            page<5 && <span className="" onClick={handleNext}>Next</span>
        }
        
      </div>
    </>
  );
};

export default Pagination;

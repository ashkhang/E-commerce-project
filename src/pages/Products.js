import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Products = () => {
  const [loding, setloding] = useState(false);
  const [Data, setData] = useState([]);
  const [filter, setfilter] = useState(Data);
  const getData = async () => {
    setloding(true);
    let result = await fetch("https://fakestoreapi.com/products");
    result = await result.json();
    setData(result);
    setfilter(result);
    setloding(false);
  };
  useEffect(() => {
    getData();
  }, []);
  const fillData = (cat) => {
    let btnfilldata = Data.filter((y) => y.category === cat);
    setfilter(btnfilldata);
  };




  const Lodingdata = () => {
    return (
      <div className="container text-center my-5">
        <button className="btn btn-warning" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </button>
      </div>
    );
  };

  const Showdata = () => {
    return (
      <>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <button
                onClick={() => fillData("men's clothing")}
                className="btn btn-outline-primary ms-2 my-4"
              >
                Men's Collection
              </button>
              <button
                onClick={() => fillData("women's clothing")}
                className="btn btn-outline-primary ms-2 my-4"
              >
                Women's Collection
              </button>
              <button
                onClick={() => fillData("jewelery")}
                className="btn btn-outline-primary ms-2 my-4"
              >
                Jewlary Collection
              </button>
              <button
                onClick={() => fillData("electronics")}
                className="btn btn-outline-primary ms-2 my-4"
              >
                Electronics Collection
              </button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {filter.map((x) => {
              return (
                <div className="col-lg-3 my-4">
                  <div className="card text-center" style={{ width: "15rem" }}>
                    <img src={x.image} className="" height={"290"} alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{x.title.slice(0, 10)}...</h5>
                      <p className="card-text">
                        {x.description.slice(0, 40)}....
                      </p>
                      <Link
                        to={`/Products/${x.id}`}
                        className="btn btn-outline-dark"
                      >
                        Add to Cart
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return <>{loding ? <Lodingdata /> : <Showdata />}</>;
};

export default Products;

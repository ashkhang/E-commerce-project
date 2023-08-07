import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import  addTocart  from '../redux/actions';
// import { Link } from 'react-router-dom'
import Cart from './Cart';

const Product = () => {
  const [countinc, setcountinc] = useState(0)
const { id }  = useParams();

let dispatch = useDispatch()

const [data, setdata] = useState([]);
const [loding , setloding]=useState(false);
  const getData = async () => {
    setloding(true)
    let result = await fetch(`https://fakestoreapi.com/products/${id}`);
    result = await result.json();
    setdata(result);
    setloding(false)

  };
  useEffect(() => {
    getData();
  }, []);

  const decrement=()=>{
    if(countinc >= 1){
      setcountinc(countinc - 1)
    }
  }

  const Lodingdata=()=>{
    return(
<div className='container text-center my-5' >
<button className="btn btn-warning" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
  Loading...
</button>

</div>
    )
  }


  const Showdata =()=>{
    const {image,title,rating,rate,description,price} = data
    return(
      <>
     
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-6 text-center my-3">
            <img className='anas mt-5' src={image} height={'200px'} alt="" />
          </div>
          <div className="col-lg-6 my-3">
                <h3> {title} </h3>
                <h5 className='ms-2'> Ratings :  {rating && rating.rate} <i className="fa-solid fa-star fa-xs" style={{color: '#c8d42b'}} />
                <i className="fa-solid fa-star fa-xs" style={{color: '#c8d42b'}} /><i className="fa-solid fa-star fa-xs" style={{color: '#c8d42b'}} /><i className="fa-solid fa-star fa-xs" style={{color: '#c8d42b'}} />
 </h5>
                <p className='lead ' style={{fontSize:"16px"}}> {description} </p>

                <h4> Price : $  {data.price} </h4>

                <div className='d-flex'>
                  <button onClick={()=>setcountinc(countinc+1)} className='btn btn-dark'>+</button>
                 <h2> {countinc} </h2> 
                  <button onClick={decrement} className='btn btn-outline-dark'>-</button>
                </div>
                <br /> <br />
                <div className="d-flex ms-5">
                  <button type="button" className="btn btn-outline-info ms-5" data-bs-toggle="modal" data-bs-target="#exampleModal"> Veiw Cart</button>
                  <button onClick={()=>dispatch(addTocart({image,title,rating,rate,description,price,qty:1}))} className='btn btn-dark ms-1'>Add to cart</button>
                </div>
                <hr />
                <h3>Total Price  $: {data.price * countinc}</h3>

        {/* Button trigger modal */}
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button> */}


        {/* Modal */}
                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">SHOP</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <Cart/>
                        </div>
                        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
                      </div>
                    </div>
                  </div>

          </div>
        </div>
      </div>
      </>
    )
  }

  return (
    <>
  
{loding  ? <Lodingdata/> : <Showdata/>}

    </>
  )
}

export default Product;
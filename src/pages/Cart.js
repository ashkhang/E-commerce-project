import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
  const data= useSelector(state=>state.reducer.cartitem)  
  const [Data,setData]=useState(1)
  return (
    <>
   <div className="container">
    <div className="row">
     {
      data && data.map(items=>{
        return(
          <>
          
              <div className="container">
                <div className="row">
                  <div className="col">
                  <div className="card mb-3"style={{maxWidth: 540,borderColor:"rgb(248, 252, 255)",boxShadow:"1px 1px 1px 1px lightgray"}}>
                      <button type="button" className="btn-close" data-bs-dismiss="card" aria-label="Close"></button>
                    <div className="row g-0">
                      <div className="col-md-2 d-flex  align-items-center">
                        <img src={items.image}  alt="..." className='img-fluid'/>
                      </div>
                      <div className="col-md-8 mt-1">
                        <div className="card-body" >
                          <h6 className="card-title">{items.title}</h6>
                          <p className="card-text" style={{color:'purple'}}>  Price: {items.price} $</p>
                          <p className="card-text"><small className="text-muted">RATING : {items.rating && items.rating.rate}</small></p>
                            <div className='d-flex' style={{border:"1px solid grey",maxWidth:"fit-content",height:"30px"}}> 
                              <button className='me-4' style={{borderRight:"1px solid grey",border:"none",backgroundColor:"lightgray"}} onClick={()=>setData(Data - 1)} >-</button>
                              <h6 className='p-1'>{items.qty}</h6>
                              <button className='ms-4' style={{border:"none",borderLeft:"1px solid grey",backgroundColor:"lightgray"}} onClick={()=>setData(Data + 1)} >+</button>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
            
          </>
        )
      })
     }
    </div>
   </div>
    </>
  )
}

export default Cart
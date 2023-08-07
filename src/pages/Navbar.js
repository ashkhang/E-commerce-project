import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
// import { dialogActionsClasses } from '@mui/material';
const Navbar = () => {
  const data= useSelector(state=>state.reducer.cartitem)  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <Link  className="nav-link " to="/tmcollection"><h4>TM COLLECTION</h4></Link>
   {/* <a className="navbar-brand" href="#">TM COLLECTION</a>  */}
    {/* <h3>TM COLLECTION</h3> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="/about">About</Link>
        </li>
        {/* <li className="nav-item">
          <Link  className="nav-link" to="/contact">Contact</Link>
        </li> */}
      </ul>
      <form className="d-flex">
      

        {/* </Link> */}
        {/* <Link to="/register" className='ms-2 me-5'style={{color:"grey"}}> <i className="fa-solid fa-user fa-xl"></i>Register</Link> */}
        <Link to="/login" className='ms-2 me-5'style={{color:"grey"}}> <i class="fa-solid fa-right-to-bracket fa-xl"></i>Login</Link>
        <Link to="/signup" className='ms-2 me-5'style={{color:"grey"}}> <i class="fa-solid fa-user-plus fa-xl"></i>Signup</Link>


        <IconButton type='button' aria-label="cart"data-bs-toggle="modal" data-bs-target="#exampleModal">
      <StyledBadge badgeContent={data.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
        
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
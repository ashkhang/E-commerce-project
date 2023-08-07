import React from 'react'
import Footer from './Footer'

function About() {
  return (
       <div className="hero">
            <div className="card bg-dark text-black border-0">
                <img src="/assets/bg.jpg.webp" class="card-img" alt="background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">ABOUT US</h5>
                    <p className="card-text lead fs-2">BOOST YOUR STYLE SENSE</p>
                  </div>  
                </div>
            </div>

<br/>
<br/>
<br/>

<div class="row row-cols-1 row-cols-md-2 g-0">
  <div class="col">
    <div class="card">
      <img src="/assets/about.jpg" class="card-img-top" alt="About Image"/>
      {/* <div class="card-body">
        <h5 class="card-title">Men's Collection</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div> */}
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">ABOUT TM COLLECTION</h4>
        <p class="card-text">At TM COLLECTION, we are passionate about fashion and believe that what you wear can truly express your unique personality and style. Our mission is to provide you with a seamless shopping experience where you can discover trendy and high-quality clothing that reflects the latest fashion trends.</p>
        <p>With years of experience in the fashion industry, our team has curated a diverse collection of clothing items that cater to all genders, ages, and sizes. Whether you're looking for casual everyday wear, chic office attire, or glamorous evening outfits, we have something to suit every occasion and taste. We understand that fashion is not just about looking good; it's also about feeling comfortable and confident in what you wear. That's why we carefully select each item in our inventory, ensuring that they are made from the finest materials and crafted with attention to detail. </p>
        <p>At TM COLLECTION, we believe in the power of sustainable fashion. We strive to support ethical and eco-friendly practices by collaborating with brands that share our values. We are committed to reducing our carbon footprint and promoting responsible manufacturing processes. By choosing our clothing, you can be confident that you are making a positive impact on both the fashion industry and the environment.</p>
        <p>We pride ourselves on our exceptional customer service. Our dedicated team is always ready to assist you with any queries, sizing concerns, or style advice you may need. We want your shopping experience to be enjoyable and stress-free, and we are here to ensure that you find the perfect pieces to enhance your wardrobe. We value your trust and privacy. Your personal information is handled with the utmost care and is securely protected. We also offer a secure payment gateway to ensure that your transactions are safe and secure.</p>  
        <p>Thank you for choosing TM COLLECTION as your go-to destination for fashionable clothing. We invite you to explore our extensive collection and discover the latest trends, timeless classics, and wardrobe essentials that will elevate your style to new heights. Join us on this fashion journey, and let us help you express your unique personality through the clothes you wear.</p>
      </div>
    </div>
  </div>
 
</div>    

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default About

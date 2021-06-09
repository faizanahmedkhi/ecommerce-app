import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  // const dispatch = useDispatch();
  // const productList = useSelector((state) => state.productList);
  // const { loading, error, products } = productList;

  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;

  // useEffect(() => {
  //   dispatch(listProducts({}));
  //   dispatch(listTopSellers());
  // }, [dispatch]);
  return (
    // <div>
    //   <h2>Top Sellers</h2>
    //   {loadingSellers ? (
    //     <LoadingBox></LoadingBox>
    //   ) : errorSellers ? (
    //     <MessageBox variant="danger">{errorSellers}</MessageBox>
    //   ) : (
    //     <>
    //       {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
    //       <Carousel showArrows autoPlay showThumbs={false}>
    //         {sellers.map((seller) => (
    //           <div key={seller._id}>
    //             <Link to={`/seller/${seller._id}`}>
    //               <img src={seller.seller.logo} alt={seller.seller.name} />
    //               <p className="legend">{seller.seller.name}</p>
    //             </Link>
    //           </div>
    //         ))}
    //       </Carousel>
    //     </>
    //   )}
    //   <h2>Featured Products</h2>
    //   {loading ? (
    //     <LoadingBox></LoadingBox>
    //   ) : error ? (
    //     <MessageBox variant="danger">{error}</MessageBox>
    //   ) : (
    //     <>
    //       {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
    //       <div className="row center">
    //         {products.map((product) => (
    //           <Product key={product._id} product={product}></Product>
    //         ))}
    //       </div>
    //     </>
    //   )}
    // </div>

<div>
<div id="jtv-mobile-menu">
  <ul>
    <li>
      <div className="jtv-search-mob">
        <form id="search1" name="search">
          <div className="input-group">
            <div className="input-group-btn">
              <button className="btn btn-default" type="submit"><i className="fa fa-search"></i> </button>
            </div>
            <input type="text" className="form-control simple" placeholder="Search ..." name="srch-term" id="srch-term" />
          </div>
        </form>
      </div>
    </li>
    <li><a href="index.html">Home</a>
      <ul>
        <li><a href="../index.html"><span>Home Shop 1</span></a></li>
        <li><a href="../version2/index.html"><span>Home Shop 2</span></a></li>
        <li><a href="index.html"><span>Home Shop 3</span></a></li>
        <li><a href="../version4/index.html"><span>Home Shop 4</span></a></li>
      </ul>
    </li>
    <li><a href="#">Pages</a>
      <ul>
        <li><a href="shop_grid.html"><span>Shop Grid</span></a>
          <ul>
            <li><a href="shop_grid_right.html"> <span>Shop Grid Right Sidebar</span></a></li>
            <li><a href="shop_grid_fullwidth.html"> <span>Shop Grid Fullwidth</span></a></li>
          </ul>
        </li>
        <li><a href="shop_list.html"> <span>Shop List</span></a>
          <ul>
            <li><a href="shop_list_right.html"> <span>Shop List Right Sidebar</span></a></li>
          </ul>
        </li>
        <li><a href="single_product.html"> <span>Single Product</span></a></li>
        <li><a href="shopping_cart.html"> <span>Shopping Cart</span></a></li>
        <li><a href="checkout.html"><span>Checkout</span></a></li>
        <li><a href="wishlist.html"> <span>Wishlist</span></a></li>
        <li><a href="compare.html"><span>Compare</span></a></li>
        <li><a href="quick_view.html"><span>Quick View</span></a></li>
        <li><a href="404error.html"><span>404 Error Page</span></a></li>
      </ul>
    </li>
    <li><a href="shop_grid.html">Fashion</a>
      <ul>
        <li><a href="#" className="">Accessories</a>
          <ul>
            <li><a href="shop_grid.html">Cocktail</a></li>
            <li><a href="shop_grid.html">Day</a></li>
            <li><a href="shop_grid.html">Evening</a></li>
            <li><a href="shop_grid.html">Sundresses</a></li>
          </ul>
        </li>
        <li><a href="#">Dresses</a>
          <ul>
            <li><a href="shop_grid.html">Accessories</a></li>
            <li><a href="shop_grid.html">Hats and Gloves</a></li>
            <li><a href="shop_grid.html">Lifestyle</a></li>
            <li><a href="shop_grid.html">Bras</a></li>
          </ul>
        </li>
        <li><a href="#">Shoes</a>
          <ul>
            <li><a href="shop_grid.html">Flat Shoes</a></li>
            <li><a href="shop_grid.html">Flat Sandals</a></li>
            <li><a href="shop_grid.html">Boots</a></li>
            <li><a href="shop_grid.html">Heels</a></li>
          </ul>
        </li>
        <li><a href="#">Jwellery</a>
          <ul>
            <li><a href="shop_grid.html">Bracelets</a></li>
            <li><a href="shop_grid.html">Necklaces &amp; Pendent</a></li>
            <li><a href="shop_grid.html">Pendants</a></li>
            <li><a href="shop_grid.html">Pins &amp; Brooches</a></li>
          </ul>
        </li>
        <li><a href="#">Dresses</a>
          <ul>
            <li><a href="shop_grid.html">Casual Dresses</a></li>
            <li><a href="shop_grid.html">Evening</a></li>
            <li><a href="shop_grid.html">Designer</a></li>
            <li><a href="shop_grid.html">Party</a></li>
          </ul>
        </li>
        <li><a href="#">Swimwear</a>
          <ul>
            <li><a href="shop_grid.html">Swimsuits</a></li>
            <li><a href="shop_grid.html">Beach Clothing</a></li>
            <li><a href="shop_grid.html">Clothing</a></li>
            <li><a href="shop_grid.html">Bikinis</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="shop_grid.html">Women</a>
      <ul>
        <li><a href="#" className="">Clothing</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Coats &amp; Jackets</a></li>
            <li><a href="shop_grid.html">Raincoats</a></li>
            <li><a href="shop_grid.html">Blazers</a></li>
            <li><a href="shop_grid.html">Jackets</a></li>
          </ul>
        </li>
        <li><a href="#">Dresses</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Casual Dresses</a></li>
            <li><a href="shop_grid.html">Evening</a></li>
            <li><a href="shop_grid.html">Designer</a></li>
            <li><a href="shop_grid.html">Party</a></li>
          </ul>
        </li>
        <li><a href="#" className="">Shoes</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Sport Shoes</a></li>
            <li><a href="shop_grid.html">Casual Shoes</a></li>
            <li><a href="shop_grid.html">Leather Shoes</a></li>
            <li><a href="shop_grid.html">canvas shoes</a></li>
          </ul>
        </li>
        <li><a href="#">Jackets</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Coats</a></li>
            <li><a href="shop_grid.html">Formal Jackets</a></li>
            <li><a href="shop_grid.html">Leather Jackets</a></li>
            <li><a href="shop_grid.html">Blazers</a></li>
          </ul>
        </li>
        <li><a href="#">Accesories</a>
          <ul className="level1">
            <li><a href="shop_grid.html">Backpacks</a></li>
            <li><a href="shop_grid.html">Wallets</a></li>
            <li><a href="shop_grid.html">Laptops Bags</a></li>
            <li><a href="shop_grid.html">Belts</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="shop_grid.html">Men</a>
      <ul>
        <li><a href="shop_grid.html">Mobiles</a>
          <ul>
            <li><a href="shop_grid.html">iPhone</a></li>
            <li><a href="shop_grid.html">Samsung</a></li>
            <li><a href="shop_grid.html">Nokia</a></li>
            <li><a href="shop_grid.html">Sony</a></li>
          </ul>
        </li>
        <li><a href="shop_grid.html" className="">Music &amp; Audio</a>
          <ul>
            <li><a href="shop_grid.html">Audio</a></li>
            <li><a href="shop_grid.html">Cameras</a></li>
            <li><a href="shop_grid.html">Appling</a></li>
            <li><a href="shop_grid.html">Car Music</a></li>
          </ul>
        </li>
        <li><a href="shop_grid.html">Accessories</a>
          <ul>
            <li><a href="shop_grid.html">Home &amp; Office</a></li>
            <li><a href="shop_grid.html">TV &amp; Home Theater</a></li>
            <li><a href="shop_grid.html">Phones &amp; Radio</a></li>
            <li><a href="shop_grid.html">All Electronics</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <div className="jtv-top-link-mob">
    <ul className="links">
      <li><a title="My Account" href="account_page.html">My Account</a></li>
      <li><a title="Wishlist" href="wishlist.html">Wishlist</a></li>
      <li><a title="Checkout" href="checkout.html">Checkout</a></li>
      <li><a title="Blog" href="blog.html"><span>Blog</span></a></li>
      <li className="last"><a title="Login" href="account_page.html"><span>Login</span></a></li>
    </ul>
  </div>
</div>

<div id="page"> 
  
  <header>
    <div className="header-container">
      <div className="header-top">
        <div className="container">
          <div className="row"> 
            
            <div className="col-xs-12 col-sm-4 col-md-6">
              <div className="welcome-msg">Welcome to our store! </div>
              <div className="dropdown jtv-language-box"> <a role="button" data-toggle="dropdown" data-target="#" className="block-language dropdown-toggle" href="#"> <img className="img-responsive" src="images/flag-english.jpg" alt="language" /> English <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a className="selected" href="#"> <img className="img-responsive" src="images/flag-english.jpg" alt="flag" /> <span>English</span></a></li>
                  <li><a href="#"> <img className="img-responsive" src="images/flag-default.jpg" alt="flag" /> <span>French</span></a></li>
                  <li><a href="#"> <img className="img-responsive" src="images/flag-german.jpg" alt="flag" /> <span>German</span></a></li>
                  <li><a href="#"> <img className="img-responsive" src="images/flag-brazil.jpg" alt="flag" /> <span>Brazil</span></a></li>
                  <li><a href="#"> <img className="img-responsive" src="images/flag-chile.jpg" alt="flag" /> <span>Chile</span></a></li>
                  <li><a href="#"> <img className="img-responsive" src="images/flag-spain.jpg" alt="flag" /> <span>Spain</span></a></li>
                </ul>
              </div>
      
              <div className="dropdown jtv-currency-box"> <a role="button" data-toggle="dropdown" data-target="#" className="block-currency dropdown-toggle" href="#"> USD <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#"> $ - Dollar </a></li>
                  <li><a href="#"> £ - Pound </a></li>
                  <li><a href="#"> € - Euro </a></li>
                </ul>
              </div>
            
              
            </div>
            <div className="col-xs-6 col-sm-8 col-md-6 hidden-xs"> 
             
              <div className="jtv-top-links">
                <div className="links">
                  <ul>
                    <li><a title="My Account" href="account_page.html"><span className="hidden-xs">My Account</span></a></li>
                    <li><a title="Wishlist" href="wishlist.html">Wishlist</a></li>
                    <li><a title="Checkout" href="checkout.html"><span className="hidden-xs">Checkout</span></a></li>
                    <li>
                      <div className="dropdown block-company-wrapper hidden-xs"> <a role="button" data-toggle="dropdown" data-target="#" className="block-company dropdown-toggle" href="#"> More <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                          <li><a href="about_us.html"> About Us </a></li>
                          <li><a href="#"> Track Your Order </a></li>
                          <li><a href="#"> Privacy Policy </a></li>
                          <li><a href="sitemap.html">Site Map </a></li>
                          <li><a href="#">Search Terms </a></li>
                          <li><a href="#">Advanced Search </a></li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="account_page.html"><span className="hidden-xs">Log In</span></a></li>
                  </ul>
                </div>
              </div>
         
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <div className="jtv-top-cart-box"> 
             
              <div className="mini-cart">
                <div data-toggle="dropdown" data-hover="dropdown" className="basket dropdown-toggle"> <a href="shopping_cart.html"> <i className="pe-7s-cart"></i><span className="cart_count hidden-xs">2</span><span className="price hidden-xs">My Cart / $299.00</span></a> </div>
                <div>
                  <div className="jtv-top-cart-content"> 
                    
                  
                    <ul className="mini-products-list" id="cart-sidebar">
                      <li className="item first">
                        <div className="item-inner"> <a className="product-image" title="Product Title Here" href="#"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /> </a>
                          <div className="product-details">
                            <div className="access"><a className="jtv-btn-remove" title="Remove This Item" href="#">Remove</a> <a className="btn-edit" title="Edit item" href="#"><i className="icon-pencil"></i><span className="hidden">Edit item</span></a> </div>
                            <p className="product-name"><a href="#">Product Title Here</a> </p>
                            <strong>1</strong> x <span className="price">$79.99</span> </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="item-inner"> <a className="product-image" title="Product Title Here" href="single_product.html"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /> </a>
                          <div className="product-details">
                            <div className="access"><a className="jtv-btn-remove" title="Remove This Item" href="#">Remove</a> <a className="btn-edit" title="Edit item" href="#"><i className="icon-pencil"></i><span className="hidden">Edit item</span></a> </div>
                            <p className="product-name"><a href="#">Product Title Here</a> </p>
                            <strong>1</strong> x <span className="price">$88.89</span> </div>
                        </div>
                      </li>
                      <li className="item last">
                        <div className="item-inner"> <a className="product-image" title="Product Title Here" href="single_product.html"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /> </a>
                          <div className="product-details">
                            <div className="access"><a className="jtv-btn-remove" title="Remove This Item" href="#">Remove</a> <a className="btn-edit" title="Edit item" href="#"><i className="icon-pencil"></i><span className="hidden">Edit item</span></a> </div>
                            <p className="product-name"><a href="#">Product Title Here</a> </p>
                            <strong>1</strong> x <span className="price">$85.99</span> </div>
                        </div>
                      </li>
                    </ul>
                    
                    
                    <div className="actions">
                      <button className="btn-checkout" title="Checkout" type="button" onClick="checkout.html"><span>Checkout</span> </button>
                      <a href="shopping_cart.html" className="view-cart"><span>View Cart</span></a> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-4 col-xs-12 jtv-logo-box">
            <div className="mm-toggle-wrap hidden-sm hidden-md hidden-lg">
              <div className="mm-toggle"><i className="fa fa-align-justify"></i></div>
            </div>
         
            <div className="logo"> <a title="eCommerce" href="index.html"><img className="img-responsive" alt="eCommerce" src="../assets/images/logo.png" /> </a> </div>
         
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 hidden-xs">
            <div className="search-box">
              <form action="cat" method="POST" id="search_mini_form" name="Categories">
                <input type="text" placeholder="Search for products..." maxlength="70" name="search" id="search" />
                <button type="button" className="search-btn-bg"><i className="pe-7s-search"></i>&nbsp;</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  
  <nav className="hidden-xs">
    <div className="container">
      <div className="nav-inner"> 

        <ul id="nav">
          <li className="drop-menu"><a href="index.html" className="level-top active"><span>Home</span></a>
            <ul>
              <li><a href="../index.html"><span>Home Shop 1</span></a></li>
              <li><a href="../version2/index.html"><span>Home Shop 2</span></a></li>
              <li><a href="index.html"><span>Home Shop 3</span></a></li>
              <li><a href="../version4/index.html"><span>Home Shop 4</span></a></li>
            </ul>
          </li>
          <li className="drop-menu"> <a href="#"> <span>Pages</span></a>
            <ul>
              <li className="sub-cat"><a href="shop_grid.html"><span>Shop Grid</span></a>
                <ul>
                  <li><a href="shop_grid_right.html"> <span>Shop Grid Right Sidebar</span></a></li>
                  <li><a href="shop_grid_fullwidth.html"> <span>Shop Grid Fullwidth</span></a></li>
                </ul>
              </li>
              <li className="sub-cat"> <a href="shop_list.html"> <span>Shop List</span></a>
                <ul>
                  <li><a href="shop_list_right.html"> <span>Shop List Right Sidebar</span></a></li>
                </ul>
              </li>
              <li><a href="single_product.html"> <span>Single Product</span></a></li>
              <li><a href="shopping_cart.html"> <span>Shopping Cart</span></a></li>
              <li><a href="checkout.html"><span>Checkout</span></a></li>
              <li><a href="wishlist.html"> <span>Wishlist</span></a></li>
              <li><a href="compare.html"><span>Compare</span></a></li>
              <li><a href="quick_view.html"><span>Quick View</span></a></li>
              <li><a href="404error.html"><span>404 Error Page</span></a></li>
            </ul>
          </li>
          <li className="mega-menu"> <a className="level-top" href="shop_grid.html"><span>Clothing</span></a>
            <div className="jtv-menu-block-wrapper">
              <div className="jtv-menu-block-wrapper2">
                <div className="nav-block jtv-nav-block-center">
                  <div className="col-1">
                    <ul className="level0">
                      <li className="parent item"> <a href="shop_grid.html"><span>Women</span></a>
                        <ul className="level1">
                          <li><a href="shop_grid.html"><span>Blazers & Vests</span></a></li>
                          <li><a href="shop_grid.html"><span>Graphics Tees</span></a></li>
                          <li><a href="shop_grid.html"><span>Jeans</span></a></li>
                          <li><a href="shop_grid.html"><span>Jackets & Outerwear</span></a></li>
                          <li><a href="shop_grid.html"><span>Pants</span></a></li>
                        </ul>
                      </li>
                      <li className="parent item"> <a href="shop_grid.html"><span>Men</span></a>
                        <ul className="level1">
                          <li><a href="shop_grid.html"><span>Casual Dresses</span></a></li>
                          <li><a href="shop_grid.html"><span>Barware</span></a></li>
                          <li><a href="shop_grid.html"><span>Accessories</span></a></li>
                          <li><a href="shop_grid.html"><span>Grooming</span></a></li>
                          <li><a href="shop_grid.html"><span>Lifestyle</span></a></li>
                        </ul>
                      </li>
                      <li className="parent item"> <a href="shop_grid.html"><span>Kids</span></a>
                        <ul className="level1">
                          <li><a href="shop_grid.html"><span>Bath and Body</span></a></li>
                          <li><a href="shop_grid.html"><span>T-Shirts</span></a></li>
                          <li><a href="shop_grid.html"><span>Winter wear</span></a></li>
                          <li><a href="shop_grid.html"><span>Clothing Sets</span></a></li>
                          <li><a href="shop_grid.html"><span>Pants</span></a></li>
                        </ul>
                      </li>
                      <li className="parent item"> <a href="shop_grid.html"><span>Jewelry </span></a>
                        <ul className="level1">
                          <li><a href="shop_grid.html"><span>Necklaces & Pendants</span></a></li>
                          <li><a href="shop_grid.html"><span>Earrings</span></a></li>
                          <li><a href="shop_grid.html"><span>Dimond Rings</span></a></li>
                          <li><a href="shop_grid.html"><span>Bangles & Bracelets</span></a></li>
                          <li><a href="shop_grid.html"><span>Jewellery Sets</span></a></li>
                        </ul>
                      </li>
                      <li className="parent item"> <a href="shop_grid.html"><span>Shoes</span></a>
                        <ul className="level1">
                          <li><a href="shop_grid.html"><span>Sports Shoes</span></a></li>
                          <li><a href="shop_grid.html"><span>Sneakers</span></a></li>
                          <li><a href="shop_grid.html"><span>Casual Shoes</span></a></li>
                          <li><a href="shop_grid.html"><span>Loafers & Mocassins</span></a></li>
                          <li><a href="shop_grid.html"><span>Flip-Flops</span></a></li>
                        </ul>
                      </li>
                      <li className="parent item"> <a href="shop_grid.html"><span>Accessories</span></a>
                        <ul className="level1">
                          <li><a href="shop_grid.html"><span>Bags and Purces</span></a></li>
                          <li><a href="shop_grid.html"><span>Belts</span></a></li>
                          <li><a href="shop_grid.html"><span>Scarves</span></a></li>
                          <li><a href="shop_grid.html"><span>Gloves</span></a></li>
                          <li><a href="shop_grid.html"><span>Hair Accessories</span></a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="col-2">
                    <div className="jtv-nav-image1"> <a title="" href="#"><img className="img-responsive" alt="menu_image" src="images/menu-img1.jpg" /> </a> </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mega-menu"> <a className="level-top" href="shop_grid.html"><span>Accessories</span></a>
            <div className="jtv-menu-block-wrapper">
              <div className="jtv-menu-block-wrapper2">
                <div className="nav-block jtv-nav-block-center">
                  <ul className="level0">
                    <li className="parent item"> <a href="shop_grid.html"><span>Handbags & clutches</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Handbags</span></a></li>
                        <li><a href="shop_grid.html"><span>Bags & backpacks</span></a></li>
                        <li><a href="shop_grid.html"><span>Garment covers</span></a></li>
                        <li><a href="shop_grid.html"><span>Bags & wallets combo</span></a></li>
                        <li><a href="shop_grid.html"><span>Wallets & clutches</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Watches</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Fastrack</span></a></li>
                        <li><a href="shop_grid.html"><span>Casio</span></a></li>
                        <li><a href="shop_grid.html"><span>Titan</span></a></li>
                        <li><a href="shop_grid.html"><span>Fossil</span></a></li>
                        <li><a href="shop_grid.html"><span>Sonata</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Belts</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Pacific gold</span></a></li>
                        <li><a href="shop_grid.html"><span>Teakwood leathers</span></a></li>
                        <li><a href="shop_grid.html"><span>Lino perros</span></a></li>
                        <li><a href="shop_grid.html"><span>Tommy hilfiger</span></a></li>
                        <li><a href="shop_grid.html"><span>Leather</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Sunglasses</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Prescription</span></a></li>
                        <li><a href="shop_grid.html"><span>Nonprescription</span></a></li>
                        <li><a href="shop_grid.html"><span>Basic facts</span></a></li>
                        <li><a href="shop_grid.html"><span>Polarized</span></a></li>
                        <li><a href="shop_grid.html"><span>Designer</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Sportswear</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Tshirts</span></a></li>
                        <li><a href="shop_grid.html"><span>Sweatshirts & Hoodies</span></a></li>
                        <li><a href="shop_grid.html"><span>Athletic Socks</span></a></li>
                        <li><a href="shop_grid.html"><span>Track Jackets</span></a></li>
                        <li><a href="shop_grid.html"><span>Track Pants & Trousers</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Coats & Jackets</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>American Blue</span></a></li>
                        <li><a href="shop_grid.html"><span>Style Loft</span></a></li>
                        <li><a href="shop_grid.html"><span>Sew in Style</span></a></li>
                        <li><a href="shop_grid.html"><span>The Wardrobe</span></a></li>
                        <li><a href="shop_grid.html"><span>Sweetshirts</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="jtv-nav-banner">
                  <div className="jtv-banner-box">
                    <div className="jtv-nav-banner-img"> <a href="#"><img className="img-responsive" src="images/menu-img2.jpg" alt="Handbag" /> </a> </div>
                  </div>
                  <div className="jtv-banner-box">
                    <div className="jtv-nav-banner-img"> <a href="#"><img className="img-responsive" src="images/menu-img3.jpg" alt="Handbag" /> </a> </div>
                  </div>
                  <div className="jtv-banner-box jtv-banner-box_last">
                    <div className="jtv-nav-banner-img"> <a href="#"><img className="img-responsive" src="images/menu-img4.jpg" alt="Handbag" /> </a> </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="mega-menu"> <a className="level-top" href="shop_grid.html"><span>Women</span></a>
            <div className="jtv-menu-block-wrapper">
              <div className="jtv-menu-block-wrapper2">
                <div className="nav-block jtv-nav-block-center">
                  <ul className="level0">
                    <li className="parent item"> <a href="shop_grid.html"><span>Clothing</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Hobo Bag</span></a></li>
                        <li><a href="shop_grid.html"><span>Fabric Bag</span></a></li>
                        <li><a href="shop_grid.html"><span>Backpack Bga</span></a></li>
                        <li><a href="shop_grid.html"><span>Laptop Bga</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>New arrivals</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Print Laptop Bag</span></a></li>
                        <li><a href="shop_grid.html"><span>Office Bag</span></a></li>
                        <li><a href="shop_grid.html"><span>Shoulder bags</span></a></li>
                        <li><a href="shop_grid.html"><span>leather totes</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Top brands</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>leather totes</span></a></li>
                        <li><a href="shop_grid.html"><span>Office Bag </span></a></li>
                        <li><a href="shop_grid.html"><span>Fabric Bag</span></a></li>
                        <li><a href="shop_grid.html"><span>WallyPhones</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Professional</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Clutches bag</span></a></li>
                        <li><a href="shop_grid.html"><span>Genuine bag </span></a></li>
                        <li><a href="shop_grid.html"><span>WallyPhones </span></a></li>
                        <li><a href="shop_grid.html"><span>Leather Phones</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Sports</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Vivo Mobiles</span></a></li>
                        <li><a href="shop_grid.html"><span>Moto Z Play</span></a></li>
                        <li><a href="shop_grid.html"><span>Moto G5 Plus</span></a></li>
                        <li><a href="shop_grid.html"><span>Infocus Turbo 5</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Sony Xperia</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Coolpad Mega 3</span></a></li>
                        <li><a href="shop_grid.html"><span>Oppo F3 Plus</span></a></li>
                        <li><a href="shop_grid.html"><span>Asus Zenfone</span></a></li>
                        <li><a href="shop_grid.html"><span>Samsung On8</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="mega-menu"> <a className="level-top" href="shop_grid.html"><span>Men</span></a>
            <div className="jtv-menu-block-wrapper">
              <div className="jtv-menu-block-wrapper2">
                <div className="nav-block jtv-nav-block-center jtv-menu-box-left">
                  <ul className="level0">
                    <li className="parent item"> <a href="shop_grid.html"><span>Clothing</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>T-Shirts</span></a></li>
                        <li><a href="shop_grid.html"><span>Shirts</span></a></li>
                        <li><a href="shop_grid.html"><span>Trousers</span></a></li>
                        <li><a href="shop_grid.html"><span>Sleep Wear</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Shoes</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Flat Shoes</span></a></li>
                        <li><a href="shop_grid.html"><span>Flat Sandals</span></a></li>
                        <li><a href="shop_grid.html"><span>Boots</span></a></li>
                        <li><a href="shop_grid.html"><span>Heels</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Jwellery</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Bracelets</span></a></li>
                        <li><a href="shop_grid.html"><span>Necklaces &amp; Pendent</span></a></li>
                        <li><a href="shop_grid.html"><span>Pendants</span></a></li>
                        <li><a href="shop_grid.html"><span>Pins &amp; Brooches</span></a></li>
                      </ul>
                    </li>
                    <li className="parent item"> <a href="shop_grid.html"><span>Watches</span></a>
                      <ul className="level1">
                        <li><a href="shop_grid.html"><span>Fastrack</span></a></li>
                        <li><a href="shop_grid.html"><span>Casio</span></a></li>
                        <li><a href="shop_grid.html"><span>Sonata</span></a></li>
                        <li><a href="shop_grid.html"><span>Maxima</span></a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="nav-block nav-block-right std jtv-menu-box-right"><img className="img-responsive" src="images/menu-img5.jpg" alt="menu img" /> </div>
              </div>
            </div>
          </li>
          <li className="mega-menu"> <a className="level-top" href="blog.html"><span>Blog</span></a></li>
          <li className="nav-custom-link mega-menu"> <a href="#" className="level-top"> <span>Features</span></a>
            <div className="jtv-menu-block-wrapper custom-menu">
              <div className="header-nav-dropdown-wrapper">
                <div className="jtv-custom-box"> <i className="fa fa-laptop"></i>
                  <h4 className="heading">100% Responsive Design</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                </div>
                <div className="jtv-custom-box"> <i className="fa fa-book"></i>
                  <h4 className="heading">Easy Document</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim erat ut laoreet pharetra.</p>
                </div>
                <div className="jtv-custom-box"> <i className="fa fa-fort-awesome"></i>
                  <h4 className="heading">Awesome Icon Fonts</h4>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="jtv-custom-box"> <i className="fa fa-home"></i>
                  <h4 className="heading">2 Layout Home Pages</h4>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div className="jtv-slideshow">
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div id='jtv-rev_slider_wrapper' className='rev_slider_wrapper fullwidthbanner-container'>
            <div id='jtv-rev_slider' className='rev_slider fullwidthabanner'>
              <ul>
                <li data-transition='fade' data-slotamount='7' data-masterspeed='1000' data-thumb='../assets/images/slider/slide-img1.jpg'><img className="img-responsive" src="../assets/images/slider/slide-img1.jpg" alt="slide-img" data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' />
                  <div className="info">
                    <div className='tp-caption jtv-sub-title sft  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:2, whiteSpace:'nowrap', color:'#fff', fontSize:'18px'}}><span>Mega Sale, Don’t Miss Out !</span> </div>
                    <div className='tp-caption jtv-large-title sfl  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:3, whiteSpace:'nowrap'}}><span style={{color:'#000', letterSpacing:'0.8px'}}>Look Hot</span> </div>
                    <div className='tp-caption jtv-large-title sfl  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:3, whiteSpace:'nowrap'}}><span style={{color:'#000', letterSpacing:'0.8px'}}>with Style</span> </div>
                    <div className='tp-caption Title sft  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1450' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:4, whiteSpace:'nowrap',color:'#f8f8f8', marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur.</div>
                    <div className='tp-caption sfb  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:4, whiteSpace:'nowrap', color:'#fff', fontSize:'18px'}}><a href='#' className="jtv-shop-now-btn">Shop Now</a> </div>
                  </div>
                </li>
                <li data-transition='fade' data-slotamount='7' data-masterspeed='1000' data-thumb='../assets/images/slider/slide-img2.jpg'><img className="img-responsive" src="../assets/images/slider/slide-img2.jpg" alt="slide-img" data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' />
                  <div className="info">
                    <div className='tp-caption jtv-sub-title sft slide2  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:2, whiteSpace:'nowrap', color:'#333', fontSize:'18px', paddingRight:'0px'}}><span>Top Trend Of The Week!</span> </div>
                    <div className='tp-caption jtv-large-title sfl  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:3, whiteSpace:'nowrap'}}>Young & Crazy</div>
                    <div className='tp-caption Title sft  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:4, whiteSpace:'nowrap', color:'#666', marginTop:'12px'}}>A Perfect template to start selling your products.</div>
                    <div className='tp-caption sfb  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:4, whiteSpace:'nowrap'}}><a href='#' className="jtv-shop-now-btn">See Detail</a> </div>
                  </div>
                </li>
                <li data-transition='fade' data-slotamount='7' data-masterspeed='1000' data-thumb='../assets/images/slider/slide-img3.jpg'><img className="img-responsive" src="../assets/images/slider/slide-img3.jpg" alt="slide-img" data-bgposition='left top' data-bgfit='cover' data-bgrepeat='no-repeat' />
                  <div className="info">
                    <div className='tp-caption jtv-sub-title sft  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1100' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:2, whiteSpace:'nowrap', color:'#333', fontSize:'16px'}}><span>Stylish, Crazy. Are you a prominent girl?</span> </div>
                    <div className='tp-caption jtv-large-title sfl  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:3, whiteSpace:'nowrap'}}><span style={{color:'#06c'}}>Fresh</span> </div>
                    <div className='tp-caption jtv-large-title sfl  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1300' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:3, whiteSpace:'nowrap'}}><span style={{color:'#000'}}>Summer Sales</span> </div>
                    <div className='tp-caption Title sft  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1450' data-easing='Power2.easeInOut' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:4, whiteSpace:'nowrap', color:'#333', marginTop:'126px'}}>End Season Up to 50% off.</div>
                    <div className='tp-caption sfb  tp-resizeme ' data-endspeed='500' data-speed='500' data-start='1500' data-easing='Linear.easeNone' data-splitin='none' data-splitout='none' data-elementdelay='0.1' data-endelementdelay='0.1' style={{zIndex:2, whiteSpace:'nowrap',fontSize:'18px'}}><a href='#' className="jtv-shop-now-btn">Shop Now</a> </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
        <div className="col-md-4 col-sm-12">
          <div className="jtv-text-top-banner col-sm-6 col-md-12"> <a href="/#" title=""> <img className="img-responsive" src="../assets/images/banner-img1.jpg" alt="" /> <span className="jtv-b-content bottom-left"><span className="text">LIMITED-TIME OFFER</span> <span className="title"> <span className="title-color">Jewellery Collection</span> </span> <span className="btn-buy"><span>Buy now</span></span> </span> <span className="jtv-b-price-box"> <span className="banner-text-wrapper"> <span className="jtv-b-price-text">From</span> <span className="jtv-b-price">$299</span> </span> </span></a></div>
        </div>
      </div>
    </div>
  </div>
  
  {/* <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className="jtv-text-top-banner"> <a href="/#" title=""> <img className="img-responsive" src="images/banner-img3.jpg" alt="" /> <span className="jtv-b-content middle-left"> <span className="title"> <small>Handbags</small><br />
          <span className="skincolor">Upto 75% Off</span><span className="btn-buy"><span>Shop now</span></span></a></div>
      </div>
      <div className="col-sm-6">
        <div className="jtv-text-top-banner"> <a href="/#" title=""> <img className="img-responsive" src="images/banner-img4.jpg" alt="" /> <span className="jtv-b-content middle-left"> <span className="banner-label-wrapper"></span> <span className="title"> <small>Just Arrived</small><br />
          <span className="title-color">Modern & Unique</span><span className="btn-buy"><span>Buy now</span></a></div>
      </div>
    </div>
  </div> */}
  

  <section className="jtv-bestsell-section">
    <div className="container">
      <div className="slider-items-products">
        <div className="bestsell-block">
          <div className="jtv-block-inner">
            <div className="block-title">
              <h2>Best Sellers</h2>
            </div>
          </div>
          <div id="bestsell-slider" className="product-flexslider hidden-buttons">
            <div className="slider-items slider-width-col4 products-grid block-content">
              <div className="item">
                <div className="item-inner">
                  <div className="item-img">
                    <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /> <a href="single_product.html" className="product-link"> </a>
                      <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                    </div>
                  </div>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                      <div className="item-content">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                        <div className="item-price">
                          <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="item-img">
                    <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                      <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                    </div>
                  </div>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                      <div className="item-content">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                        <div className="item-price">
                          <div className="price-box"> <span className="regular-price"> <span className="price">$99.00</span> </span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="item-img">
                    <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                      <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                    </div>
                  </div>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                      <div className="item-content">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                        <div className="item-price">
                          <div className="price-box">
                            <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $156.00 </span> </p>
                            <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $167.00 </span> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="item-img">
                    <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                      <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                    </div>
                  </div>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                      <div className="item-content">
                        <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                        <div className="item-price">
                          <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="item-img">
                    <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                      <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                    </div>
                  </div>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                      <div className="item-content">
                        <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                        <div className="item-price">
                          <div className="price-box"> <span className="regular-price"> <span className="price">$99.00</span> </span> </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="item-inner">
                  <div className="item-img">
                    <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                      <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                    </div>
                  </div>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                      <div className="item-content">
                        <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                        <div className="item-price">
                          <div className="price-box">
                            <p className="special-price"> <span className="price-label">Special Price</span> <span className="price"> $156.00 </span> </p>
                            <p className="old-price"> <span className="price-label">Regular Price:</span> <span className="price"> $167.00 </span> </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div className="our-features-box">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-xs-12 col-sm-4">
          <div className="feature-box"> <i className="pe-7s-plane"></i>
            <div className="content">
              <h3>Free Shipping Worldwide</h3>
              <p>Free Shipping on Orders over $99</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-4">
          <div className="feature-box"> <i className="pe-7s-piggy"></i>
            <div className="content">
              <h3>Money Back Guarantee</h3>
              <p>To establish a selling price for a product</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-4">
          <div className="feature-box"> <i className="pe-7s-headphones"></i>
            <div className="content">
              <h3>Online Support 24/7</h3>
              <p>In order to provide 24X7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <section className="top-categories-section">
    <div className="container">
      <div className="slider-items-products">
        <div className="top-block">
          <div className="jtv-block-inner">
            <div className="block-title">
              <h2>Top Categories</h2>
            </div>
          </div>
          <div id="top-cat-slider" className="product-flexslider hidden-buttons">
            <div className="slider-items slider-width-col4 products-grid block-content">
              <div className="jtv-top-categories"> <a href="#">
                <figure> <img src="../assets/images/products/product-fashion-1.jpg" alt="Clothing" />
                  <figcaption>
                    <h3>Clothing</h3>
                    <span>22 Products</span> </figcaption>
                </figure>
                </a> </div>
              <div className="jtv-top-categories"> <a href="#">
                <figure> <img src="../assets/images/products/product-fashion-1.jpg" alt="Shoes" />
                  <figcaption>
                    <h3>Shoes</h3>
                    <span>15 Products</span> </figcaption>
                </figure>
                </a> </div>
              <div className="jtv-top-categories"> <a href="#">
                <figure> <img src="../assets/images/products/product-fashion-1.jpg" alt="Handbags" />
                  <figcaption>
                    <h3>Handbags</h3>
                    <span>10 Products</span> </figcaption>
                </figure>
                </a> </div>
              <div className="jtv-top-categories"> <a href="#">
                <figure> <img src="../assets/images/products/product-fashion-1.jpg" alt="Jewelry" />
                  <figcaption>
                    <h3>Jewelry</h3>
                    <span>16 Products</span> </figcaption>
                </figure>
                </a> </div>
              <div className="jtv-top-categories"> <a href="#">
                <figure> <img src="../assets/images/products/product-fashion-1.jpg" alt="Watches" />
                  <figcaption>
                    <h3>Watches</h3>
                    <span>25 Products</span> </figcaption>
                </figure>
                </a> </div>
              <div className="jtv-top-categories"> <a href="#">
                <figure> <img src="../assets/images/products/product-fashion-1.jpg" alt="Sunglasses" />
                  <figcaption>
                    <h3>Sunglasses</h3>
                    <span>8 Products</span> </figcaption>
                </figure>
                </a> </div>
              <div className="jtv-top-categories"> <a href="#">
                <figure> <img src="../assets/images/products/product-fashion-1.jpg" alt="Accessories" />
                  <figcaption>
                    <h3>Accessories</h3>
                    <span>30 Products</span> </figcaption>
                </figure>
                </a> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <div className="content-page">
    <div className="container"> 
      <div className="category-product">
        <div className="navbar nav-menu">
          <div className="navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a data-toggle="tab" href="#tab-1">New Arrivals</a></li>
              <li><a data-toggle="tab" href="#tab-2">On Sale</a></li>
              <li><a data-toggle="tab" href="#tab-3">Best Rated</a></li>
            </ul>
          </div>
        
          
        </div>
        <div className="tab-container"> 
         
          <div className="tab-panel active" id="tab-1">
            <div className="category-products">
              <ul className="products-grid">
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$155.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$99.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$99.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="tab-panel" id="tab-2">
            <div className="category-products">
              <ul className="products-grid">
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$155.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$99.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$155.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-panel" id="tab-3">
            <div className="category-products">
              <ul className="products-grid">
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$155.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$225.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$99.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item col-lg-3 col-md-3 col-sm-6 col-xs-6">
                  <div className="item-inner">
                    <div className="item-img">
                      <div className="item-img-info"><img className="img-responsive" alt="Product Title Here" src="../assets/images/products/product-fashion-1.jpg" /><a href="single_product.html" className="product-link"> </a>
                        <div className="product-actions"> <a href="shopping_cart.html"><i className="fa fa-cart-plus"></i><span> Add to cart</span></a><a href="wishlist.html"><i className="fa fa-heart-o"></i><span> Add to Wishlist</span></a> <a href="compare.html" className="add-to-compare"><i className="fa fa-signal"></i><span>Compare</span></a> </div>
                      </div>
                    </div>
                    <div className="item-info">
                      <div className="info-inner">
                        <div className="item-title"> <a title="Product Title Here" href="single_product.html"> Product Title Here </a> </div>
                        <div className="item-content">
                          <div className="rating"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-o"></i> <i className="fa fa-star-o"></i> </div>
                          <div className="item-price">
                            <div className="price-box"> <span className="regular-price"> <span className="price">$155.00</span> </span> </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="jtv-text-top-banner"> <a href="/#" title=""> <img className="img-responsive" src="../assets/images/banner-img6.jpg" alt="" /> <span className="jtv-b-content top-center"> <span className="title"><span className="black-text">Men's</span><br />
          <small>New Arrivals</small></span> </span></a></div>
      </div>
      <div className="col-sm-4">
        <div className="jtv-text-top-banner"> <a href="/#" title=""> <img className="img-responsive" src="../assets/images/banner-img7.jpg" alt="" /> <span className="jtv-b-content middle-center"> <span className="strong-title">25% OFF</span> </span> <span className="jtv-b-content bottom-center"> <span className="text-left"> <span className="media-body text-right"><span className="subtitle skincolor">Imagination<br />  
          is a gift</span></span> </span> </span> <span className="jtv-b-price-box"> <span className="banner-text-wrapper"> <span className="jtv-b-price-text">From</span> <span className="jtv-b-price">$129</span> </span> </span></a></div>
      </div>
      <div className="col-sm-4">
        <div className="jtv-text-top-banner"> <a href="/#" title=""> <img className="img-responsive" src="../assets/images/banner-img8.jpg" alt="" /> <span className="jtv-b-content top-center"> <span className="title"><span className="black-text">Women's</span><br />
          <small>What You Love</small></span> </span></a></div>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="row">
      <div className="col-sm-12 col-xs-12">
        <div className="blog-outer-container">
          <div className="block-title">
            <h2>Most Recent Blog</h2>
          </div>
          <div className="blog-inner">
            <div className="col-sm-4 col-xs-12">
              <div className="entry-thumb"> <a href="blog_single_post.html"> <img className="img-responsive" alt="Blog" src="../assets/images/blog-img1.jpg" /> </a> </div>
              <div className="blog-preview_info">
                <h3><a href="blog_single_post.html">Winter Morning Fabulous</a></h3>
                <ul className="post-meta">
                  <li><i className="fa fa-user"></i><a href="#">admin</a></li>
                  <li><i className="fa fa-comments"></i><a href="#">12 comments</a></li>
                  <li><i className="fa fa-calendar"></i>2017-02-25</li>
                </ul>
                <div className="blog-preview_desc">In adipiscing leo magna, a vehicula mi convallis ac. Vivamus volutpat, ante nec congue dictum.</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="entry-thumb"> <a href="blog_single_post.html"> <img className="img-responsive" alt="Blog" src="../assets/images/blog-img1.jpg" /> </a> </div>
              <div className="blog-preview_info">
                <h3><a href="blog_single_post.html">Perfect for promoting</a></h3>
                <ul className="post-meta">
                  <li><i className="fa fa-user"></i><a href="#">admin</a></li>
                  <li><i className="fa fa-comments"></i><a href="#">45 comments</a></li>
                  <li><i className="fa fa-calendar"></i>2018-04-05</li>
                </ul>
                <div className="blog-preview_desc">Nam a dolor dictum, dapibus libero eu, malesuada nulla. Aliquam convallis vulputate.</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12">
              <div className="entry-thumb"> <a href="blog_single_post.html"> <img className="img-responsive" alt="Blog" src="../assets/images/blog-img1.jpg" /> </a> </div>
              <div className="blog-preview_info">
                <h3><a href="blog_single_post.html">Winter Morning Fabulous</a></h3>
                <ul className="post-meta">
                  <li><i className="fa fa-user"></i><a href="#">admin</a></li>
                  <li><i className="fa fa-comments"></i><a href="#">15 comments</a></li>
                  <li><i className="fa fa-calendar"></i>2018-02-28</li>
                </ul>
                <div className="blog-preview_desc">In adipiscing leo magna, a vehicula mi convallis ac. Vivamus volutpat, ante nec congue dictum.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  <footer>
    <div className="footer-inner">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-xs-12 col-md-3">
            <div className="footer-links">
              <h4>Useful links</h4>
              <ul className="links">
                <li><a href="#" title="Product Recall">Product Recall</a></li>
                <li><a href="#" title="Gift Vouchers">Gift Vouchers</a></li>
                <li><a href="#" title="Returns &amp; Exchange">Returns &amp; Exchange</a></li>
                <li><a href="#" title="Shipping Options">Shipping Options</a></li>
                <li><a href="#" title="Help &amp; FAQs">Help &amp; FAQs</a></li>
                <li><a href="#" title="Order history">Order history</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 col-md-3">
            <div className="footer-links">
              <h4>Service</h4>
              <ul className="links">
                <li><a href="account_page.html">Account</a></li>
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="shopping_cart.html">Shopping Cart</a></li>
                <li><a href="#">Return Policy</a></li>
                <li><a href="#">Special</a></li>
                <li><a href="#">Lookbook</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12 col-md-2">
            <div className="footer-links">
              <h4>Information</h4>
              <ul className="links">
                <li><a href="sitemap.html">Sites Map </a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Trends</a></li>
                <li><a href="about_us.html">About Us</a></li>
                <li><a href="contact_us.html">Contact Us</a></li>
                <li><a href="#">My Orders</a></li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4">
            <div className="footer-links">
              <div className="footer-newsletter">
                <h4>Subscribe to our news</h4>
                <form id="newsletter-validate-detail" method="post" action="#">
                  <div className="newsletter-inner">
                    <p>Subscribe to be the first to know about Sales, Events, and Exclusive Offers!</p>
                    <input className="newsletter-email" name='Email' placeholder='Enter Your Email'/>
                    <button className="button subscribe" type="submit" title="Subscribe">Subscribe</button>
                  </div>
                </form>
              </div>
              <div className="social">
                <ul className="inline-mode">
                  <li className="social-network fb"><a title="Connect us on Facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="social-network googleplus"><a title="Connect us on Google+" href="#"><i className="fa fa-google-plus"></i></a></li>
                  <li className="social-network tw"><a title="Connect us on Twitter" href="#"><i className="icon-social-twitter icons"></i></a></li>
                  <li className="social-network linkedin"><a title="Connect us on Linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                  <li className="social-network rss"><a title="Connect us on rss" href="#"><i className="fa fa-rss"></i></a></li>
                  <li className="social-network instagram"><a title="Connect us on Instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <address>
          <p> <i className="pe-7s-map-marker"></i>Company, 12/34 - West 21st Street, New York, USA </p>
          <p><i className="pe-7s-call"></i><span>+ (800) 0123 456 789</span> </p>
          <p> <i className="pe-7s-mail-open"></i><span><a href="mailto:email@domain.com">support@example.com</a></span></p>
          </address>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 col-md-6 col-xs-12 coppyright">Copyright © 2018 <a href="#"> Fabulous </a>. All Rights Reserved. </div>
          <div className="col-sm-5 col-md-6 col-xs-12 payment-accept">
            <ul>
              <li><a href="#"><img className="img-responsive" src="../assets/images/payment-1.png" alt="Payment Card" /></a></li>
              <li><a href="#"><img className="img-responsive" src="../assets/images/payment-2.png" alt="Payment Card" /></a></li>
              <li><a href="#"><img className="img-responsive" src="../assets/images/payment-3.png" alt="Payment Card" /></a></li>
              <li><a href="#"><img className="img-responsive" src="../assets/images/payment-4.png" alt="Payment Card" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>


</div>
  );
}

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Home() {
    const siteData = {
        brandName : "Coffee House",
        menus : [
            { path : "/" , component:<Home/>,  title : "Home"},
            { path : "/about" , component:<Home/>,  title : "About"},
            { path : "/products" , component:<Home/>,  title : "Product"},
            { path : "/contact" , component:<Home/>,  title : "Contact"},
        ]
    };
  return (
    <>
      {/* Header */}
      <Header data={siteData}/>
      {/* Banner */}
      {/* Search */}
      {/* Latest Products */}
      {/* Top Rated Products */}
      {/* Footer */}
      <Footer/>
    </>
  )
}

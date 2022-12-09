import React from 'react'
import ProductCard from '../assets/scss/components/ProductCard'



const ProductGridSection = ({title, products}) => {


  return (
<section className="product-grid">
    <h1>{title}</h1> 
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {
                products.map(product => <ProductCard key={product.id} product={product} />)
              }
            </div>
        </div>
    </section>
  )
}


export default ProductGridSection
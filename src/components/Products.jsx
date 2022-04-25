import React from 'react'

const Products = (props) => {
  const { imgUrl, name, price } = props
  return (
    <div className="menuItem">
      <img className="menu_image" src={imgUrl} alt={name} />
      <div className="item_desc">
        <span className="Menu_name">{name}</span>
        <span className="Menu_price">{price}</span>
      </div>
    </div>
  )
}
export default Products;
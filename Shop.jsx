import React,{useState} from 'react';
import { PRODUCTS } from './Products';
import DataProduct from './DataProduct';
import './Shop.css';

const Shop = () => {
  const [search,setSearch]=useState('');
  return (
    <div className='shop'>
      <div className='search'>
        <input type='text' placeholder='Search Your products' vlaue={search} name='search' onChange={(e)=>setSearch(e.target.value)} />
      </div>
    
      <div className="products">
    
        {PRODUCTS.filter(product=>product.ProductName.toLowerCase().includes(search.toLowerCase()))
        .map((product) => (
          <DataProduct key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
import React, { Component } from 'react'
import './App.css';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
    render() {
        return (
            
                <table>
                <thead>
                    <tr>
                         <th>Name</th>
                         <th>Price</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                {
                    this.props.filteredProducts.map((product,idx) => 
                     <ProductRow name={product.name} price ={product.price} key = {idx} />
                    )
                }
                
                </tbody>
                </table>
        )
    }
}

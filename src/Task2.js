import React, { Component } from 'react';
import './App.css';

class Products extends Component{
  constructor(props) {
        super(props);
        this.state = {
            products: [
              {name: 'Milk', price: 300, keyl:1, isC: false, isCol: false},
              {name: 'Bread', price: 100,keyl:2, isC: false, isCol: false },
              {name: 'Ice-cream', price:150,keyl:3, isC:false, isCol: false},
              {name: 'Candy', price:200,keyl:4, isC: false, isCol: false}
            ],
            sum:0,
        }
    }
    handleItemClicked = (item) =>{

      if(this.state.products.filter(x => x.keyl === item)[0].isC){
        const vl = this.state.products.filter(x => x.keyl===item)[0].price;
        console.log(vl);
        const sum = this.state.sum - vl;
        var pCopy = this.state.products;
        pCopy.filter(x => x.keyl===item)[0].isC = false;
        pCopy.filter(x => x.keyl===item)[0].isCol = false;
        this.setState({
          products:pCopy,
          sum:sum
        });
      }else{
        const vl = this.state.products.filter(x => x.keyl==item)[0].price;
        const sum = this.state.sum + vl;
        console.log(sum);
        var pCopy = this.state.products;

        pCopy.filter(x => x.keyl===item)[0].isC = true;
        pCopy.filter(x => x.keyl===item)[0].isCol = true;

        this.setState({
          products:pCopy,
          sum:sum
        });
      }
    }
    createItem = (item) => {
      if(item.isCol===true){
        return <li class = 'item-col' onClick = {this.handleItemClicked.bind(null,item.keyl)}>{item.name} {item.price}</li>
      }else{
        return <li class = 'item' onClick = {this.handleItemClicked.bind(null,item.keyl)}>{item.name} {item.price}</li>
      }
    }
  render(){
    const productList = this.state.products.map(this.createItem);
    return (
      <div>
        <p class = 'product'>Products</p>
        <div class = 'products-body'>
          <ul>{productList}</ul>
        </div>
        <p class = 'product'>Total {this.state.sum}</p>
      </div>
    );
  }
}
export default Products;

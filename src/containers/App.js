import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';

class App extends Component{

    constructor(){
        super();
        this.state = {
            products: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
            .then(resp => resp.json())
            .then(products => {this.setState({products: products})} )
    }

    onSearchEvent = (event) => {
        this.setState({ searchField: event.target.value });
    } 

    render(){

        const {products, searchField} = this.state;
        const filteredProducts = products.filter(product =>{
            return product.title.toLowerCase().includes(searchField.toLowerCase());
          })

        return (
        <div className="app_container">
            <h1>Small Shop With React</h1>
            <SearchBox searchChange={this.onSearchEvent} />
            <CardList products={filteredProducts} />
        </div>
        );
    }

}

export default App;
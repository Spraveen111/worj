import React, { Component } from "react";
//import axios from "axios";
import './index.css'
class Card extends Component {
 state = {
    newDetails: {},
    error: null,
 };

 componentDidMount() {
    this.getProps();
 }

 getProps = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const l = parseInt(id);
  

    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      const foundItem = data.products.find((each) => {
        return each.id === l;
      });

      if (foundItem) {
        this.setState({ newDetails: foundItem, error: null });
      } else {
        this.setState({ error: "Item not found" });
      }
    } catch (error) {
      this.setState({ error: "Failed to fetch data" });
    }
 };

 render() {
    const { newDetails, error } = this.state;

    if (error) {
      return <div>Error: {error}</div>;
    }
const b=newDetails.thumbnail
console.log(b)
    return (
      <div className="mainContainer">
      <div className="card">
        <img src={b} alt={newDetails.id} className="i"/>
        <div>
          <p>Back</p>
          <p className="or">ORIANZ</p>
        <h1>{newDetails.title}</h1>
       
        <p>Price: {newDetails.price}</p>
        <p className="des">{newDetails.description}</p>
        <button type='button' className="button1">BUY NOW</button>
        </div>
      </div>
      </div>
    );
 }
}

export default Card;
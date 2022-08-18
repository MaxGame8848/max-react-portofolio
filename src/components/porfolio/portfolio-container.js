import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
      super();
  
      this.state = {
        pageTitle: "Welcome to my portfolio",
        isLoading: false,
        data: [
          { title: "Quip", category: "eCommerce", slug: "Quip"},
          { title: "Eventbrite", category: "Scheduling", slug: "Eventbrite" },
          { title: "Ministry Safe", category: "Enterprise", slug: "Ministry-Safe" },
          { title: "SwingAway", category: "eCommerce", slug: "SwingAway" }
        ]
      };
      this.getPortfolioItems = this.getPortfolioItems.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
    }
  
    handleFilter(filter) {
      this.setState({
        data: this.state.data.filter(item => {
          return item.category === filter;
        })
      });
    }
  
    portfolioItems() {
      return this.state.data.map(item => {
        return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
      });
    }
    getPortfolioItems(){
      axios.get('https://maxbenea.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
    }
  
    render() {
        if (this.state.isLoading){
            return <div>Loading ...</div>
        }
        this.getPortfolioItems();
      return (
        <div>
          <h2>{this.state.pageTitle}</h2>
  
          <button onClick={() => this.handleFilter("eCommerce")}>
            eCommerce
          </button>
          <button onClick={() => this.handleFilter("Scheduling")}>
            Scheduling
          </button>
          <button onClick={() => this.handleFilter("Enterprise")}>
            Enterprise
          </button>
  
          {this.portfolioItems()}
        </div>
      );
    }
  }
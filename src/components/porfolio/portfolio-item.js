import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class PortfolioItems extends Component{
    constructor(props){
        super(props);
        this.state = {
            portfolioItemClass: ""
        }
    }
    handleEnter () {
        this.setState({portfolioItemClass: "item-blur"})
    }
    handleLeave () {
        this.setState({portfolioItemClass: ""})        
    }
    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item
        return (
            <div className="portfolio-item-wrapper"
            onMouseEnter={() => this.handleEnter()}
            onMouseLeave={() => this.handleLeave()}            
            >
                <div className={"portfolio-img-background " + this.state.portfolioItemClass}
                style={{
                    backgroundImage: 'url(' + thumb_image_url + ')'
                }}
                />
                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url}/>
                    </div>
                    <div className="subtitle">
                        {description}
                    </div>
                </div>
                
                {/* < Link to={`/portfolio/${id}`}>Link</ Link> */}
            </div>
        );
    }
}
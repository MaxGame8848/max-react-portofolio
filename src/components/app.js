import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import PortfolioContainer from './porfolio/portfolio-container';
import NavigationContainer from './navigation/navigation-container';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import PortfolioDetails from './porfolio/portfolio-details';
import Auth from './pages/auth';
import NoMatch from './pages/no-match';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
  }

  handleSuccessfulLogin () {

  }
  render() {
    return (
      <div className='container'>
        
        <Router >
        <div>        
          <NavigationContainer />

          <Switch>
            <Route exact path ="/" component={Home} />
            <Route path ="/auth" component={Auth} />
            <Route path ="/about-me" component={About} />
            <Route path ="/contact" component={Contact} />
            <Route path ="/my-blog" component={Blog} />
            <Route exact path ="/portfolio/:slug" component={PortfolioDetails} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}

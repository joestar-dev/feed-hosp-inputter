import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom'

import Header from './components/Header';
import Inputter from './components/Inputter';
import Feed from './components/Feed';
import FeedDetail from './components/FeedDetail';
import Promo from './components/Promo';
import BadRequest from './components/BadRequest'


class Routes extends Component {
  render() {
    const subtitle = 'information';
    return(
      <div>
        <Header 
          subtitle={subtitle}
        />
        <Switch>
        <Route exact={true} path='/' component={Inputter}/>
        <Route exact={true} path='/feed' component={Feed}/>
        <Route path='/feed/:id' component={FeedDetail}/>
        <Route path='/promo' component={Promo}/>
        {<Route component={Inputter}/>}
        </Switch>
      </div>
    );
  }
}

export default Routes;
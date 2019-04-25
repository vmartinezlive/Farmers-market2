import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import DisplayProduce from './DisplayProduce';
import DisplaySchedule from './DisplaySchedule';
import NewLocationControl from './NewLocationControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Moment from 'moment';

library.add(faStroopwafel);

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      marketSchedule: [
      ]
    };
    this.handleAddingNewLocationForm = this.handleAddingNewLocationForm.bind(this);

  }
  handleAddingNewLocationForm(newLocation){
    let newMarketSchedule = this.state.marketSchedule.slice();
    newMarketSchedule.push(newLocation);
    this.setState({marketSchedule: newMarketSchedule});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateLocationElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateLocationElapsedWaitTime() {
    console.log('check');
    let newMarketSchedule = this.state.marketSchedule.slice();
    newMarketSchedule.forEach((location) =>
    location.formattedWaitTime = (location.timeOpen).fromNow(true)
  );
    this.setState({marketSchedule: newMarketSchedule});
  }

    handleAddingNewLocationForm(newLocation){
    var newMarketSchedule = this.state.marketSchedule.slice();
    newMarketSchedule.formattedWaitTime = (newLocation.timeOpen).fromNow(true)
    newMarketSchedule.push(newLocation);
    this.setState({marketSchedule: newMarketSchedule});
  }

  render(){
    return (
      <div className="content-wrap">
        <style jsx global>{`
        body {
          position: relative;photo1
          min-height: 95vh;
          background-color: black;
          margin: 0;
          padding: 0;
          color: #FFF;
        }
        //footer stick to the bottom values//
        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2rem;            /* Footer height */
        }
        .content-wrap {
          padding-bottom: 2rem;    /* Footer height */
        }
        `}</style>
        <Header/>

        <Switch>
          <Route exact path ='/' render={()=><Body marketSchedule={this.state.marketSchedule}/>}/>
          <Route exact path ='/displayproduce' component={DisplayProduce} />
          <Route path = '/newlocation' render={()=><NewLocationControl onAddingNewLocationForm={this.handleAddingNewLocationForm} />}/>
          <Route component={Error404}/>
        </Switch>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;

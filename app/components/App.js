import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router';
import AptList from './AptList';
import _ from 'lodash';
import SearchAppointments from './SearchAppointments';

import AddAppointment from './AddApointment'

class MainInterface extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      myAppointments: [],
      aptBodyVisible: false,
      orderDir: 'asc',
      orderBy: 'perName'
    };


  }

  componentDidMount() {
    this.serverRequest = $.get('./data.json', (result) => {
      var tempApts = result;

      this.setState({
        myAppointments : tempApts
      });
    });
  }

  componentWillUnMount(){
    this.serverRequest.abort();
  }

  deleteMessage(item){

    var allApts = this.state.myAppointments;
    var newApts = _.without(allApts, item);
    this.setState({
      myAppointments: newApts
    })
  }
  toggleAddDisplay(){
    var tempVisibility = !this.state.aptBodyVisible;

    this.setState({
      aptBodyVisible: tempVisibility
    })
  }

  addItem(tempItem){
    var tempApts = this.state.myAppointments;
    tempApts.push(tempItem);
    this.setState({
      myAppointments: tempApts
    })
  }

  render() {
    var filteredApts = this.state.myAppointments;
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;

    filteredApts = _.orderBy(filteredApts, (item) => {
      console.log(item);
      return item[orderBy].toLowerCase();
    }, orderDir);

    filteredApts = filteredApts.map((item, index) => {
      return (
        <AptList
          key={index}
          singleItem={item}
          whichItem={item}
          onDelete = {this.deleteMessage.bind(this)} />
      )
    });



    return(
      <div className="ui container">

        <h1>
         somethign :D
        </h1>

        <ul>
          {filteredApts}
        </ul>

        <AddAppointment
          bodyVisible={this.state.aptBodyVisible}
          handleToggle = {this.toggleAddDisplay.bind(this)}
          addApt = {this.addItem.bind(this)}
          />

        <SearchAppointments
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
         />
      </div>
    )
  }
}



module.exports = MainInterface;

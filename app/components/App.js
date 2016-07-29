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
      orderBy: 'perName',
      queryText: ''
    };


  }

  orderList(name){
    this.setState({
      orderBy: name
    })
  }

  orderDirection(name){
    this.setState({
      orderDir:name
    })
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

  searchApts(q){
    this.setState({
      queryText:q
    })
  }

  render() {
    var filteredApts = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var queryText = this.state.queryText;

    var myAppointments = this.state.myAppointments;

    myAppointments.forEach((item) =>{
      if(
        (item.perName.toLowerCase().indexOf(queryText) != -1)||
        (item.ownerName.toLowerCase().indexOf(queryText) != -1)||
        (item.appDate.toLowerCase().indexOf(queryText) != -1)||
        (item.appNotes.toLowerCase().indexOf(queryText) != -1)
      ){
        filteredApts.push(item);
      }
    })

    filteredApts = _.orderBy(filteredApts, (item) => {
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
    })





    return(
      <div className="ui container">

        <h1>
         Testing :D
        </h1>

        <AddAppointment
          bodyVisible={this.state.aptBodyVisible}
          handleToggle = {this.toggleAddDisplay.bind(this)}
          addApt = {this.addItem.bind(this)}
          />

        <SearchAppointments
          orderBy={this.state.orderBy}
          orderDir={this.state.orderDir}
          handleOrder={this.orderList.bind(this)}
          handleDirection={this.orderDirection.bind(this)}
          onSearch={this.searchApts.bind(this)}
         />

         <table className="ui selectable celled table">
           <thead>
             <tr>
               <th>Name</th>
               <th>Owner Name</th>
               <th>App Date</th>
               <th>Notes</th>
               <th></th>
             </tr>
           </thead>
           <tbody>
            {filteredApts}
           </tbody>
          </table>
      </div>
    )
  }
}



module.exports = MainInterface;

import React from 'react';

class SearchAppointments extends React.Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <select>
          <option>Pet name</option>
          <option>Date</option>
          <option>Owner</option>
        </select>
        <select>
          <option>Asc</option>
          <option>Desc</option>
        </select>
      </div>
    )
  }

}

module.exports = SearchAppointments;

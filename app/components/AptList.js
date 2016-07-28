import React from 'react';

class AptList extends React.Component{

  handleDelete(){

    this.props.onDelete(this.props.whichItem)
  }
  render (){
    return(
      <li>
        {this.props.singleItem.perName}
        <button onClick={this.handleDelete.bind(this)}>delete</button>
      </li>
    )

  }
}

module.exports = AptList

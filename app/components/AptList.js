import React from 'react';

class AptList extends React.Component{

  handleDelete(){

    this.props.onDelete(this.props.whichItem)
  }
  render (){
    return(
        <tr>
          <td>{this.props.singleItem.perName}</td>
          <td>{this.props.singleItem.ownerName}</td>
          <td>{this.props.singleItem.appDate}</td>
          <td>{this.props.singleItem.appNotes}</td>
          <td>
            <button
              onClick={this.handleDelete.bind(this)}
              className="ui red button"
              >delete</button>
          </td>
        </tr>

    )

  }
}

module.exports = AptList

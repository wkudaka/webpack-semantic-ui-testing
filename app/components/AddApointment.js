import React from 'react';

class AddAppointment extends React.Component {
  constructor(props){
    super(props)
  }

  toggleAptDisplay(){
    this.props.handleToggle();
  }

  handleAdd(e){
    var tempItem = {
      perName: this.refs.petname.value,
      ownerName:this.refs.petowner.value,
      appDate:this.refs.date.value + ' ' + this.refs.time.value,
      appNotes: this.refs.time.value
    }

    e.preventDefault();

    this.props.addApt(tempItem);
  }

  render(){

    var displayAptBody = {
      display:this.props.bodyVisible ? 'block': 'none'
    };
    return(
      <div>
        <span onClick={this.toggleAptDisplay.bind(this)}>show</span>
        <form className="ui form" style={displayAptBody} onSubmit={this.handleAdd.bind(this)}>
          <h4 className="ui dividing header">Shipping Information</h4>
          <div className="field">
            <label>Pet Name</label>
            <div className="field">
              <input type="text" name="petname" ref="petname" placeholder="Pet name" />
            </div>
          </div>

          <div className="field">
            <label>Pet owner</label>
            <div className="field">
              <input type="text" name="petowner" ref="petowner" placeholder="Pet owner" />
            </div>
          </div>

          <div className="field">
            <label>Date</label>
            <div className="field">
              <input type="date" name="date" ref="date" placeholder="Date" />
            </div>
          </div>

          <div className="field">
            <label>Time</label>
            <div className="field">
              <input type="time" name="time" ref="time" placeholder="Time" />
            </div>
          </div>

          <div className="field">
            <label>Appointment Notes</label>
            <div className="field">
              <textarea placeholder="Appointment Notes" ref="aptnotes"></textarea>
            </div>
          </div>

          <div className="field">
            <label>Appointment Notes</label>
            <div className="field">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}


module.exports = AddAppointment;

import React from 'react';

class SearchAppointments extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    $('.ui.dropdown').dropdown({
      onChange: (val, text, $choice) =>{
        this.orderStrategy($choice,val);
      }
    });
  }
  orderStrategy($choice,val){

    var type = $choice.parent().data('type');

    switch (type) {
      case 'filterAtt':
        return this.orderList(val);
      case 'orderAtt':
        return this.orderDirection(val);
      default:
        return;
    }

  }

  orderList(val){
    this.props.handleOrder(val);
  }

  orderDirection(val){
    this.props.handleDirection(val);
  }

  handleSearch(e){
    this.props.onSearch(e.target.value);
  }

  render(){
    return(
      <div>

        <div className="container search-container ui margin clearfix">
          <div className="ui right aligned category search pull-left">
            <div className="ui icon input">
              <input className="prompt" type="text" placeholder="Search" onChange={this.handleSearch.bind(this)} />
              <i className="search icon"></i>
            </div>

          </div>

          <div className="ui selection dropdown pull-left">
            <input type="hidden" name="filter" />
            <i className="dropdown icon"></i>
            <div className="default text">Pet Name</div>
            <div className="menu" data-type="filterAtt">
              <div className="item" data-value="perName">Pet Name</div>
              <div className="item" data-value="appDate">Date</div>
              <div className="item" data-value="ownerName">Owner Name</div>
            </div>
          </div>

          <div className="ui selection dropdown pull-left">
            <input type="hidden" name="Asc" />
            <i className="dropdown icon"></i>
            <div className="default text">Asc</div>
            <div className="menu" data-type="orderAtt">
              <div className="item" data-value="asc">Asc</div>
              <div className="item" data-value="desc">Desc</div>
            </div>
          </div>
        </div>


      </div>
    )
  }

}

module.exports = SearchAppointments;

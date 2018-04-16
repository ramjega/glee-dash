var React = require("react");
var actions = require("../actions/SchoolActions");
var createReactClass = require('create-react-class');
module.exports=createReactClass({
    deleteSchool: function(e){
        e.preventDefault();
        actions.deleteSchool(this.props.info);
    },
    render:function(){
        return(
        <div><br/><br/><br/>
            <div className="panel infobox panel-primary">
                <div className="panel-heading">
                    {this.props.info.firstName} {this.props.info.lastName}
                    <div className="pull-right ">Car id: {this.props.info.carId}</div>

                </div>

                <div className="panel-body">First name: {this.props.info.firstName}</div>
                <div className="panel-body">Last name: {this.props.info.lastName}</div>
                <div className="panel-body">Email adress: {this.props.info.email}</div>
                <div className="panel-body">NIC number: {this.props.info.nicNumber}</div>
                <div className="panel-body">Home address: {this.props.info.address}</div>
                <div className="panel-body">Phone number: {this.props.info.phoneNumber}</div>
                <div className="panel-body">Pick up date: {this.props.info.pickupDate}</div>
                <div className="panel-body">Pickup time: {this.props.info.pickTime}</div>
                <div className="panel-body">Pickup time: {this.props.info.pickLocation}</div>
                <div className="panel-body">Driver option: {this.props.info.driver}</div>
                <div className="panel-body">Drop date: {this.props.info.dropDate}</div>
                <div className="panel-body">Drop location: {this.props.info.dropLocation}
                <button className="btn btn-danger pull-right delete-button" onClick={this.deleteSchool}><span class='glyphicon glyphicon-trash'></span> Delete</button>
                </div>


            </div>
            </div>
        )
    }
})

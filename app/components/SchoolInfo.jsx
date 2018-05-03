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
        <div>
        <table id="customers">
        <tr>
        <th>Car id</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th>Nic/Passport</th>
        <th>Address</th>
        <th>Phone number</th>
        <th>Pick up date</th>
        <th>Pick up time</th>
        <th>Pick up location</th>
        <th>Driver</th>
        <th>Drop off date</th>
        <th>Drop off location</th>
        <th>Delete order</th>


        </tr>
        <tr>
        <td>{this.props.info.carId}</td>
        <td>{this.props.info.firstName}</td>
        <td>{this.props.info.lastName}</td>
        <td>{this.props.info.email}</td>
        <td>{this.props.info.nicNumber}</td>
        <td>{this.props.info.address}</td>
        <td>{this.props.info.phoneNumber}</td>
        <td>{this.props.info.pickupDate}</td>
        <td>{this.props.info.pickTime}</td>
        <td>{this.props.info.pickLocation}</td>
        <td>{this.props.info.driver}</td>
        <td>dropDate</td>
        <td>dropLocation</td>
        <td>  <button className="btn btn-danger pull-right delete-button" onClick={this.deleteSchool}><span class='glyphicon glyphicon-trash'></span> Delete</button></td>
        </tr>

        </table>
        </div>
        )
    }
})

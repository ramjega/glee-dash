var React = require("react");
var actions = require("../actions/SchoolActions");
var createReactClass = require('create-react-class');

module.exports=createReactClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:"",
          age:""
      }
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
        <div>



            <form className="" onSubmit={this.addSchool}>

            <div className="panel-heading"><h2>Add mannual car orders</h2></div>

                <div className="form-group">
                    <label className="control-label" htmlFor="firstName">First name</label><br/>
                    <input type="text" className="pass" id="name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">

                    <input type="text" className="email" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="First name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="email">Email address</label>
                    <input type="email" className="form-control email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="nicNumber">NIC number</label>
                    <input type="text" className="form-control" id="nicNumber" name="nicNumber" value={this.state.nicNumber} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="addSchoolress">Home address</label>
                    <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="phoneNumber">Phone number</label>
                    <input type="text"  className="form-control" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="carId">Car id</label>
                    <input type="text"  className="form-control" id="carId" name="carId" value={this.state.carId} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="pickupDate">Pickup date</label>
                    <input type="date" className="form-control" id="pickupDate" name="pickupDate" value={this.state.pickupDate} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="pickTime">Pickup time</label>
                    <input type="time" className="form-control" id="pickTime" name="pickTime" value={this.state.pickTime} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="pickLocation">Pickup location</label>
                    <input type="text" className="form-control" id="pickLocation" name="pickLocation" value={this.state.pickLocation} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="driver">Driver optiion</label>
                    <input type="text" className="form-control" id="driver" name="driver" value={this.state.driver} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="dropDate">Drop date</label>
                    <input type="date" className="form-control" id="dropDate" name="dropDate" value={this.state.dropDate} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="dropLocation">Drop location</label>
                    <input type="text" className="form-control" id="dropLocation" name="dropLocation" value={this.state.dropLocation} onChange={this.handleInputChange} placeholder="" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary button" type="submit"><span class="glyphicon glyphicon-plus"></span> <strong>Add car order</strong></button>
                </div>
            </form>

            </div>


        )
    }
})

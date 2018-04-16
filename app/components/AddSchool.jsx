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
        <div><br/>

        <div className="link-modal" idName="linkmodal">
        <a href="#show">Click to book manually </a></div>


            <form className="modalbox" id="show" onSubmit={this.addSchool}>
             <a class="close pull-right" href="#">X</a>

            <div className="panel-heading"><h2>Add manual car orders</h2></div>

                <div className="form-group">

                    <input type="text" className="email" id="name" name="firstName" value={this.state.firstName} onChange={this.handleInputChange} placeholder="First name" />
                </div>
                <div className="form-group">

                    <input type="text" className="email" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleInputChange} placeholder="Last name" />
                </div>
                <div className="form-group">

                    <input type="email" className="email"  id="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Email address" />
                </div>
                <div className="form-group">

                    <input type="text"className="email" id="nicNumber" name="nicNumber" value={this.state.nicNumber} onChange={this.handleInputChange} placeholder="Nic number" />
                </div>
                <div className="form-group">

                    <input type="text" className="email" id="address" name="address" value={this.state.address} onChange={this.handleInputChange} placeholder="Address" />
                </div>
                <div className="form-group">

                    <input type="text"  className="email" id="phoneNumber" name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleInputChange} placeholder="Phone number" />
                </div>
                <div className="form-group">

                    <input type="text"  className="email" id="carId" name="carId" value={this.state.carId} onChange={this.handleInputChange} placeholder="Car id" />
                </div>
                <div className="form-group">

                    <input type="date" className="email" id="pickupDate" name="pickupDate" value={this.state.pickupDate} onChange={this.handleInputChange} placeholder="Pickup date" />
                </div>
                <div className="form-group">

                    <input type="time" className="email" id="pickTime" name="pickTime" value={this.state.pickTime} onChange={this.handleInputChange} placeholder="Pickup time" />
                </div>
                <div className="form-group">

                    <input type="text" className="email" id="pickLocation" name="pickLocation" value={this.state.pickLocation} onChange={this.handleInputChange} placeholder="Pickup location" />
                </div>
                <div className="form-group">

                    <input type="text" className="email" id="driver" name="driver" value={this.state.driver} onChange={this.handleInputChange} placeholder="Driver option" />
                </div>
                <div className="form-group">

                    <input type="date" className="email" id="dropDate" name="dropDate" value={this.state.dropDate} onChange={this.handleInputChange} placeholder="Dro pdate" />
                </div>
                <div className="form-group">

                    <input type="text"className="email" id="dropLocation" name="dropLocation" value={this.state.dropLocation} onChange={this.handleInputChange} placeholder="Drop location" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary button" type="submit"><span class="glyphicon glyphicon-plus"></span> <strong>Add car order</strong></button>
                </div>
            </form>

            </div>


        )
    }
})

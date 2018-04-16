var mongoose = require("mongoose");
var schoolSchema = mongoose.Schema({
  firstName:{type:String},
  lastName:{type:String},
  email:{type:String},
  nicNumber:{type:String},
  address:{type:String},
  phoneNumber:{type:Number},
  carId:{type:String},
  pickupDate: {type:Date},
  pickTime:{type:String},
  pickLocation:{type:String},
  driver: {type:String},
  dropDate: {type:Date},
  dropLocation:{type:String}
});

module.exports = mongoose.model("book", schoolSchema);

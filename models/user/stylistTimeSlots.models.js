const mongoose=require('mongoose');
const StylistSlotSchema=mongoose.Schema({
	user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'signups'},
	week_id:{type: mongoose.Schema.Types.ObjectId, ref: 'stylistweeks'},
	weekday:{type:String},
	status:{type:String},
	from:{type:String},
	to:{type:String},
	created_at:{type:Date, default:Date.now},
	updated_at:{type:Date, default:Date.now}
})

module.exports=mongoose.model('stylistTimeSlots',StylistSlotSchema);
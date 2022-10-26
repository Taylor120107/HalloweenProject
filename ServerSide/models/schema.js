const mongoose = require ("mongoose");
const halloweenSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    Movie:{ 
        type:String,
        require:true},
    ScareFactor: {
        type: Number,
        min: 1,
        max:10,
        require: true
    },
});

const halloweenModel = mongoose.model("halloween", halloweenSchema);
module.exports={halloweenModel}

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
        require: true
    }
});

const nameModel = mongoose.model("name", halloweenSchema);
module.exports={nameModel}

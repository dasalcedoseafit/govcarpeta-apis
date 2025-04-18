const mongoose = require("mongoose");
var CounterSchema = Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var counterModel = mongoose.model('counterModel', CounterSchema);

var entitySchema = mongoose.Schema({
    testvalue: {type: String}
});

entitySchema.pre('save', function(next) {
    var doc = this;
    counterModel.findByIdAndUpdate({_id: 'entityId'}, {$inc: { seq: 1} }, function(error, counter)   {
        if(error)
            return next(error);
        doc.testvalue = counter.seq;
        next();
    });
});
{ collection: "counters" }
module.exports= counterModel;
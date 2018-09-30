var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// let uri = process.env.MONGOLAB_URI || 'mongodb://lin:chjmdan410@ds255262.mlab.com:55262/edu';
// mongoose.connect(uri);

var schema = new Schema ({
    imagePath: {type: String, require: true},
    title: {type: String, require: true},
    description: {type: String, require: true},
    language: {type: String, require: true},
    videoLink: {type: String, require: true},
    message: [{
        timeStart: {type: String},
        timeEnd: {type: String},
        mess: {type: String,  require: true}
    }]
});

module.exports = mongoose.model('Movie', schema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StudentSchema = new Schema({
    StudentFirstName: {
        type: String,
    },
    collegeName: {
        type: String,
    },
    location: {
        type: String,
        
    }
});


const Student = mongoose.model('student',StudentSchema);

module.exports = Student;
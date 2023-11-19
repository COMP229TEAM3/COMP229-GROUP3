// require modules for the Survey Model
let mongoose = require('mongoose');

let Survey = mongoose.Schema
    (
        {
            name:
            {
                type: String,
                default: "",
                trim: true,
                required: 'name for survey is required'
            },
            description:
            {
                type: String,
                default: "",
                trim: true,
                required: 'description is required'
            },
            dueDate:
            {
                type: Date
            },
            created:
            {
                type: Date,
                default: Date.now
            },
            updated:
            {
                type: Date,
                default: Date.now

            }
        },
        {
            collection: "surveys"
        }
    );

module.exports = mongoose.model('Survey', Survey);
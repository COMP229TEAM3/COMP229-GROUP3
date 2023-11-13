


// require modules for the Survey Model
let mongoose = require('mongoose');

let SurveyQuestion = mongoose.Schema
(
    {
        questsion:
        {
            type: String,
            default: "",
            trim: true,
            required: 'question is required'
        },
        answers:
        [{
            type: String,
            default: "",
            trim: true,
            required: 'answer is required'
        }]
    }
);

let Survey= mongoose.Schema
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
       questions:
       {
            type: [SurveyQuestion],
            default: undefined,
            required: 'questions are required'
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
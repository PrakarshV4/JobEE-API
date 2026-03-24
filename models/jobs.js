const mongoose = require('mongoose')
const validator = require('validator') // used to validate email or any other inputs
const jobSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter job title."],
        trim: true,
        maxLength: [100, 'Job title can not exceed 100 characters.']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please enter job description.'],
        maxLength: [1000, 'Job title can not exceed 1000 characters.']
    },
    email: {
        type: String,
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    company: {
        type: String,
        required: [true, 'Please enter company name.']
    },
    industry: {
        type: [String], //industry is array of string
        required: true,
        enum:{
            values: ['Business', 'Information Technology', 'Banking', 'Education/Training', 'Telecommunication, Others'],
            message: 'Please select correct options'
        }
    },
    jobType: {
        type: String, //industry is array of string
        required: true,
        enum:{
            values: ['Permanent', 'Temporary', 'Intership'],
            message: 'Please select correct options'
        }
    },
    minEducation: {
        type: String, //industry is array of string
        required: true,
        enum:{
            values: ['Bachelors', 'Masters', 'PHD'],
            message: 'Please select correct options'
        }
    },
    positions: {
        type: Number,
        default: 1
    },
    experience: {
        type: String, //industry is array of string
        required: true,
        enum:{
            values: ['No Experience', '0 - 1 years', '1 - 3 years', '3 - 5 years', '5 years+'],
            message: 'Please select correct options'
        }
    },
    salary: {
        type: Number,
        required: [true, 'Please enter expected salary for this job']
    },
    postingDate: {
        type: Date,
        default: Date.now()
    },
    lastDate: {
        type: Date,
        default: new Date().setDate(new Date().getDate() + 7)
    },
    applicantsApplied: {
        type: [Object],
        select: false //as we don't want to displat this data to user
    }
})

module.exports = mongoose.model('Job', jobSchema)
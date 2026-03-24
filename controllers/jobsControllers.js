const Job = require('../models/jobs')
// Get all jobs => /api/v1/jobs
exports.getJobs = async (req, res, next) => {

    const jobs = await Job.find()
    console.log(jobs)

    res.status(200).json({
        success: true,
        length: jobs.length,
        data: jobs
    })
}

// Create a new Job => /api/v1/job/new
exports.newJob = async (req, res, next) => {
    const job = await Job.create(req.body)
    res.status(200).json({
        sucess: true,
        message: 'Job created',
        data: job
    })
}
const Job = require('../models/jobs')
const geoCoder = require('../utils/geocoder')

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

// Update a job => /api/v1/job/:id
exports.updateJob = async (req, res, next) => {
    let job = await Job.findById(req.params.id);

    if (!job) {
        res.status(404).json({
            success: false,
            message: "Job not found"
        })
    }

    // if job exits then update
    job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        message: "Job is updated",
        data: job
    })
}


//Search jobs in radius => /api/v1/jobs/:zipcode/:distance
exports.getJobsInRadius = async (req, res, next) => {
    const { zipcode, distance } = req.params

    // get lon, lat from geocoder using zipcode
    const loc = await geoCoder.geocode(zipcode);
    console.log(loc[0]);

    const latitude = loc[0].latitude;
    const longitude = loc[0].longitude;
    
    const radius = Number(distance) / 3963; // 3963 is the radius of earth in miles
    console.log(radius)

    const jobs = await Job.find({
        // mongo provides us a way to search in radius
        "location.coordinates": {
            $geoWithin: {
            $centerSphere: [[longitude, latitude], radius]
            }
        }
    })

    res.status(200).json({
        msg: "success",
        results: jobs.length,
        data: jobs
    })
}
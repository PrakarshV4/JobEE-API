
// Get all jobs => /api/v1/jobs

exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success: true,
        requestMethod: req.requestMethod,
        msg: 'This route will display all jobs'
    })
}
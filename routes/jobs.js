const express = require('express')
const router = express.Router();

const { getJobs } = require('../controllers/jobsControllers')
const { newJob } = require('../controllers/jobsControllers')
const { getJobsInRadius } = require('../controllers/jobsControllers')

// GET
router.route('/jobs').get(getJobs)
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius)

// POST
router.route('/job/new').post(newJob)

module.exports = router;
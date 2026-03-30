const express = require('express')
const router = express.Router();

const { getJobs } = require('../controllers/jobsControllers')
const { newJob } = require('../controllers/jobsControllers')
const { getJobsInRadius } = require('../controllers/jobsControllers')
const { updateJob } = require('../controllers/jobsControllers')
const { deleteJob } = require('../controllers/jobsControllers')

// GET
router.route('/jobs').get(getJobs)
router.route('/jobs/:zipcode/:distance').get(getJobsInRadius)

// POST
router.route('/job/new').post(newJob)

// PUT
router.route('/job/:id').put(updateJob)

// DELETE
router.route('/job/:id').delete(deleteJob)

module.exports = router;
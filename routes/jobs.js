const express = require('express')
const router = express.Router();

const { getJobs } = require('../controllers/jobsControllers')
const { newJob } = require('../controllers/jobsControllers')

router.route('/jobs').get(getJobs)
router.route('/job/new').post(newJob)

module.exports = router;
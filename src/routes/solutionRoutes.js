const express = require('express');
const router = express.Router();
const solutionCtrl = require('../controllers/solutionController');

router.post('/', solutionCtrl.createSolution);
router.get('/problem/:problemId', solutionCtrl.getSolutionsByProblem);
router.patch('/:id/status', solutionCtrl.updateSolutionStatus);

module.exports = router;
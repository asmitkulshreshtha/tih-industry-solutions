const express = require('express');
const router = express.Router();
const problemCtrl = require('../controllers/problemController');

router.post('/', problemCtrl.createProblem);
router.get('/', problemCtrl.getAllProblems);
router.get('/:id', problemCtrl.getProblemById);
router.patch('/:id/status', problemCtrl.updateProblemStatus);

module.exports = router;
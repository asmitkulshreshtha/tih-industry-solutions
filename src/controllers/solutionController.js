const { Solution, ProblemStatement } = require('../models');

exports.createSolution = async (req, res) => {
  try {
    const { problemId } = req.body;
    const problem = await ProblemStatement.findByPk(problemId);
    if (!problem) return res.status(404).json({ error: 'Problem not found' });
    const solution = await Solution.create({
      ...req.body,
      problem_statement_id: problemId,
    });
    res.status(201).json(solution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getSolutionsByProblem = async (req, res) => {
  try {
    const solutions = await Solution.findAll({ where: { problem_statement_id: req.params.problemId } });
    res.json(solutions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSolutionStatus = async (req, res) => {
  try {
    const solution = await Solution.findByPk(req.params.id);
    if (!solution) return res.status(404).json({ error: 'Not found' });
    solution.status = req.body.status;
    await solution.save();
    res.json(solution);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
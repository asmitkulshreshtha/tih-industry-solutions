const { ProblemStatement } = require('../models');

exports.createProblem = async (req, res) => {
  try {
    const problem = await ProblemStatement.create(req.body);
    res.status(201).json(problem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProblems = async (req, res) => {
  try {
    const query = {};
    const { domainCategory, status, dateFrom, dateTo } = req.query;
    // Filtering
    if (domainCategory) query.domainCategory = domainCategory;
    if (status) query.status = status;
    if (dateFrom || dateTo) query.createdAt = {};
    if (dateFrom) query.createdAt.$gte = new Date(dateFrom);
    if (dateTo) query.createdAt.$lte = new Date(dateTo);

    const problems = await ProblemStatement.findAll({ where: query, order: [['createdAt', 'DESC']] });
    res.json(problems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProblemById = async (req, res) => {
  try {
    const problem = await ProblemStatement.findByPk(req.params.id, { include: ['solutions'] });
    if (!problem) return res.status(404).json({ error: 'Not found' });
    res.json(problem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProblemStatus = async (req, res) => {
  try {
    const problem = await ProblemStatement.findByPk(req.params.id);
    if (!problem) return res.status(404).json({ error: 'Not found' });
    problem.status = req.body.status;
    await problem.save();
    res.json(problem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
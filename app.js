const express = require('express');
const app = express();
require('dotenv').config();

const { sequelize } = require('./src/models');
const problemRoutes = require('./src/routes/problemRoutes');
const solutionRoutes = require('./src/routes/solutionRoutes');

app.use(express.json());

app.use('/api/problems', problemRoutes);
app.use('/api/solutions', solutionRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('DB sync error:', err));
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'slot',
  'root',
  'Elefante1.',
  {
    host: 'localhost',
    dialect: 'mysql' 
  }
);
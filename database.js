import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'slot',
  'root',
  '12345678.',
  {
    host: 'localhost',
    dialect: 'mysql' 
  }
);
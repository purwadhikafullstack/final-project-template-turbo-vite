import { readdirSync } from 'fs';
import { basename as _basename, join } from 'path';
import Sequelize from 'sequelize';
import config from '../db.config';

const basename = _basename(__filename);
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);

readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach((file) => {
    import(join(__dirname, file)).then((model) => {
      model.init(sequelize);
      db[model.default.name] = model.default;
    });
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

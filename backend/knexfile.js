const { db } = require('./.env')
// Update with your config settings.

module.exports = {
    client: 'postgres',
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};

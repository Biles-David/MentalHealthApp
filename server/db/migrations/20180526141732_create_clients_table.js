exports.up = function(knex, Promise) {
  return knex.schema.createTable("clients", function(table) {
    table.increments("client_id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("method").notNullable();
    table.string("contact").notNullable();
    table
      .string("username")
      .unique()
      .notNullable();
    table.string("password").notNullable();
    table.specificType("favorites", "text[]");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clients");
};

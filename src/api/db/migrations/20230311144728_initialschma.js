exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.text("email").notNullable().unique();
    table.text("passwordHash").notNullable();
    table.text("passwordSalt").notNullable();
    table.text("username").notNullable();
    table.text("adresse").notNullable();
    table.text("telephone");
    table.timestamps(true, true, true);
  });

  await knex.schema.createTable("products", (table) => {
    table.increments("id");
    table.text("name").notNullable().unique();
    table.text("description").notNullable();
    table.integer("prix").notNullable();
    table.timestamps(true, true, true);
  });
  await knex.schema.createTable("paniers", (table) => {
    table.increments("id");
    table.text("name").notNullable().unique();
    table.text("description").notNullable();
    table.integer("prix").notNullable();
    table.integer("userId").notNullable();
    // .references("id")
    // .inTable("users")
    // .onDelete("CASCADE");
    table.timestamps(true, true, true);
  });

  // await knex.schema.createTable("comments", (table) => {
  //   table.increments("id");
  //   table.text("content").notNullable();
  //   table.timestamps(true, true, true);
  //   table
  //     .integer("userId")
  //     .notNullable()
  //     .references("id")
  //     .inTable("users")
  //     .onDelete("CASCADE");
  //   table
  //     .integer("nounouId")
  //     .notNullable()
  //     .references("id")
  //     .inTable("nounous")
  //     .onDelete("CASCADE");
  // });
  //   await knex.schema.createTable("services", (table) => {
  //     table.increments("id");
  //     table.text("service").notNullable();
  //     table.timestamps(true, true, true);
  //     table
  //       .integer("nounouId")
  //       .notNullable()
  //       .references("id")
  //       .inTable("nounous")
  //       .onDelete("CASCADE");
  //   });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("services");
  await knex.schema.dropTable("products");
  await knex.schema.dropTable("paniers");
};

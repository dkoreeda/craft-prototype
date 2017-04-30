DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;

  CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL UNIQUE,
    password_digest VARCHAR NOT NULL
  );

  CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    start_time VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    region_name VARCHAR NOT NULL,
    postal_code INTEGER NOT NULL,
    country_name VARCHAR NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL
  );

    CREATE TABLE beers(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    short_name VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    image VARCHAR NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL
  );

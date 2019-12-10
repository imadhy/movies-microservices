CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    country VARCHAR(100),
    created_at DATE,
    birthday DATE,
    gender VARCHAR(100),
    admin BOOLEAN
);

CREATE TABLE favorites
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    media_id INTEGER
);
CREATE TABLE comments
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    media_id INTEGER,
    created_at DATE,
    updated_at DATE,
    rating INTEGER,
    comment VARCHAR(255)
);
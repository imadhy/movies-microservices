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

INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('valentin', 'guibert', 'valentin@superdeveloper.com', 'France', '2019-12-10', '1998-05-12', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('loïc', 'bouchain', 'loïc@ferarepasser.fr', 'France', '2019-12-10', '1999-09-04', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('olivier', 'crochet', 'oliver@sinnoh.fr', 'France', '2019-11-02', '1998-09-04', 'homosapiens', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('adrien', 'vauchard', 'adrien@vauchard.fr', 'Afrance', '2019-02-04', '2002-10-05', 'undefined', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('marcéau', 'david', 'marcéau@david-david.fr', 'Arabie Saoudite', '2019-01-22', '2002-10-05', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('bigeard', 'bigg', 'bigerald@robinfalse.gouv', 'La montagne', '2019-15-04', '1998-04-09', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('geoffrey', 'sisi', 'sisi@sisi.fr', 'Summoner rift', '2019-12-10', '1997-01-01', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('elouan', 'lafrechoux', 'elouan@rammstein.de', 'hellfest', '2019-12-10', '2007-10-24', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('antonin', 'joulie', 'antonin@joulie.com', 'twitter', '2019-07-07', '1999-05-15', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('leo', 'rigaudeau', 'leo@crusader.fr', 'boupere', '2019-07-07', '1998-09-13', 'male', false);
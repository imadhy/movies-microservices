CREATE ROLE admin WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'admin';

INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('valentin', 'guibert', 'valentin@superdeveloper.com', 'France', '2019-12-10', '1998-05-12', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('loïc', 'bouchain', 'loïc@ferarepasser.fr', 'France', '2019-12-10', '1999-09-04', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('olivier', 'crochet', 'oliver@sinnoh.fr', 'France', '2019-11-02', '1998-09-04', 'homosapiens', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('adrien', 'vauchard', 'adrien@vauchard.fr', 'Afrance', '2019-02-04', '2002-10-05', 'undefined', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('marcéau', 'david', 'marcéau@david-david.fr', 'Algérie', '2019-01-22', '2002-10-05', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('bigeard', 'bigg', 'bigerald@robinfalse.gouv', 'La montagne', '2019-04-04', '1998-04-09', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('geoffrey', 'sisi', 'sisi@sisi.fr', 'Summoner rift', '2019-12-10', '1997-01-01', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('elouan', 'lafrechoux', 'elouan@rammstein.de', 'hellfest', '2019-12-10', '2007-10-24', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('antonin', 'joulie', 'antonin@joulie.com', 'twitter', '2019-07-07', '1999-05-15', 'male', false);
INSERT INTO users (first_name, last_name, email, country, created_at, birthday, gender, admin) VALUES ('leo', 'rigaudeau', 'leo@crusader.fr', 'boupere', '2019-07-07', '1998-09-13', 'male', false);

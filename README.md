# Domaine 2

Vous êtes sur la branche du domaine 2. Ce domaine traite des données concernant les personnes.

## Équipe

- Antonin JOULIE 👑
- Paul LEREVEREND ⚙️
- Corentin GUILLARD
- Valentin DEZAT

# Installation

`npm install`

`npm start d02`

http://localhost:3333/api/

La base de donnée est pré-configurée. Si vous souhaitez utiliser votre serveur, la configuration se trouve dans `app.module.ts`. La création des tables est automatique.

# Documentation technique

Pour plus de renseignements contacter Paul LEREVEREND : paul.lereverend@ynov.com

Les méthodes en rouge ne sont pas encore fonctionnelles. Cette page sera éditée au fur et à mesure.

## Films

- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) GET - `movie` : retourne l'ensemble des films
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) GET - `movie/{id}` : retourne un film
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) POST - `movie` : ajoute un film
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) PUT - `movie/{id}` : met à jour un film
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) DELETE - `movie/{id}` : supprime un film

- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) GET - `movie/{categoryId}` : retourne les films d'une catégorie
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) GET - `movie/actor/{personId}` : retourne les films d'un acteur
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) GET - `movie/director/{personId}` : retourne les films d'un réalisateur
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) GET - `movie/producer/{personId}` : retourne les films d'un acteur
- ![#f03c15](https://placehold.it/15/f03c15/000000?text=+) GET - `movie/sort/{sortType}` : retourne les films dans un certain ordre

## Personnes

Cette ressource regroupe les réalisateurs, les acteurs et les producteurs.

- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) GET - `person` : retourne l'ensemble des personnes
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) GET - `person/{id}` : retourne une personne
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) POST - `person` : ajoute une personne
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) PUT - `person/{id}` : met à jour une personne
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) DELETE - `person/{id}` : supprime une personne

## Category

- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) GET - `category` : retourne l'ensemble des catégories
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) GET - `category/{id}` : retourne une catégorie
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) POST - `category` : ajoute une catégorie
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) PUT - `category/{id}` : met à jour une catégorie
- ![#c5f015](https://placehold.it/15/c5f015/000000?text=+) DELETE - `category/{id}` : supprime une catégorie

## Exemples d'appels

Note: les identifiants dans les champs "ids" correspondent aux identifiants des catégories et personnes. Ceux-ci sont générés aléatoirement lorsque vous créez ces entités. Ces entités doivent avoir étés préalablement créées. 

POST `http://localhost:3333/api/movie/`
```
{"title": "OSS 117",
"categories": {"ids" : ["102bf961-45c5-4f09-86bb-2ae8e2982756", "202bf961-45c5-4f09-86bb-2ae8e2982756"]},
"directors": {"ids" : ["11b5c654-645a-4435-8bba-7e399b0c7ed7"]},
"actors": {"ids" : ["11b5c654-645a-4435-8bba-7e399b0c7ed7"]},
"producers": {"ids" : ["11b5c654-645a-4435-8bba-7e399b0c7ed7"]}
}
```
PUT `http://localhost:3333/api/movie/6e7be985-d7ff-46ce-9706-4f093cf18ff2`

Pour cet appel, si vous souhaitez modifier les catégories, les acteurs, les producteurs ou les réalisateurs vous devez systématiquement envoyer l'ensemble des identifiants. Si vous souhaitez supprimer tous les acteurs, renvoyez simplement un taleau vide. 
```
{"title": "La soupe aux choux",
"categories": {"ids" : ["102bf961-45c5-4f09-86bb-2ae8e2982756", "202bf961-45c5-4f09-86bb-2ae8e2982756", "302bf961-45c5-4f09-86bb-2ae8e2982756"]},
"producers": {"ids" : []}
}
```

## Modèle de données

![alt text](https://github.com/imadhy/movies-microservices/blob/d02/base/mcd_domaine2.png?raw=true)

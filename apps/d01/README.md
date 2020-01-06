# Domaine 01

Dans ce document vous pourrez trouver toutes les URL requêtables de D01 ainsi qu'un exemple de Response et de Body si besoin est.

A savoir que vous avez uniquement besoin de lancer un serveur postgreSQL, pour les identifiants et mots de passe d'accès au serveur, vous pouvez les modifier dans le fichier `src/app/app.module.ts`. TypeORM s'occupe de créer les différentes tables. Si vous avez besoin de données de tests sans passer par l'API, vous pouvez éxecuter le fichier `src/assets/database/dump.sql` directement sur votre interface pgsql.

Afin de lancer le domaine D01, placer vous à la racine du monorepo et exécuter `npm run start d01`.

## Users

Pour agir sur la table Users, voici les requêtes mises à votre disposition:

- ### GetAll `user/get/all`
  Response :

```
[
  {
    "id": 1,
    "first_name": "valentin",
    "last_name": "guibert",
    "email": "valentin@superdeveloper.com",
    "country": "France",
    "created_at": "2019-12-09T23:00:00.000Z",
    "birthday": "1998-05-11T22:00:00.000Z",
    "gender": "male",
    "admin": false
  },
  {
    "id": 2,
    "first_name": "loïc",
    "last_name": "bouchain",
    "email": "loïc@ferarepasser.fr",
    "country": "France",
    "created_at": "2019-12-09T23:00:00.000Z",
    "birthday": "1999-09-03T22:00:00.000Z",
    "gender": "male",
    "admin": false
  }
]
```

- ### Get By ID `user/get/:id`
  Response :

```
[
  {
    "id": 1,
    "first_name": "valentin",
    "last_name": "guibert",
    "email": "valentin@superdeveloper.com",
    "country": "France",
    "created_at": "2019-12-09T23:00:00.000Z",
    "birthday": "1998-05-11T22:00:00.000Z",
    "gender": "male",
    "admin": false
  }
]
```

- ### Post `user/post`
  Body :

```
[
  {
    "first_name": "henry",
    "last_name": "maisonneuve",
    "email": "henry@superdeveloper.com",
    "country": "France",
    "created_at": "2019-12-09T23:00:00.000Z",
    "birthday": "1998-05-11T22:00:00.000Z",
    "gender": "unknown",
    "admin": false
  }
]
```

Response :

```
{
  "identifiers": [
    {
      "id": 11
    }
  ],
  "generatedMaps": [
    {
      "id": 11
    }
  ],
  "raw": [
    {
      "id": 11
    }
  ]
}
```

- ### Put `user/put/:id`
  Body :

```
{
    "first_name": "ryry",
    "last_name": "lebro",
    "email": "henry@superdeveloper.com",
    "country": "France",
    "birthday": "1998-05-11T22:00:00.000Z",
    "gender": "male"
}
```

Response :

```
{
  "generatedMaps": [],
  "raw": [],
  "affected": 1
}
```

- ### Delete `user/delete/:id`
  Response :
  `200 OK`

## Comments

- ### Get By ID `comment/get/:id`
  Response :

```
[
  {
    "id": 1,
    "mediaId": "1",
    "createdAt": "2019-07-06T22:00:00.000Z",
    "updatedAt": "2019-07-07T22:00:00.000Z",
    "rating": 2,
    "text": "nul.",
    "user": null
  }
]
```

- ### Post `comment/post`
  Body :

```
{
    "mediaId": "52",
    "createdAt": "2019-07-22:00:00.0004",
    "updatedAt": "2019-07-22:00:00.0004",
    "rating": 4,
    "text": "quite good",
    "user": null
 }
```

Response :

```
{
  "identifiers": [
    {
      "id": 2
    }
  ],
  "generatedMaps": [
    {
      "id": 2
    }
  ],
  "raw": [
    {
      "id": 2
    }
  ]
}
```

- ### Put `comment/put/:id`
  Body :

```
{
    "updatedAt": "2019-07-07T22:00:00.1625",
    "rating": 5,
    "text": "excellent"
 }
```

Response :

```
{
  "generatedMaps": [],
  "raw": [],
  "affected": 1
}
```

- ### Delete `comment/delete/:id`
  Response :
  `200 OK`

## Favorites

- ### Get By ID `favorite/get/:id`
  Response :

```
[
  {
    "id": 1,
    "mediaId": "1",
    "user": 1
  }
]
```

- ### Post `favorite/post`
  Body :

```
{
    "mediaId": "48",
    "userId": 8
  }
```

Response :

```
{
  "identifiers": [
    {
      "id": 2
    }
  ],
  "generatedMaps": [
    {
      "id": 2
    }
  ],
  "raw": [
    {
      "id": 2
    }
  ]
}
```

- ### Delete `favorite/delete/:id`
  Response :
  `200 OK`

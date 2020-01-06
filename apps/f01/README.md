# F01

> F01 Service

## Setup

```console

npm start f01

```

## Entities

- `Message`

| Attribute | Type | Description |

| - | - | - |

| message | string | Request information |

| type | string | Message type (Info / Error) |

| status | number | Request status |

- `Favorite`

| Attribute | Type | Description |

| - | - | - |

| user_id | string | User id |

| movie_id | string | Movie id |

- `Comment`

| Attribute | Type | Description |

| - | - | - |

| mediaId | string | Movie id |

| createdAt | Date | creation Date|

| updatedAt | Date | Last Upload Date |

| rating | string | rating |

| text | string | Content of Comment |

| user | string | user id |

## Usage

| Endpoint |

| - |

| <http://localhost:3001/graphql> |

---

### Favorites

#### GraphQL POST `addFavorite`

Example request :

```qraphql

mutation {

addFavorite(input: {

user_id: "shaggy"

movie_id: "1984"

}) {

message

type

status

}

}

```

Example response :

```json
{
  "data": {
    "addFavorite": {
      "message": "Favorite has been successfully added",

      "type": "Info",

      "status": 200
    }
  }
}
```

#### GraphQL POST `getFavoriteByUserId`

Example request :

```qraphql

{

getFavoriteByUserId(user_id: "shaggy") {

id

user_id

movie_id

}

}

```

Example response :

```json
{
  "data": {
    "getFavoriteByUserId": [
      {
        "id": "42c49b34-84b2-43f0-ba46-001437445a61",

        "user_id": "shaggy",

        "movie_id": "1984"
      }
    ]
  }
}
```

#### GraphQL POST `deleteFavorite`

Example request :

```qraphql

mutation {

deleteFavorite(

input: {

user_id: "shaggy"

movie_id: "1984"

}) {

message

type

status

}

}

```

Example response :

```json
{
  "data": {
    "deleteFavorite": {
      "message": "Favorite has been successfully deleted",

      "type": "Info",

      "status": 200
    }
  }
}
```

---

### Comments

#### GraphQL POST `addComment`

Example request :

```qraphql

mutation {

addComment(

input: {

userId:"1",

movieId:"1",

comment:"comment",

rating:4

}){message,type,status}}

```

Example response :

```json
{
  "data": {
    "addComment": {
      "message": "Your comment is successfully add.",

      "type": "Info",

      "status": 201
    }
  }
}
```

#### GraphQL POST `findComment`

findCommentByUserID Not Exist Because D01/GetAllComment Do not exist

Example request :

```qraphql



query {

findComment(

id:"11"

){id}

}

```

Example response :

```json
{
  "data": {
    "findComment": {
      "id": "12"
    }
  }
}
```

#### GraphQL POST `deleteComment`

Example request :

```qraphql

query {

deleteComment(

id:"11"

){message,type,status}

}

```

Example response :

```json
{
  "data": {
    "deleteComment": {
      "message": "Your comment is successfully deleted.",

      "type": "Info",

      "status": 200
    }
  }
}
```

---

### Users

#### GraphQL POST `addUser`

Example request :

```qraphql

mutation {

addUser(

input: {

id:"1",

first_name:"Elouan",

last_name:"lfx",

country:"France",

birthday: "2000-07-07T23:00:00.000Z",

gender: "unknown"

email: "elouan.lafrechoux@ynov.com",

created_at: "2019-12-09T23:00:00.000Z",

admin: false

})
{
    id
    first_name
    last_name
    email
    country
    created_at
    birthday
    gender
    admin
}}

```

Example response :

```json
{
  "data": {
    "addUser": {
      "id": "",
      "first_name": "Elouan",
      "last_name": "lfx",
      "email": "oui",
      "country": "France",
      "created_at": "1575932400000",
      "birthday": "2000-07-07T23:00:00.000Z",
      "gender": "unknown",
      "admin": false
    }
  }
}
```

#### GraphQL POST `getUserByUserId`

Example request :

```qraphql



query {

getUserByUserId(id: "1") {
    id
    first_name
    last_name
    email
    country
    created_at
    birthday
    gender
    admin
  }

}

```

Example response :

```json
{
  "data": {
    "getUserByUserId": [
      {
        "id": "2",
        "first_name": "Robin",
        "last_name": "Bigeard",
        "email": "robin.bigeard@aventu.re",
        "country": "France",
        "created_at": "2019-12-09T23:00:00.000Z",
        "birthday": null,
        "gender": "unknown",
        "admin": false
      }
    ]
  }
}
```

#### GraphQL POST `findAll`

Example request :

```qraphql



query {

{
  users {
    id
    first_name
    last_name
    email
    country
    created_at
    birthday
    gender
    admin
  }
}

}

```

Example response :

```json
{
  "data": {
    "users": [
      {
        "id": "2",
        "first_name": "Robin",
        "last_name": "Bigeard",
        "email": "robin.bigeard@aventu.re",
        "country": "France",
        "created_at": "2019-12-09T23:00:00.000Z",
        "birthday": null,
        "gender": "unknown",
        "admin": false
      },
      {
        "id": "3",
        "first_name": "Samy",
        "last_name": "Vera",
        "email": "samy.vera@ynov.com",
        "country": "France",
        "created_at": "2019-12-09T23:00:00.000Z",
        "birthday": null,
        "gender": "unknown",
        "admin": false
      }
    ]
  }
}
```

#### GraphQL POST `deleteUser`

Example request :

```qraphql

query {
  deleteUser(id: "2") {
    message,
    status,
    type
  }
}

```

Example response :

```json
{
  "data": {
    "deleteUser": {
      "message": "Your account is successfully deleted.",
      "status": 200,
      "type": "Info"
    }
  }
}
```

---

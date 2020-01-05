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
| updatedAt | Date | Last Upload Date  |
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

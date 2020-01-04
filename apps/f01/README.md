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

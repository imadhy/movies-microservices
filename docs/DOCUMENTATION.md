# Documentation

## Infos pratiques
> Port à utiliser : 300x  x = numéro du groupe

**Nomenclature commits :**
`<type>(<portée>):<description>`
ex: feature(rest):added jwt support
Si votre commit nécessite plus d’informations, n’hésitez pas à ajouter un commentaire dessus sur github, ou à utiliser plusieurs messages(-m)
* Pas de console.log
* Pas de commentaires du type: //TODO //FIX
* Pas de majuscules dans les commits

**Nomenclature branches  :**
`<perimetre>/<type de modification>/<modification>`
>  ex: F02/features/comment-section

Quand vous voulez merge votre branche sur une branche principale, faites des Pull Requests et attendez qu’elles soient validées par votre Lead Tech.

Cette PR devra contenir une description de ce que fait votre branche, ainsi qu’une liste des nouveaux endponumbers (entrée/sorties) ajoutés par votre branche. Donnez lui aussi un nom explicite. Avant de créer votre PR, faites un merge (et faites des tests) de la branche ciblée sur votre branche, afin de s’assurer de la bonne numberégration de votre code.

Vous pouvez aussi envoyer une demande de review de votre branche si vous voulez qu’elle soit review plus vite.

Pour les lead techs, si une branche ne vous plait pas, faites des commentaires sur les lignes de codes, ou sur l’ensemble des éléments posant problème.

Si vous avez des besoins, ou des problèmes, n’hésitez pas à créer des issues sur git, afin que les gens puissent en prendre connaissance et review

## DTO

#### D01

**Comment**
```JavaScript
{
  id: number;
  userID number;
  mediaID: number;
  createdAt: Date;
  updatedAt: Date;
  rating: number;
  comment: string;
}
```

**User**
```TypeScript
{
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  createdAt: Date;
  birthDate: Date;
  admin: boolean;
}
```
**Fav**
```TypeScript
{
  id: number;
  userID: number;
  mediaID: number;
}
```

#### D02

**Movie**
```TypeScript
{
  id: number;
  categoryID: number;
  title: string;
  duration: number;
  realisateur: number
  producteur: number
  release: Date;
  synopsis: string;
  createdAt:Date;
  updatedAt: Date;
}
```

**Person**
```TypeScript
{
  id: number;
  name: string;
  age: number;
}
```

**Category**
```TypeScript
{
  id: number;
  nom: string;
}
```
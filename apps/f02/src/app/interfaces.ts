
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Category {
    id: string;
    name?: string;
}

export interface Movie {
    id: string;
    categories?: Category[];
    title?: string;
    duration?: number;
    directors?: Person[];
    producers?: Person[];
    actors?: Person[];
    release?: Date;
    synopsis?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Person {
    id: string;
    name?: string;
    age?: number;
}

export interface IQuery {
    category(id: string): Category | Promise<Category>;
    categories(): Category[] | Promise<Category[]>;
    movie(id: string): Movie | Promise<Movie>;
    movies(): Movie[] | Promise<Movie[]>;
    person(id: string): Person | Promise<Person>;
    persons(): Person[] | Promise<Person[]>;
}

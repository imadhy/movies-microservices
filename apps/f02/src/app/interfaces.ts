
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface CategoryInput {
    name?: string;
}

export interface MovieInput {
    categories?: string[];
    title?: string;
    duration?: number;
    directors?: string[];
    producers?: string[];
    actors?: string[];
    release?: string;
    synopsis?: string;
}

export interface PersonInput {
    name?: string;
    age?: number;
}

export interface Category {
    id: string;
    name?: string;
}

export interface Deleted {
    delete?: boolean;
}

export interface Movie {
    id: string;
    categories?: Category[];
    title?: string;
    duration?: number;
    directors?: Person[];
    producers?: Person[];
    actors?: Person[];
    release?: string;
    synopsis?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IMutation {
    createCategory(category?: CategoryInput): Category | Promise<Category>;
    updateCategory(id: string, category?: CategoryInput): Category | Promise<Category>;
    deleteCategory(id: string): Deleted | Promise<Deleted>;
    createMovie(movie?: MovieInput): Movie | Promise<Movie>;
    updateMovie(id: string, movie?: MovieInput): Movie | Promise<Movie>;
    deleteMovie(id: string): Deleted | Promise<Deleted>;
    createPerson(person?: PersonInput): Person | Promise<Person>;
    updatePerson(id: string, person?: PersonInput): Person | Promise<Person>;
    deletePerson(id: string): Deleted | Promise<Deleted>;
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

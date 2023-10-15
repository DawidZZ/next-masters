/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryGetList {\n  categories {\n    name\n    slug\n  }\n}": types.CategoryGetListDocument,
    "query CategoryGetAllProducts($slug: String) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products {\n      id\n      name\n      description\n      images(first: 4) {\n        url\n      }\n      price\n    }\n  }\n}": types.CategoryGetAllProductsDocument,
    "query CategoryGetProducts($slug: String, $count: Int, $offset: Int) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products(first: $count, skip: $offset) {\n      id\n      name\n      description\n      images(first: 4) {\n        url\n      }\n      price\n    }\n  }\n}": types.CategoryGetProductsDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n    reviews {\n      rating\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($count: Int, $offset: Int) {\n  products(first: $count, skip: $offset) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 4) {\n      url\n    }\n    price\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList {\n  categories {\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetAllProducts($slug: String) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products {\n      id\n      name\n      description\n      images(first: 4) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').CategoryGetAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetProducts($slug: String, $count: Int, $offset: Int) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products(first: $count, skip: $offset) {\n      id\n      name\n      description\n      images(first: 4) {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').CategoryGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n    reviews {\n      rating\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($count: Int, $offset: Int) {\n  products(first: $count, skip: $offset) {\n    id\n    name\n    description\n    categories(first: 1) {\n      name\n    }\n    images(first: 4) {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

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
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}": types.CartRemoveItemDocument,
    "query CategoryGetList {\n  categories {\n    name\n    slug\n  }\n}": types.CategoryGetListDocument,
    "query CategoryGetAllProducts($slug: String) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CategoryGetAllProductsDocument,
    "query CategoryGetProducts($slug: String, $count: Int, $offset: Int) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products(first: $count, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}": types.CategoryGetProductsDocument,
    "query CollectionsGetList {\n  collections {\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query CollectionsGetProducts($slug: String) {\n  collections(where: {slug_contains: $slug}) {\n    name\n    slug\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionsGetProductsDocument,
    "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n    reviews {\n      rating\n    }\n  }\n}": types.ProductGetByIdDocument,
    "query ProductGetRelated($id: ID!) {\n  product(where: {id: $id}) {\n    categories(first: 1) {\n      products(first: 4) {\n        ...ProductListItem\n      }\n    }\n  }\n}": types.ProductGetRelatedDocument,
    "fragment ProductListItem on Product {\n  id\n  description\n  name\n  price\n  images(first: 4) {\n    url\n  }\n  reviews {\n    rating\n  }\n}": types.ProductListItemFragmentDoc,
    "query ProductsGetAll {\n  products {\n    ...ProductListItem\n  }\n}": types.ProductsGetAllDocument,
    "query ProductsGetList($count: Int, $offset: Int) {\n  products(first: $count, skip: $offset) {\n    ...ProductListItem\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetSearched($search: String!) {\n  products(where: {name_contains: $search}) {\n    ...ProductListItem\n  }\n}": types.ProductsGetSearchedDocument,
    "mutation ReviewAdd($productId: ID!, $rating: Int!, $content: String!, $headline: String!, $name: String!, $email: String!) {\n  createReview(\n    data: {rating: $rating, content: $content, headline: $headline, name: $name, email: $email, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}": types.ReviewAddDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $total: Int!) {\n  createOrderItem(\n    data: {quantity: 1, total: $total, order: {connect: {id: $cartId}}, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($quantity: Int!, $itemId: ID!) {\n  updateOrderItem(data: {quantity: $quantity}, where: {id: $itemId}) {\n    quantity\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(data: {total: 0}) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(where: {id: $id}, stage: DRAFT) {\n    id\n    orderItems {\n      id\n      quantity\n      product {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($itemId: ID!) {\n  deleteOrderItem(where: {id: $itemId}) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetList {\n  categories {\n    name\n    slug\n  }\n}"): typeof import('./graphql').CategoryGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetAllProducts($slug: String) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetProducts($slug: String, $count: Int, $offset: Int) {\n  categories(where: {slug_contains: $slug}) {\n    name\n    products(first: $count, skip: $offset) {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetProducts($slug: String) {\n  collections(where: {slug_contains: $slug}) {\n    name\n    slug\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionsGetProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n    reviews {\n      rating\n    }\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetRelated($id: ID!) {\n  product(where: {id: $id}) {\n    categories(first: 1) {\n      products(first: 4) {\n        ...ProductListItem\n      }\n    }\n  }\n}"): typeof import('./graphql').ProductGetRelatedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  description\n  name\n  price\n  images(first: 4) {\n    url\n  }\n  reviews {\n    rating\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetAll {\n  products {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetAllDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($count: Int, $offset: Int) {\n  products(first: $count, skip: $offset) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSearched($search: String!) {\n  products(where: {name_contains: $search}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductsGetSearchedDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewAdd($productId: ID!, $rating: Int!, $content: String!, $headline: String!, $name: String!, $email: String!) {\n  createReview(\n    data: {rating: $rating, content: $content, headline: $headline, name: $name, email: $email, product: {connect: {id: $productId}}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewAddDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

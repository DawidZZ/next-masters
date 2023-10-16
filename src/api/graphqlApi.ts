import { loadEnvConfig } from "@next/env";
import { type TypedDocumentString } from "@/gql/graphql";

loadEnvConfig(process.cwd());

type GraphQLResponse<T> =
  | { data?: undefined; errors: { message: string }[] }
  | { data: T; errors?: undefined };

export const executeGraphql = async <TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  variables: TVariables,
): Promise<TResult> => {
  if (!process.env.GRAPHQL_URL) {
    throw TypeError("GRAPHQL_URL is not defined");
  }

  const res = await fetch(process.env.GRAPHQL_URL, {
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      "Content-Type": "application/json",
      authorization: process.env.HYGRAPH_TOKEN || "",
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};

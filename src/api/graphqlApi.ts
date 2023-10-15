import { type TypedDocumentString } from "@/gql/graphql";

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
      authorization:
        "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTczMTc2NjUsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xucWozejJ0Z3o3ajAxdW03eHJ5MWZhZi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOGRlNGEyMDktYWRiOS00MDJmLTgzMmItMGEzMDQwNzlhNDM2IiwianRpIjoiY2tsdXpicmxwNW9sOTAxeHY3MzI1OHRqZCJ9.0ofuppYhkgb76p51PD9atRh0VYF0TqyctvkbRd8zf8PGdrWeJqewd_uCyCI5MrtMt-vWOCGRdrtheju9nUZXi0qgPjunPBCbQEiDuNTDRXK1jeCyIl9-uSK8dhh0eqlq_T4UUcYjL6otO2ysMPocdvGqu-yC5yT7VqRqS3anxRd1khHC-pQiF50syf7GnAF3W6i7hQLBoldV-jASaD7Q7UDn4Sna2E1vSDKFDppxsOLIO42Cv_dE-8JlrEv_CZggKF1C39KX1JeKrtxzG0jFZtqLWoXNe1J8ez4VafZtsl4C_XcD2BxyHMy9kIX547gFaNdpbmm8j-Xe5r_gYUSAfwSGDy-UuDf1uvrZbTZo7BtoxaXD37ghc4F84KKOP-Rv_NzuMAzVkuHprR_wnqd8Qv_dkgpkevtM_aPiITNgxwXExE61VuqNaRmhbH-55TdxFzIGAJfa7KDL9Ner8L-1g_FAj-uxWZTaCq8Erk5l7ekXuFly3ivmgzEBl8R87ydWCXTuNRQd4F76tmv_PmRC-gS4wb4YswHbFCAOUFVrNM-T6klfv4OMStwIuBYFFk62c-XuQizmfMWvksGwtfcYS9RrYccLGu2gYUY-0rBU9MeRO0c8miVO5F6VBWLV8lnVmUdNzqx8QDKELvTGwyjikus0AJHv9dZOVNjEJjfXMUI",
    },
  });

  const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

  console.dir(graphqlResponse, { depth: 20 });

  if (graphqlResponse.errors) {
    throw TypeError(`GraphQL Error`, {
      cause: graphqlResponse.errors,
    });
  }

  return graphqlResponse.data;
};

import { executeGraphql } from "./graphqlApi";
import { ReviewAddDocument } from "@/gql/graphql";

export const addReview = (productId: string, review: Review) => {
  const { headline, content, rating, name, email } = review;

  const parsedRating = +rating;

  return executeGraphql(ReviewAddDocument, {
    productId,
    headline,
    content,
    rating: parsedRating,
    name,
    email,
  });
};

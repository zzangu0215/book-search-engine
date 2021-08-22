import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      username
      bookCount
      savedBooks {
        _id
        authors
        title
        description
        image
      }
    }
  }
`;

import { gql } from '@apollo/client';

export const UsersQuery = gql`
  query ($location: String!) {
    search(query: $location, type: USER, first: 20) {
      userCount
      edges {
        cursor
        node {
          ... on User {
            id
            login
            name
            avatarUrl
            repositories {
              totalCount
            }
            starredRepositories {
            totalCount
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

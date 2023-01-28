import { gql } from 'apollo-angular';

export const GET_CHARACTERS = gql`
    query characters($page: Int!) {
        characters(page : $page) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              image
              location {
                id
                name
              }
              episode {
                id
                episode
              }
            }
        }
    }
`;

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
                name
              }
            }
        }
    }
`;

export const GET_CHARACTER = gql`
    query getCharacter($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const GET_LOCATIONS = gql`
query getLocations($page : Int!) {
  {
    locations(page: 1) {
      info{
        pages
        next
      }
      results{
        id
        name
        dimension
        residents{
          name
          image
          location {
            name
          }
        }
      }
    }
  }
}
`;

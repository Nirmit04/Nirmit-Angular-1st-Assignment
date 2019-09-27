import gql from 'graphql-tag';

class Queries {
    public fetchAllUsers =`
    query allUsers {
      allUsers {
        id
        email
        name
      }
    }      
    `
}

export default Queries;
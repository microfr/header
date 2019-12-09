const {gql} = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        firstName: String!
        lastName: String!
    }

    type Asset {
        src: String!
    }

    type Query {
        viewer: User
        asset(namespace: String!): Asset
    }
`
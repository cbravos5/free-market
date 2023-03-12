import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type Business {
        name: String!
        location: Point!
        products: [Product!]! @relationship(type: "OWNS", direction: OUT)
        distributors: [Distributor!]! @relationship(type: "ROUTE", direction: OUT)
    }

    type Product {
        name: String!
        price: Float!
        businesses: [Business!]! @relationship(type: "OWNS", direction: IN)
        users: [User!]! @relationship(type: "BUYS", direction: IN)
    }

    type User {
        name: String!
        location: Point!
        purchases: [Product!]! @relationship(type: "BUYS", direction: OUT)
        distributors: [Distributor!]! @relationship(type: "ROUTE", direction: IN)
    }

    type Distributor {
        name: String!
        location: Point!
        businesses: [Business!]! @relationship(type: "ROUTE", direction: IN)
        deliversToDistributor: [Distributor!]! @relationship(type: "ROUTE", direction: IN)
        distributorsDeliversTo: [Distributor!]! @relationship(type: "ROUTE", direction: OUT)
        users: [User!]! @relationship(type: "ROUTE", direction: OUT)
    }
`;

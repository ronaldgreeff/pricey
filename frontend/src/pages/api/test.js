// API routes provide a straightforward solution to build your API with Next.js.
//
// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page. They are server-side only bundles and won't increase your client-side bundle size.
//
// For example, the following API route pages/api/user.js handles a json response:
//
// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ name: 'John Doe' }))
// }
// For an API route to work, you need to export as default a function (a.k.a request handler), which then receives the following parameters:
//
// req: An instance of http.IncomingMessage, plus some pre-built middlewares you can see here
// res: An instance of http.ServerResponse, plus some helper functions you can see here
// To handle different HTTP methods in an API route, you can use req.method in your request handler, like so:
//
// export default (req, res) => {
//   if (req.method === 'POST') {
//     // Process a POST request
//   } else {
//     // Handle any other HTTP method
//   }
// }

export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}

// https://github.com/vercel/next.js/blob/canary/examples/api-routes-graphql/pages/api/graphql.js

// -- index.js
//
// import useSWR from 'swr'
//
// const fetcher = (query) =>
//   fetch('/api/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//     },
//     body: JSON.stringify({ query }),
//   })
//     .then((res) => res.json())
//     .then((json) => json.data)
//
// export default function Index() {
//   const { data, error } = useSWR('{ users { name } }', fetcher)
//
//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
//
//   const { users } = data
//
//   return (
//     <div>
//       {users.map((user, i) => (
//         <div key={i}>{user.name}</div>
//       ))}
//     </div>
//   )
// }

// -- graphql
//
// import { ApolloServer, gql } from 'apollo-server-micro'
//
// const typeDefs = gql`
//   type Query {
//     users: [User!]!
//   }
//   type User {
//     name: String
//   }
// `
//
// const resolvers = {
//   Query: {
//     users(parent, args, context) {
//       return [{ name: 'Nextjs' }]
//     },
//   },
// }
//
// const apolloServer = new ApolloServer({ typeDefs, resolvers })
//
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }
//
// export default apolloServer.createHandler({ path: '/api/graphql' })

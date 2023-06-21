# Opdefi Fullstack Assessment

## Motivation

We are building a DeFi middleware at Opdefi to create a seamless trading experience for institutional traders, which involves aggregating information from multiple external APIs and making frequent calls to our internal database. Hence, being able to make good trade-offs between scalability, performance and cost effectiveness is critical to building a good product.

Familiarity with the following frameworks/libraries are assumed:

- Next.js
- React
- Typescript
- Node fetch/axios
- Postgres
- ORM framework - Prisma, Sequelize, Mongoose etc
- tRPC (optional)

The use of ChatGPT to accelerate implementation is encouraged. GPT however has limited knowledge of tRPC.

## Task

For this assessment, we are building a monitoring dashboard to track user balances. Here are a few key aspects of the project:

- Next.js is used as the framework for serving client and server of our frontend
- We use tRPC to define our server-side endpoints for typesafety (prior knowledge of tRPC not expected)
  - `getUser({id})` returns a User object for a given id
  - `setGlobalName({id, name})` sets the name of the User on server-side database. For simplicity, we do not check client's admin privilege
- The exact user balances can be accessed through an external API, however each external call has an overhead of ~1s, so caching is necessary
  - access the external APi by calling `https://assessment-server-production.up.railway.app/api/trpc/user.getUser?id=${id}&key=${key}`, using your email as key and assume id to take values between [1,100]
  
Submit your work by forking this repo and sharing link to it.

### Rubric

- Our dashboard client expects the following functionalities
  - Add user to the Balances table to be monitored (user ids are selected from a populated dropdown)
    - Client can provide a `name` to monitored user by selecting row and inputting name
  - Remove user from the Balances table by clicking on a '-' icon on the row
- Client expects to have minimal wait time (i.e. user balances should be cached somehow instead of being fetched on-the-fly)
- Monitored user balances can be stale by at most 30s
- Total number of external calls in a session is tracked using performance monitoring tool, this number should be as low as possible to reduce "cost"
- Clear explanation of trade-offs made

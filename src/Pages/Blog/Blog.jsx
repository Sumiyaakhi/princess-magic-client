import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('blogs')
  return (
    <div className="mx-32">
      <h1 className="text-3xl font-serif font-bold">
        {" "}
        Question-1: What is an access token and refresh token? How do they work
        and where should we store them on the client-side?
      </h1>
      <p>
        <span className="text-xl font-bold"> Ans:</span> An access token and a
        refresh token are both components of an authentication mechanism used
        for security and authorization purposes. Here is an overview of what they
        are, how they work, and where they should be stored on the client-side:{" "}
        <br />
        <span className="text-xl font-bold">Access Token:</span> <br />
        An access token is a credential that is issued by an authentication
        server after a user successfully logs in or authenticates. It is a
        short-lived token with a limited lifespan, typically ranging from a few
        minutes to a few hours. The access token is used to authorize and grant
        access to protected resources or APIs on behalf of the authenticated
        user. It contains information such as the user's identity, permissions,
        and expiration time. <br />
        <span className="text-xl font-bold"> Refresh Token:</span> <br />A
        refresh token is a long-lived token that is also issued by the
        authentication server during the authentication process. Unlike the
        access token, the refresh token is not sent with every API request.
        Instead, it is used to obtain a new access token when the current one
        expires. The refresh token is securely stored on the client-side and
        sent to the authentication server to request a new access token without
        requiring the user to re-enter their credentials. It is important to
        note that refresh tokens have a longer lifespan and can be revoked or
        invalidated by the authentication server. <br />
        <span className="text-xl font-bold">How they work together:</span>{" "}
        <br /> When a user logs in or authenticates, the authentication server
        generates and returns both an access token and a refresh token. The
        access token is then included in the header of each API request to
        authenticate and authorize access to protected resources. Once the
        access token expires, the client can use the refresh token to request a
        new access token without requiring the user to log in again. The
        authentication server validates the refresh token and issues a new
        access token, which can be used for subsequent API requests. <br />{" "}
        <span className="text-xl font-bold">
          {" "}
          <br /> Where to store them on the client-side: <br />{" "}
        </span>{" "}
        Storing access tokens and refresh tokens securely on the client-side is
        crucial to prevent unauthorized access. Here are some common storage
        options: Access Tokens: Access tokens are typically stored in memory or
        local storage (e.g., localStorage in web browsers or AsyncStorage in
        React Native). Storing the access token in memory provides better
        security as it is not susceptible to cross-site scripting (XSS) attacks.
        However, if stored in local storage, proper precautions should be taken
        to prevent XSS attacks. Refresh Tokens: Refresh tokens should be stored
        in a more secure manner, such as in an HTTP-only cookie or in secure
        storage mechanisms provided by the operating system or device, such as
        Keychain on iOS or KeyStore on Android. This helps mitigate the risk of
        the refresh token being accessed by malicious scripts or exposed in case
        of XSS attacks.
      </p>
      <h1 className="text-3xl font-serif font-bold">
        {" "}
        Question-2: Compare SQL and NoSQL databases?
      </h1>
      <h1 className="text-xl font-bold">Ans: </h1> <br />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
              <td>Non-relational or distributed database system.</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>These databases have fixed or static or predefined schema</td>
              <td>They have a dynamic schema</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>
                These databases are not suited for hierarchical data storage.
              </td>
              <td>
                These databases are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr>
              <th>4</th>
              <td>These databases are best suited for complex queries</td>
              <td>These databases are not so good for complex queries</td>
            </tr>
            <tr>
              <th>5</th>
              <td>Vertically Scalable</td>
              <td>Horizontally scalable</td>
            </tr>
            <tr>
              <th>6</th>
              <td>Follows ACID property</td>
              <td>
                Follows CAP(consistency, availability, partition tolerance)
              </td>
            </tr>
            <tr>
              <th>7</th>
              <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</td>
              <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h1 className="text-3xl font-serif font-bold">
        {" "}
        Question-3:What is express js? What is Nest JS?
      </h1>
      <h1 className="text-3xl font-serif font-bold">
        Ans: <br /> Express JS:{" "}
      </h1>
      <p>
        Express.js is the most popular web framework for Node.js. It is designed
        for building web applications and APIs and has been called the de facto
        standard server framework for Node.js. Building a backend from-scratch
        for an application in Node.js can be tedious and time consuming. From
        setting up ports to route handlers, writing all of the boilerplate code
        takes away from what really matters, which is writing the business logic
        for an application. By using web frameworks like Express.js, developers
        can save time and focus on other important tasks.
      </p>
      <h1 className="text-3xl font-serif font-bold">Node JS:</h1>
      <p>
        Node.js is a platform built on Chrome's JavaScript runtime for easily
        building fast and scalable network applications. Node.js uses an
        event-driven, non-blocking I/O model that makes it lightweight and
        efficient, perfect for data-intensive real-time applications that run
        across distributed devices
      </p>
      <h1 className="text-3xl font-serif font-bold">
        Question-4: What is MongoDB aggregate and how does it work ? <br /> Ans:{" "}
      </h1>
      <p>
        Aggregation is a way of processing a large number of documents in a
        collection by means of passing them through different stages. The stages
        make up what is known as a pipeline. The stages in a pipeline can
        filter, sort, group, reshape and modify documents that pass through the
        pipeline. One of the most common use cases of Aggregation is to
        calculate aggregate values for groups of documents. This is similar to
        the basic aggregation available in SQL with the GROUP BY clause and
        COUNT, SUM and AVG functions. MongoDB Aggregation goes further though
        and can also perform relational-like joins, reshape documents, create
        new and update existing collections, and so on. While there are other
        methods of obtaining aggregate data in MongoDB, the aggregation
        framework is the recommended approach for most work.
      </p>
    </div>
  );
};

export default Blog;

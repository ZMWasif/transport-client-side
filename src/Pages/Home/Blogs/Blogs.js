import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-white accordion-header">
            Difference between javascript and nodejs
          </Accordion.Header>
          <Accordion.Body className="text-white accordion-body">
            JavaScript is a scripting programming language that is lightweight,
            interpreted, and cross-platform, primarily used for client-side
            scripting within Java and HTML. Conversely, Node.js is a server-side
            scripting language based on the Google Chrome V8 engine, making it
            ideal for building network-centric applications. Node.js is a
            distributed system suitable for data-intensive real-time
            applications. JavaScript is a straightforward programming language
            that can run on any browser supporting the JavaScript Engine.
            Node.js, on the other hand, is an environment or interpreter for the
            JavaScript programming language, which requires libraries accessible
            from JavaScript to enhance its functionality. JavaScript can run on
            any engine, such as Firefox's Spider Monkey, Safari's JavaScript
            Core, and V8 (Google Chrome), making it simple to create and run
            JavaScript code in any environment that supports a browser. On the
            other hand, Node.js only supports the V8 engine, which is exclusive
            to Google Chrome. Nonetheless, JavaScript code can be run in any
            environment, regardless of whether it supports the V8 engine.
            JavaScript has basic objects that are OS-specific, such as ActiveX
            Control, which is only available on Windows. In contrast, Node.js
            allows for non-blocking tasks unique to the operating system to be
            executed from any JavaScript programming, without any OS-specific
            constants. Node.js has excellent support for binding with the file
            system, allowing developers to read and write to disk. JavaScript is
            usually used for client-side operations, such as business
            validation, dynamic page display, or Ajax calls, while Node.js is
            used for non-blocking accessibility or execution of any operating
            system. Non-blocking operations on an OS involve generating or
            executing a shell script, retrieving unique hardware-related
            information in a single call, obtaining installed certificate
            details in the system, or performing a large number of specified
            tasks. JavaScript's main advantages are its wide range of
            interfaces, interactivity, and ability to provide just the right
            amount of server contact and direct input to visitors. In contrast,
            Node.js boasts a node package manager with over 500 modules, the
            ability to handle concurrent requests, support for micro-service
            architecture, and IoT capabilities.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            When should you use nodejs and when should you use mongodb?
          </Accordion.Header>
          <Accordion.Body className="text-white accordion-body">
            MongoDB is commonly used with Node.js for several reasons,
            including: 1. JSON-based data model: MongoDB's document-based data
            model is similar to JSON, which is used by Node.js. This similarity
            makes MongoDB an excellent choice to work with Node.js. 2.
            Scalability: MongoDB is designed to be scalable, which is a crucial
            feature for Node.js applications that need to handle high levels of
            scalability and availability. 3. Flexibility: MongoDB offers a
            schema-less design and flexible data modeling, which makes it easier
            to work with changing data structures in Node.js applications. 4.
            Performance: MongoDB is optimized for high read and write
            performance, which can help boost the speed of Node.js applications.
            5. Community support: Both MongoDB and Node.js have large and active
            communities, which can provide developers with resources and support
            when working with these technologies. By combining MongoDB and
            Node.js, developers can create powerful and flexible applications
            that are scalable, high-performing, and adaptable to evolving data
            structures.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Differences between sql and nosql databases
          </Accordion.Header>
          <Accordion.Body className="text-white accordion-body">
            SQL databases define and manipulate data-based structured query
            language (SQL). Seeing from a side this language is extremely
            powerful. SQL is one of the most versatile and widely-used options
            available which makes it a safe choice, especially for great complex
            queries. But from another side, it can be restrictive. SQL requires
            you to use predefined schemas to determine the structure of your
            data before you work with it. Also, all of your data must follow the
            same structure. This can require significant up-front preparation
            which means that a change in the structure would be both difficult
            and disruptive to your whole system. A NoSQL database has a dynamic
            schema for unstructured data. Data is stored in many ways which
            means it can be document-oriented, column-oriented, graph-based, or
            organized as a key-value store. This flexibility means that
            documents can be created without having a defined structure first.
            Also, each document can have its own unique structure. The syntax
            varies from database to database, and you can add fields as you go.
            In almost all situations SQL databases are vertically scalable. This
            means that you can increase the load on a single server by
            increasing things like RAM, CPU, or SSD. But on the other hand,
            NoSQL databases are horizontally scalable. This means that you
            handle more traffic by sharding, or adding more servers in your
            NoSQL database. It is similar to adding more floors to the same
            building versus adding more buildings to the neighborhood. Thus
            NoSQL can ultimately become larger and more powerful, making these
            databases the preferred choice for large or ever-changing data sets.
            SQL databases are table-based on the other hand NoSQL databases are
            either key-value pairs, document-based, graph databases, or
            wide-column stores. This makes relational SQL databases a better
            option for applications that require multi-row transactions such as
            an accounting system or for legacy systems that were built for a
            relational structure. SQL databases follow ACID properties
            (Atomicity, Consistency, Isolation, and Durability) whereas the
            NoSQL database follows the Brewers CAP theorem (Consistency,
            Availability, and Partition tolerance). Great support is available
            for all SQL databases from their vendors. Also, a lot of independent
            consultants are there who can help you with SQL databases for very
            large-scale deployments but for some NoSQL databases you still have
            to rely on community support and only limited outside experts are
            available for setting up and deploying your large-scale NoSQL
            deploy.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is the purpose of jwt and how does it work?
          </Accordion.Header>
          <Accordion.Body className="text-white accordion-body">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted. A JWT is a string made up of three parts,
            separated by dots (.), and serialized using base64. In the most
            common serialization format, compact serialization, the JWT looks
            something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get
            two JSON strings: The header and the payload. The signature. The
            JOSE (JSON Object Signing and Encryption) header contains the type
            of token — JWT in this case — and the signing algorithm. The payload
            contains the claims. This is displayed as a JSON string, usually
            containing no more than a dozen fields to keep the JWT compact. This
            information is typically used by the server to verify that the user
            has permission to perform the action they are requesting. There are
            no mandatory claims for a JWT, but overlaying standards may make
            claims mandatory. For example, when using JWT as bearer access token
            under OAuth2.0, iss, sub, aud, and exp must be present. some are
            more common than others. The signature ensures that the token hasn’t
            been altered. The party that creates the JWT signs the header and
            payload with a secret that is known to both the issuer and receiver,
            or with a private key known only to the sender. When the token is
            used, the receiving party verifies that the header and payload match
            the signature.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;

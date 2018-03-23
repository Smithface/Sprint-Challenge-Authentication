<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
  * In express, middleware functions have access to the request and response objects. They can make changes to these objects, execute code, end the request-resonse cycle, and/or call the next middleware function in the stack.
  * Sessions in express act as a place to store data that can be accessed across requests. Each user per browser has a unique session. Generally, session data is stored in application memory, in a cookie, in a memory cache, or in a database.
  * Bcrypt is a hashing function that can be used as middleware for express to encrypt sensitive/private information.
  * JWT stands for JSON Web Token. They are used for securely transmitting information between parties as a JSON object, and they rely on a digital signature for verification. JWTs are generally used for authorization.

1.  What does bcrypt do in order to prevent attacks?
  * Bcrypt adds a salt to what it is given, thus securing even short passwords. Also, it has the ability to influence the output hash based on input, so it can adjust as needed. As computation becomes faster and faster, bcrypt will remain useful because the input can go as high as needed to remain secure from brute force attacks.

1.  What are the three parts of the JSON Web Token?
  * The three parts of the JWT are the header, the payload, and the signature. The header consists of the type of token (JWT) and hashing algorithm the token uses. The payload contains the general information that is being passed. This is called a "claim", which can be registered, public, or private. The signature consists of the encoded header and payload, and a signed secret string, all using the algorithm specified in the header.

require('dotenv').config({ path: '.env' });
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const createServer = require('./createServer');
const db = require('./db');


const server = createServer();

// Use express middlware to handle cookies (JWT)
server.express.use(cookieParser());

// TODO Use express middlware to populate current user
server.express.use((req, res, next) => {
  console.log('cookies', req.cookies);
  if (req.cookies) {
    const { token } = req.cookies;
    console.log('cookies', req.cookies, token);
    if (token) {      
      const { userId } = jwt.verify(token, process.env.APP_SECRET);
      console.log('user id', userId);
      req.userId = userId; 
    }
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http:/localhost:${deets.port}`);
  }
);

import session from "express-session";
import connectRedis from "connect-redis";
import memoryStore from "memorystore";
import redisClient from "../cache";

const RedisStore = connectRedis(session);
const MemoryStore = memoryStore(session);

export default (app) =>
  session({
    store:
      app.get("env") === "production"
        ? new RedisStore({ client: redisClient })
        : new MemoryStore(),
    name: "sessId",
    secret: process.env.sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: app.get("env") === "production" ? true : false,
      httpOnly: true,
      maxAge: 18000000, // 5 hours
    },
  });

import { createClient } from "redis";

export default createClient(process.env.REDIS_URL);

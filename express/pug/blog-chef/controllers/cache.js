import redisClient from "../cache";

export const cacheContent = (key, content, expiry = 120) =>
  redisClient.setex(key, expiry, JSON.stringify(content));

export const deleteCache = (key) => {
  if (Array.isArray(key)) {
    return key.forEach((k) => redisClient.del(k));
  }

  return redisClient.del(k);
};

export const servePostsFromCache = () => (req, res, next) =>
  redisClient.get("all-posts", (error, reply) => {
    if (error || !reply) return next();

    res.json({ posts: JSON.parse(reply) });
  });

export const serverPostFromcache = () => (req, res, next) =>
  redisClient.get(`post:${req.params.postId}`, (error, reply) => {
    if (error || !reply) return next();

    res.json({ post: JSON.parse(reply) });
  });

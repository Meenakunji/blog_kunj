// const redis = require("redis")
// const logger = require('../config/logger');
// let redisClient;

// (async () => {
//   redisClient = redis.createClient({url: process.env.REDIS_URL});

//   redisClient.on("error", (error) => console.error(`Error : ${error}`));
//   redisClient.on("connect", () => logger.info('Connected to redis'));
  
//   await redisClient.connect();
// })();

// /**
//  * Set key value pair in redis
//  */
//  const set = async (key, data, expirationTime = 30) => {
//     try {
//         return await redisClient.set(key, JSON.stringify(data), {EX: expirationTime, NX: true});
//     } catch (error) {
//         logger.error(error);
//     }
// };

// /**
//  * Get key value pair in redis
//  */
//  const get = async (key) => {
//     try {
//         return await redisClient.get(key);
//     } catch (error) {
//         logger.error(error);
//     }
// };


  

// module.exports = {
//     set,
//     get
// };

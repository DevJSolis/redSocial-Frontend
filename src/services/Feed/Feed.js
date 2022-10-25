import http from '../http-common';
/**
 * This is a service that involves all that has to do with Feed
 */

/**
 * Get general post list by user id (Including friends posts)
 * @param {Number} userId
 * @returns
 */
const getFeed = (userId) => {
  return http.get('/feed');
};

const FeedService = {
  getFeed,
};

export default FeedService;

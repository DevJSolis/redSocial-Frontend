import http from '../http-common';
/**
 * This is a service that involves all that has to do with Posts
 */

const PostEndPoint = '/posts';

//TODO: create models that improve comments and restricts data types
/**
 * Get post by id
 * @param {Number} postId
 * @returns
 */
const getPostById = (postId) => {
  return http.get(`${PostEndPoint}/${postId}`);
};

/**
 * Updates a post based on its id
 * @param {Post} currentPost
 * @returns
 */
const updatePost = (currentPost) => {
  return http.put(`${PostEndPoint}/${currentPost.id}`);
};

/**
 * Deletes a post based on its id
 * @param {Number} postId
 * @returns
 */
const deletePost = (postId) => {
  return http.get(`${PostEndPoint}/${postId}`);
};

/**
 * Creates a new post
 * @param {Post} post
 * @returns
 */
const createPost = (post) => {
  return http.get(PostEndPoint);
};

//This might be helpful on profile services ↓

// /**
//  * Get post list by user id (Just user posts for profile)
//  * @param {Number} userId
//  * @returns
//  */
// const getProfilePosts = (userId) => {
//     return http.get(`${PostEndPoint}/${userId}`);
//   };

const PostsService = {
  getPostById,
  updatePost,
  deletePost,
  createPost,
};

export default PostsService;

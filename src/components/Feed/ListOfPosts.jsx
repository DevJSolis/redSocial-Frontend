import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post/Post'
import posts from './posts.json'
import { v4 as uuidv4 } from 'uuid';


function ListOfPosts(){
  //const posts =[]; // Get ListOfPosts(API)
  
  return (
    <>
      <ul>
        {/* el uso de uuid es temporal, cuando se haga fetch de los post ya se usara su verdadero uuid */}
        {posts.posts.map((post) => <Post key={uuidv4()} post= {post}/>)}
      </ul>
    </>
  );
}

export default ListOfPosts;
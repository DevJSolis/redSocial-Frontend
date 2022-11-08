import React from 'react'
import PropTypes from 'prop-types'
import WritePost from '../WritePost/WritePost'
import Post  from '../Post/Post'
const Feed = props => {
  return (
    <>
    <div className='container'>
      <WritePost/>
      <Post/>
    </div>
    </>
  )
}

Feed.propTypes = {}

export default Feed
import React from 'react'
import PropTypes from 'prop-types'
import WritePost from './WritePost/WritePost'
import Posts  from './ListOfPosts'
const Feed = props => {
  return (
    <>
    <div className='container'>
      <WritePost/>
      <Posts/>
    </div>
    </>
  )
}

Feed.propTypes = {}

export default Feed
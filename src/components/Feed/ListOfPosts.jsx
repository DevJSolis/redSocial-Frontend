function Post(props) {
  return <li>{ props.brand }</li>;
}

function ListOfPosts() {
  const posts =[]; // Get ListOfPosts(API)
  return (
    <>
      <ul>
        {posts.map((post) => <Post brand={post} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListOfPosts/>);
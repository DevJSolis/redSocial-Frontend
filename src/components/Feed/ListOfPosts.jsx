function ListOfPosts() {
  const posts =[]; // Get ListOfPosts(API)
  return (
    <>
      <ul>
        {posts.map((post) => <Post post/>)}
      </ul>
    </>
  );
}

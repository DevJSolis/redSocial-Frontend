import PostComment from "./images/9b27bc6785f6f422783095319c95e8ac.jpg";

export default function Comment({ comment }) {
  return (
    <>
      <div className="card flex-row comment-content">
        <img className="comment" src={PostComment} alt="Autor de comentario" />
        <div className="card-body">
          <p className="card-text">{comment}</p>
        </div>
      </div>
    </>
  );
}

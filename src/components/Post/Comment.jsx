import PostComment from "./images/9b27bc6785f6f422783095319c95e8ac.jpg";

export default function Comment({ comment }) {
  return (
    <>
      <div class="card flex-row comment-content">
        <img class="comment" src={PostComment} alt="Autor de comentario" />
        <div class="card-body">
          <p class="card-text">{comment}</p>
        </div>
      </div>
    </>
  );
}

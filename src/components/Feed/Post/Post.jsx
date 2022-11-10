import "./Post.css";
import Container from "react-bootstrap/Container";
import CommentList from "../Post/CommentList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import PostImagen from "./images/cat_1.png";
import ProfileImagen from "./images/memoji_girls_9_13.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";


// const comments = ["Hola", "como estas?", "skfjdsf", "mas"];

function Post({post}) {
  
  const {time, caption, likes, comments} = post;//post;
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
        rel="stylesheet"
      ></link>  
      <Card className="container lol">
        <div className="card flex-row">
          <img className="imagenPerfil" src={ProfileImagen} alt="Post" />
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">Jenny Wilson created a new post</h4>
            <p className="card-text">{time}</p>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    {caption}
                  </Card.Text>
                </Card.Body>
                <img className="resize" src={PostImagen} alt="Post" />
              </Card>
            </Col>
            <Col>
              <CommentList comments={comments} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Col><div className="btn"><i className="fa fa-heart-o" aria-hidden="true"></i> {likes} likes</div></Col>
              <Col><div className="btn"><i className="fa fa-comment-o" aria-hidden="true"></i> {comments.length} comments </div></Col>
            </Col>
            <Col>
              <InputGroup  className="mb-3">
                <div className="send-comment newComment">
                  
                <Form.Control placeholder="Agrega un comentario..." />
                <Button  variant="outline-secondary" id="button-addon2">
                  Enviar
                </Button>
                </div>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default Post;

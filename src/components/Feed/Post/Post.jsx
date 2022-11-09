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
  console.log(post)
  const {time, caption, likes, comments} = post;//post;
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      ></link>
      <Card className="container lol">
        <div class="card flex-row">
          <img class="imagenPerfil" src={ProfileImagen} alt="Post" />
          <div class="card-body">
            <h4 class="card-title h5 h4-sm">Jenny Wilson created a new post</h4>
            <p class="card-text">{time}</p>
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
                <img class="resize" src={PostImagen} alt="Post" />
              </Card>
            </Col>
            <Col>
              <CommentList comments={comments} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Col>{likes} likes</Col>
              <Col>{comments.length} comments</Col>
            </Col>
            <Col>
              <InputGroup class="newComment" className="mb-3">
                <Form.Control placeholder="Agrega un comentario..." />
                <Button variant="outline-secondary" id="button-addon2">
                  Enviar
                </Button>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default Post;

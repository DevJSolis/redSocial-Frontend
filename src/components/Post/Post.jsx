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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const comments = ["Hola", "como estas?", "skfjdsf", "mas"];

function Post() {
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
      <Card>
        <div class="card flex-row">
          <img class="imagenPerfil" src={ProfileImagen} alt="Post" />
          <div class="card-body">
            <h4 class="card-title h5 h4-sm">Jenny Wilson created a new post</h4>
            <p class="card-text">44 min ago</p>
          </div>
        </div>

        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
              <Col>12 likes</Col>
              <Col>20 comments</Col>
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

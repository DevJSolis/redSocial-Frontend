import "./Post.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Post() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Amiko&display=swap"
        rel="stylesheet"
      ></link>

      <div className="e103_2645">
        <div className="e103_2668">
          <div className="e103_2669">
            <div className="e103_2670"></div>
            <div className="e103_2671"></div>
            <div className="e103_2672"></div>
          </div>
          <div className="e103_2673">
            <span className="e103_2674">Jenny Wilson created a new post </span>
            <span className="e103_2675">44 min ago</span>
          </div>
          <div className="e103_2676">
            <div className="e103_2677"></div>
          </div>
        </div>

        <span className="e103_2678">
          Este es mi lindo gato creado en figma!!
        </span>
        <div className="e103_2662">
          <div className="e103_2663"></div>
          <div className="e103_2664">
            <div className="e103_2665">
              <div className="e103_2666"></div>
              <span className="e103_2667">Que lindo tu gato!!:3</span>
            </div>
          </div>
        </div>

        <div className="e103_2647">
          <div className="e103_2648">
            <div className="e103_2649"></div>
            <div className="e103_2650"></div>
            <div className="e103_2651">
              <div className="e103_2652">
                <div className="e103_2653"></div>
                <div className="e103_2654"></div>
                <div className="e103_2655"></div>
              </div>
            </div>
            <div className="e103_2656">
              <div className="e103_2657">
                <div className="e103_2658"></div>
                <div className="e103_2659"></div>
                <div className="e103_2660"></div>
              </div>
            </div>
          </div>
        </div>
        <Container className="likes">
          <Row xs={2} md={4} lg={6}>
            <Col>
              <div className="e103_2681">
                <div className="e103_2682"></div>
              </div>
            </Col>
            <Col>
              <div className="e103_2932">
                <div className="e103_2933"></div>
              </div>
            </Col>
          </Row>
        </Container>
        <div class="e103_2683">
          <div class="e103_2684"></div>
          <div class="e103_2685">
            <div class="e103_2686">
              <div class="e103_2687"></div>
              <span class="e103_2688">Agrega un comentario....</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;

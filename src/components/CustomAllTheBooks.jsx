import { Component } from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import FantasyBooks from "../data/fantasy.json";
import HistoryBooks from "../data/history.json";
import HorrorBooks from "../data/horror.json"
import RomanceBooks from "../data/romance.json"
import SciFiBooks from "../data/scifi.json"
import Accordion from 'react-bootstrap/Accordion';


class CustomAllTheBooks extends Component {
  render() {

    return (
      <Accordion defaultActiveKey="0" className="container mb-5">
      <Accordion.Item eventKey="0">
        <Accordion.Header> <strong>Fantasy </strong>
        </Accordion.Header>

        <Accordion.Body>
        <div className="container justify-content-center">
        <Row className="d-flex">
          {FantasyBooks.slice(0, 8).map((book) => {
            return (
              <Col xs={12} md={4} lg={3} className="d-flex align-items-stretch mb-2">
                <Card key={book.asin} width="100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    id="bookCover"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between bg-light">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price}€</Card.Text>
                    <Button variant="outline-primary"> Anteprima</Button>
                    <Button variant="outline-warning"> Acquista</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><strong>Storici</strong>
        </Accordion.Header>
        <Accordion.Body>
        <div className="container justify-content-center">
        <Row className="d-flex">
          {HistoryBooks.slice(0, 8).map((book) => {
            return (
              <Col xs={12} md={4} lg={3} className="d-flex align-items-stretch mb-2">
                <Card key={book.asin} width="100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    id="bookCover"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between bg-light ">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price}€</Card.Text>
                    <Button variant="outline-primary">Anteprima</Button>
                    <Button variant="outline-warning"> Acquista</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><strong>Horror</strong>
        </Accordion.Header>
        <Accordion.Body>
        <div className="container justify-content-center">
        <Row className="d-flex">
          {HorrorBooks.slice(0, 8).map((book) => {
            return (
              <Col xs={12} md={4} lg={3} className="d-flex align-items-stretch mb-2">
                <Card key={book.asin} width="100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    id="bookCover"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between bg-light">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price}€</Card.Text>
                    <Button variant="outline-primary">Anteprima</Button>
                    <Button variant="outline-warning"> Acquista</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><strong>Romantici</strong>
        </Accordion.Header>
        <Accordion.Body>
        <div className="container justify-content-center">
        <Row className="d-flex">
          {RomanceBooks.slice(0, 8).map((book) => {
            return (
              <Col xs={12} md={4} lg={3} className="d-flex align-items-stretch mb-2">
                <Card key={book.asin} width="100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    id="bookCover"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between bg-light">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price}€</Card.Text>
                    <Button variant="outline-primary"> Anteprima</Button>
                    <Button variant="outline-warning"> Acquista</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><strong>Fantascienza </strong>
        </Accordion.Header>
        <Accordion.Body>
        <div className="container justify-content-center">
        <Row className="d-flex">
          {SciFiBooks.slice(0, 8).map((book) => {
            return (
              <Col xs={12} md={4} lg={3} className="d-flex align-items-stretch mb-2">
                <Card key={book.asin} width="100">
                  <Card.Img
                    variant="top"
                    src={book.img}
                    id="bookCover"
                  />
                  <Card.Body className="d-flex flex-column justify-content-between bg-light">
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price}€</Card.Text>
                    <Button variant="outline-primary">Anteprima</Button>
                    <Button variant="outline-warning"> Acquista</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    );
  }
}
export default CustomAllTheBooks;
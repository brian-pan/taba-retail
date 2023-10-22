import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  const currentYr = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Tabagie Des Pins &copy; {currentYr}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

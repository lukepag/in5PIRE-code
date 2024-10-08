import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '15px' };
  return (
    <footer id="footer-component" className="mt-auto bg-light">
      <Container style={divStyle}>
        <Row>
          {/* Spire LLP Information */}
          <Col md={4} className="footer-col">
            <div className="footer-title"><a href="https://www.spirehawaii.com/firm/our-firm" className="link">Spire LLP</a></div>
            <div className="footer-list">
              <div><a href="https://www.spirehawaii.com/firm/our-philosophy" className="link">Our Philosophy</a></div>
              <div><a href="https://www.spirehawaii.com/firm/our-team" className="link">Our Team</a></div>
            </div>
            <div className="footer-contact">
              <a href="tel:+8085360066" className="link">(808) 536-0066</a><br />
              <a href="mailto:contactus@spirehi.com" className="link">contactus@spirehi.com</a><br />
              <div>700 Bishop Street, Suite 2001, Honolulu, HI 96813</div>
            </div>
          </Col>

          {/* University Information */}
          <Col md={4} className="footer-col">
            <div className="footer-title"><a href="https://www.ics.hawaii.edu/" className="link">Department of Information and Computer Sciences</a></div>
            <div className="footer-list">
              <div><a href="https://github.com/ICS-414-In5PIRE/in5PIRE.github.io" className="link">Project Home Page</a></div>
              <div className="footer-contact">
                <div><a href="https://manoa.hawaii.edu/" className="link">University of Hawaii at Manoa</a></div>
                <div>2500 Campus Road, Honolulu, HI 96822</div>
              </div>

            </div>
          </Col>

          {/* Logos Column */}
          <Col md={4} className="footer-logos d-flex flex-column align-items-center justify-content-center">
            <Row>
              <Col>
                <img src="/images/in5pirelogo.png" alt="Spire LLP Logo" className="pt-4" />
              </Col>
              <Col>
                <img src="/images/icslogo.png" alt="ICS Logo" className="logo-img" />
              </Col>
            </Row>
            <Row>
              <Col>
                <img src="/images/uhmanoaimage.png" alt="UH Manoa Logo" className="logo-img pb-5" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="copyright-section">
          <Col className="end-footer text-center">
            <div>© Spire Hawaii LLP 2023</div>
            <a href="https://www.spirehawaii.com/privacy-policy" className="link">Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>

  );
};

export default Footer;

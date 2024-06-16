import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Education.module.css";

const MyCertificates = ({ certificateImages }) => {
  return (
    <div className="certification">
      <div className={`heading-certifications my-3 text-white fs-2 text-center fw-bold ${styles.heading}`}>Certificates</div>
      <Container data-aos="fade-up">
        {certificateImages.map((imageRow, index) => (
          <Row key={index} className="mb-3">
            {imageRow.map((img, idx) => (
              <Col key={idx} xs={6} sm={3} className={styles.certi}>
                <div className={styles.certificateContainer}>
                  <img
                    src={img}
                    alt={`Certificate ${index * 4 + idx + 1}`}
                    className={`img-fluid rounded-4 ${styles.certificateImg}`}
                  />
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </div>
  );
}

export default MyCertificates;

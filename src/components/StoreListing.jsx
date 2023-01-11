import { Container, Row, Col, Image } from "react-bootstrap"

export default function StoreListing() {
    return (
        <div className="text-center py-5">
            <h2>Browse stores in Houston</h2>
            <Container style={{ marginTop: "40px", textAlign: "center" }}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="/imgs/ALDI.png" 
                                width={100}
                                height={100}
                                roundedCircle
                                style={{
                                    objectFit: 'contain'
                                }} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs=".5">
                            <Image src="/imgs/Sprouts.png" 
                                width={100}
                                height={100}
                                roundedCircle
                                style={{
                                    objectFit: 'contain'
                                }} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs=".5" >
                            <Image src="/imgs/Kroger.png" 
                                width={100}
                                height={100}
                                roundedCircle
                                style={{
                                    objectFit: 'contain'
                                }} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src="/imgs/ALDI.png" 
                                width={100}
                                height={100}
                                roundedCircle
                                style={{
                                    objectFit: 'contain'
                                }} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs=".5">
                            <Image src="/imgs/Sprouts.png" 
                                width={100}
                                height={100}
                                roundedCircle
                                style={{
                                    objectFit: 'contain'
                                }} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Sprouts Farmers Market</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs=".5" >
                            <Image src="/imgs/Kroger.png" 
                                width={100}
                                height={100}
                                roundedCircle
                                style={{
                                    objectFit: 'contain'
                                }} />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                            <p>Delivery</p>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}
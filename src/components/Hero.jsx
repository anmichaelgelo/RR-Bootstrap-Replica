import { Card, Container, Form } from 'react-bootstrap';

function Hero() {
    const backgroudImage = {
        backgroundImage: 'url(./imgs/background.webp)'
    }

    const flag = {
        position: 'relative',
        top: '2px',
        right: '3px'
    }

    const selectCountry = {
        backgroundImage: 'url(./imgs/arrow.svg)', 
        position: 'absolute',
        bottom: '13px',
        right: '4px'
    }

    return (
        <Card>
            <div className="hero-background" 
                style={backgroudImage}></div>
            <Card.ImgOverlay className='px-5'>
                    <div className="d-flex flex-column align-items-start justify-content-center h-100">
                        <div className="d-inline position-relative py-2 px-3 bg-white rounded border">
                            <img src="/imgs/canada.svg"
                                style={flag}
                                width={32} 
                                height={32}
                                alt="Canada" />
                            <select name="country" 
                                className='select-option'
                                style={selectCountry}
                                aria-label="Choose your country. This action refreshes the page." 
                                data-np-intersection-state="visible">
                                    <option value="CA" aria-label="Canada">CA</option>
                                    <option value="US" aria-label="United States">US</option>
                            </select>
                        </div>

                        <Container>
                            <div className="d-flex flex-column">
                                <h1 className='mb-3'>Order groceries for delivery <br /> or pickup today</h1>
                                <Card.Text className='fw-normal'>Whatever you want from local stores, brought right to your door.</Card.Text>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <div className="position-relative w-40">
                                        <img src="/imgs/map-pin.svg" 
                                            alt="map"
                                            className='left-icon'
                                            width={20}
                                            height={20} />
                                        <Form.Control size='lg' 
                                            className='reg-font-with-padding'
                                            type="text" 
                                            placeholder="Enter your address" />
                                        <img src="/imgs/arrow-right.svg" 
                                            alt="arrow-right" className="right-icon"
                                            width={20}
                                            height={20} />
                                    </div>
                                </Form.Group>
                            </div>
                        </Container>
                    </div>
            </Card.ImgOverlay>
        </Card>
    );
}

export default Hero;
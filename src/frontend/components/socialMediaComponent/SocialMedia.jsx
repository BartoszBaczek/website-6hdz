import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './SocialMedia.css';

class SocialMedia extends Component {
    render() {
        return (
            <Row className="margin-top-2">
                <Col md={11} mdOffset={1} className="white-icons-default-text-nice-links">
                    <h1><b>Skontaktuj się z nami</b></h1>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp; Stanica Wodna 6HDŻ, Rudzka, 44-200 Rybnik</p>
                    <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp; 604-293-288</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp; 6hdz.zhprybnik@gmail.com</p>
                        <h1><b>6HDŻ w internecie</b></h1>
                        <p>
                            <i className="fa fa-facebook-square" aria-hidden="true"></i>
                            &nbsp;
                            <a target="_blank" href="http://wwww.facebook.com/6HDZ.Rybnik">6HDZ.Rybnik</a>
                        </p>
                        <p>
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            &nbsp;
                            <a target="_blank" href="http://www.instagram.com/6hdz_rybnik/">6hdz_rybnik</a>
                        </p>
                        <p>
                            <i className="fa fa-youtube-play" aria-hidden="true"></i>
                            &nbsp;
                            <a target="_blank" href="http://www.youtube.com/channel/UChEo0OpIE9_mJShfOFnNYNg">6. HARCERSKA DRUŻYNA ŻEGLARSKA</a>
                        </p>
                        <p>
                            <i className="fa fa-snapchat-square" aria-hidden="true"></i>
                            &nbsp;
                            <a target="_blank" href="http://www.snapchat.com/add/wodniacyrybnik">@wodniacyrybnik</a>
                        </p>
                </Col>
            </Row>
        );
    }
}

export default SocialMedia;
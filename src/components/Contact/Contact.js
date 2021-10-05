import React from 'react';
import { Form,Button} from 'react-bootstrap';
// link css style
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <section id="contact">
            <div class="contact-wrapper pt-5">

            <Form>
                <Form.Group className="mb-3 " controlId="formNAME">
                    <Form.Control type="text" placeholder="NAME" />
                </Form.Group>
                <Form.Group className="mb-3 " controlId="formEmail">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Control className=" mb-3" as="textarea" rows={10} />
                <Button variant="primary" type="submit">
                <i class="fa fa-paper-plane"></i> SEND
                </Button>
                <div class="alt-send-button">
                   
                
                </div>
                
                </Form>

           

            <div class="direct-contact-container">

                <ul class="contact-list">
                <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>

                <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>

                <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">elearning@gmail.com</a></span></i></li>

                </ul>
            </div>

            </div>

            </section>
        </div>
    );
};

export default Contact;
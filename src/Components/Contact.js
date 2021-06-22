import ReactDOM from 'react-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons' 
import '../styles.css';

const Contact = () => {

    return (

        <div className='contact'>
            <h2 className="contact-title">contact me</h2>
            <div className="icons">
                <a className="icon-link"  href="mailto:allisonleggett7@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a className="icon-link" href="https://www.linkedin.com/in/allisonleggett/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a className="icon-link" href="https://github.com/Alliemack77?tab=repositories" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
            </div>

        </div>
    );

}

export default Contact;


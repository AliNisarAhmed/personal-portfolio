import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitterSquare, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

export default function Contact({ contacts }) {
  return (
    <section className="contact" id="contact">
      <div className="section__heading contact__heading">
        <h2>Contact</h2>
        <div className="underline"></div>
      </div>
      <p className="contact__text">I am looking for my first job as a web developer. If you like my work, please contact me!</p>
      <div className="contact__links">
        <span>
          <a href="#" className="contact__link"><FontAwesomeIcon icon={faPhoneSquare} title="825 993 6766"></FontAwesomeIcon></a>
        </span>
        <span>
          <a href="mailto:ali.nisar87@gmail.com" className="contact__link"><FontAwesomeIcon icon={faEnvelopeSquare} title="ali.nisar87@gmail.com"></FontAwesomeIcon></a>
        </span>
        <span>
          <a href={contacts[1].link} className="contact__link"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
        </span>
        <span>
          <a href={contacts[2].link} className="contact__link"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
        </span>
        <span>
          <a href={contacts[3].link} className="contact__link"><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></a>
        </span>
        <span>
          <a href={contacts[4].link} className="contact__link"><FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon></a>
        </span>
      </div>
      <div className="contact__copyright">
        Made by Ali Nisar Ahmed &copy; 2019, inspired by <a href="https://www.justinchi.me">Justin</a>
      </div>
    </section>
  )
}

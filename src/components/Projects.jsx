import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

import Image from './Image';
import ModalImage from './ModalImage';


Modal.defaultStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)'
  },
  content: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '0',
    border: '1px solid black',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    height: "100vh",
    maxHeight: '100vh', 
    maxWidth: '60rem',
    minWidth: '20rem',
    // display: 'flex',
    // flexFlow: 'column',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
  }
}

export default class Projects extends React.Component {

  state = {
    modalIsOpen: false,
    selectedImage: null,
  }

  openModal = (e) => {
    this.setState({ modalIsOpen: true, selectedImage: e.target.name });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render () {
    const cardClass = classNames({
      projects__card: true,
      projects__hide: this.state.modalIsOpen
    });
    const selectedProject = this.props.projects.find(project => project.title === this.state.selectedImage);
    const keys = selectedProject && Object.keys(selectedProject.links.github);
    return (
      <section className="projects" id="projects">
        <div className="project__heading section__heading">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects__container">
          {this.props.projects.map(project => (
              <div className={cardClass}>
                <Image 
                  filename={project.image}
                  alt={project.title}
                />
                <div className="projects__info">
                  <div className="projects__info__top">
                    <h5 className="projects__title">{project.title}</h5>
                    <p className="projects__skills">{project.skills.map((skill, i, arr) => (
                      <React.Fragment>
                      <span className="skill">
                          {skill}
                        </span>
                        <span className="separator">
                          {i === arr.length - 1 ? "" : " | "}
                        </span>
                      </React.Fragment>
                      ))}
                    </p>
                  </div>
                  <div className="projects__info__bottom">
                    <button className="projects__info__button" name={project.title} onClick={this.openModal}>See More</button>
                  </div>
                </div>
              </div>
          ))}
        </div>

        {/* Modal */}
        
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Project Details"
          closeTimeoutMS={200}
        > 
        {selectedProject && (
          <React.Fragment>
            <div className="modal__imageContainer">
              <ModalImage filename={selectedProject.image} alt={selectedProject.title}/>
            </div>

            <div className="modal__titleContainer">
              <h5 className="modal__title">{selectedProject.title}</h5>
            </div>
            <div className="modal__skillContainer">
              {selectedProject.skills.map(skill => (
                <span className="modal__skill">{skill}</span>
              ))}
            </div>

            <div className="modal__description" dangerouslySetInnerHTML={{__html: selectedProject.description}}></div>
            
            <div className="modal__linkContainer">
              <a href={selectedProject.links.preview} rel="noopener noreferrer" target="_blank" className="modal__link"><FontAwesomeIcon icon={faReact}/>See App</a>
              {
                keys.length === 1 
                ? (
                  <a href={selectedProject.links.github[keys[0]]} rel="noopener noreferrer" target="_blank" className="modal__link"><FontAwesomeIcon icon={faGithub}/>See Code</a> 
                  )
                : (
                  keys.map(key => {
                    if (key === "HTML") {
                      return (<a href={selectedProject.links.github[key]} rel="noopener noreferrer" target="_blank" className="modal__link"><FontAwesomeIcon icon={faGithub}/>See Code</a>);
                    } else {
                      return (<a href={selectedProject.links.github[key]} rel="noopener noreferrer" target="_blank" className="modal__link"><FontAwesomeIcon icon={faGithub}/>{key} Code</a>);
                    }
                  })
                )
              }
            </div>
            <button className="modal__close" onClick={this.closeModal}><FontAwesomeIcon icon={faWindowClose}/></button>
          </React.Fragment>  
        )}
        </Modal>
      </section>
    );
  }
}
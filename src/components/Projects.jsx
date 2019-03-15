import React from 'react';
import Modal from 'react-modal';

import Image from './Image';

// Modal.setAppElement('#app')

export default class Projects extends React.Component {

  state = {
    modalIsOpen: false
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render () {
    return (
      <section className="projects" id="projects">
        <div className="projects__heading">
          <h2>Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="projects__container">
          {this.props.projects.map(project => (
            <>
              <div className="projects__card">
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
                    <button className="projects__info__button" onClick={this.openModal}>See More</button>
                  </div>
                </div>
              </div>
              <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                className="projects__modal"
                contentLabel="Project Details"
              >
                  {project.title}
              </Modal>
            </>
          ))}
        </div>
      </section>
    );
  }
}
import React, { useEffect, useState } from "react";
import { default as ProjectInfo } from "./ProjectInfo";
import { default as ProjectDescList } from "./ProjectDescList";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  id: string;
  title: string;
  shortdescription: string;
  longdescription: string;
  photoName: string;
  githubLink: string;
  skills: string[];
  visible: boolean;
  list: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [cardOpen, setCardOpen] = useState(false);
  let photoURL = `${import.meta.env.VITE_PHOTO_URL}${props.photoName}`;

  const handleOpen = () => {
    if (!cardOpen) {
      setCardOpen(true);
    } else {
      setCardOpen(false);
    }
  };

  const handleClose = () => {
    setCardOpen(false);
  };
  useEffect(() => {
    console.log(props);
  });
  if (cardOpen) {
    return (
      <div id={props.id} className="project-card active" onClick={handleClose}>
        <div className="project-card-content">
          <img src={photoURL} alt="image failed to load" />
          <ProjectInfo
            visible={cardOpen}
            title={props.title}
            shortdescription={props.shortdescription}
            longdescription={props.longdescription}
            githubLink={props.githubLink}
          />
        </div>
        <div className="project-card-content-description">
          <ProjectDescList visible={cardOpen} list={props.list} />
        </div>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    );
  } else {
    return (
      <div id={props.id} className="project-card" onClick={handleOpen}>
        <div className="project-card-top">
          <img src={photoURL} alt="image failed to load" />
        </div>
      </div>
    );
  }
};

export default ProjectCard;

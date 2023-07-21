import React, { useEffect, useRef } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ProjectInfoProps {
  visible: boolean;
  title: string;
  shortdescription: string;
  longdescription: string;
  githubLink: string;
}
const ProjectInfo: React.FC<ProjectInfoProps> = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  if (props.visible === true) {
    return (
      <div className="project-info">
        <span className="project-info-title"> {props.title} </span>
        <p className="project-info-short-description">
          {props.shortdescription}{" "}
        </p>
        <br />
        <p className="project-info-long-description">
          {props.longdescription}{" "}
        </p>
        <a className="project-info-gh-link" href={props.githubLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ProjectInfo;

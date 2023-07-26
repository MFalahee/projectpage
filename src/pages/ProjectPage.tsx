import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
interface ProjectPageProps {
  visible: boolean;
}

interface Project {
  id: string;
  title: string;
  visible: boolean;
  shortdescription: string;
  longdescription: string;
  imageURL: string;
  githubURL: string;
  hostedURL: string;
  skills: string[];
}

const ProjectPage: React.FC<ProjectPageProps> = (props) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const getProjects = () => {
    fetch("projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProjects(data);
      })
      .catch((err) => {
        console.log("Error retrieving project information, try again later.");
        console.error(err);
      });
  };

  useEffect(() => {
    if (projects.length === 0) {
      getProjects();
    }
  }, []);
  if (projects && projects.length > 0)
    return (
      <div className="pp-wrapper">
        <header className="project-header">
          <h1 className="project-header-text">
            Some of my projects from the past:{" "}
          </h1>
        </header>
        <div className="project-grid">
          {projects.map((project, key) => {
            return (
              <ProjectCard
                key={key}
                id={project.id}
                title={project.title}
                shortdescription={project.shortdescription}
                longdescription={project.longdescription}
                photoName={project.imageURL}
                githubLink={project.githubURL}
                skills={[]}
                visible={props.visible}
                list={[]}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  else return <> Projects failed to load, try refreshing. </>;
};

export default ProjectPage;

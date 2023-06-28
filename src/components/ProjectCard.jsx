const ProjectCard = ({ project }) => {
  const styles = {
    backgroundImage: `url(${project.imageUrl})`,
    backgroundSize: 'cover',
  };

  return (
    <section style={styles} className="item p-2 text-white">
      <h3 className="text-xl text-center">{project.name}</h3>
      <div className="h-[220px] flex justify-center items-center">
        <a href={project.gitHubUrl} target="_blank">
          <i className="fa-brands fa-github text-8xl"></i>
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;

const ProjectCard = ({ project }) => {
  const styles = {
    backgroundImage: `url(${project.imageUrl})`,
    backgroundSize: 'cover',
  };

  return (
    <section className="item pt-2 text-white flex flex-col gap-1 bg-[#020001]">
      <header className="border-b-[2px] border-white">
        <h3 className="text-xl text-center">{project.name}</h3>
      </header>
      <article
        style={styles}
        className="px-1 flex items-end justify-end rounded h-[220px]"
      >
        <div className="bg-[#020001] shadow shadow-black border-[1px] border-white  mb-1 h-[40px] w-[90px] text-3xl flex justify-center items-center rounded gap-5">
          <a href={project.gitHubUrl} target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          {project.netlifyUrl && (
            <a href={project.netlifyUrl} target="_blank">
              <i className="fa-solid fa-pager"></i>
            </a>
          )}
        </div>
      </article>
    </section>
  );
};

export default ProjectCard;

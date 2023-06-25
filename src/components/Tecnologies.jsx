const Tecnologies = ({ text, children }) => {
  return (
    <section className="grid place-items-center">
      <div className="text-3xl md:text-4xl lg:text-5xl">{children}</div>
      <h3 className="font-semibold">{text}</h3>
    </section>
  );
};

export default Tecnologies;

import { useEffect, useRef } from 'react';
import ContactsForm from './ContactsForm';
import { useInView } from 'framer-motion';

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <article className="flex flex-col items-center justify-center gap-5 md:gap-7 lg:gap-9">
      <h2 className="dark:text-white" id="Contacts">
        {'<Contacts'}
        <span className="text-[#e2286c]">/</span>
        {'>'}
      </h2>
      <div
        ref={ref}
        style={{
          transform: isInView ? 'none' : 'translateX(+200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
        className="max-w-[500px] w-[90%] py-7 px-5 shadow shadow-black bg-[#FFFFFF] dark:bg-[#020001] rounded-lg"
      >
        <ContactsForm />
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-8 dark:text-white">
        <h3 className="text-lg md:text-xl font-bold">Another ways to contact me:</h3>
        <section className="text-black flex flex-col md:flex-row gap-4 lg:gap-10 dark:text-white">
          <div className="flex flex-col md:gap-2 lg:gap-4 justify-center items-center">
            <i className="fa-brands fa-whatsapp text-6xl lg:transition lg:hover:text-[#e2286c]"></i>
            <address className="md:text-[17px]">+58 0424-4247080</address>
          </div>
          <div className="flex flex-col md:gap-2 justify-center items-center">
            <i className="fa-regular fa-envelope text-6xl lg:transition lg:hover:text-[#e2286c]"></i>
            <address className="md:text-[17px]">antonioyustis2020@gmail.com</address>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Contacts;

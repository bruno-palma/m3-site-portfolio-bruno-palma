import { technologies } from "../../../../../data/technologies.js";

export const TechCard = () => {
  return (
    <>
      {technologies.map((tech, index) => (
        <li key={index}>
          <img src={tech.img} alt={` Logo ${tech.name} `} />
          <h3>{tech.name}</h3>
        </li>
      ))}
    </>
  );
};

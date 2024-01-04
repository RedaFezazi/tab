import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Job = ({ company, dates, duties, id, order, title, theId }) => {
  return (
    <article>
      <h1 className="title">{title}</h1>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <ul className="job-desc">
        {duties.map((duty, index) => (
          <>
            <MdKeyboardDoubleArrowRight className="job-icon" />
            <li key={index}>{duty}</li>
          </>
        ))}
      </ul>
    </article>
  );
};

export default Job;

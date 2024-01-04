import { useState, useEffect } from "react";
import Job from "./job";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [fetchedData, setFetchedData] = useState(null);
  const [theId, setTheId] = useState(null);
  useEffect(() => {
    const fetchingData = async () => {
      const respond = await fetch(url);
      const data = await respond.json();
      console.log(data);
      setFetchedData(data);
      setTheId(data[0].id);
    };
    fetchingData();
  }, []);

  return (
    <main className="jobs-center">
      <section className="btn-container">
        {fetchedData &&
          fetchedData.map((company) => (
            <button
              onClick={() => setTheId(company.id)}
              key={company.id}
              className={`job-btn ${theId === company.id && "active-btn"}`}
            >
              {company.company}
            </button>
          ))}
      </section>
      <section>
        {fetchedData &&
          fetchedData
            .filter((job) => theId === job.id)
            .map((job) => <Job key={job.id} {...{ ...job, theId }} />)}
      </section>
    </main>
  );
};
export default App;

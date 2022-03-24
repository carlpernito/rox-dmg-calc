import React from "react";

import { firstJobs } from "../../jobs";
import Job from "../job/job.component";

//CSS
import "./job-list.css";

function JobList({ setJobId, setSkillId }) {
  return (
    <>
      <h5>Jobs</h5>
      <section className="job-list">
        {firstJobs.map((job) => {
          return (
            <Job
              key={job.id}
              setJobId={setJobId}
              setSkillId={setSkillId}
              {...job}
            />
          );
        })}
      </section>
    </>
  );
}

export default JobList;

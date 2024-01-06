// Career.jsx
import React from 'react';
import './Career.scss';

const Career = () => {
  return (
    <div className="career-container">
      <section className="career-info-section">
        <h1>Join Our Team at Ss Store</h1>
        <p>
          We are always looking for talented individuals to join our team.
          Explore the available job opportunities below and apply to be a part of
          the Ss Store family.
        </p>
      </section>

      <section className="job-listings-section">
        <h2>Current Job Openings</h2>
        <ul>
          <li>
            <h3>Web Developer</h3>
            <p>
              We are seeking a skilled and motivated web developer to join our
              technology team. If you have a passion for creating innovative web
              solutions, apply today.
            </p>
            <button>Apply Now</button>
          </li>

          {/* Add more job listings as needed */}
        </ul>
      </section>

      <section className="application-process-section">
        <h2>Application Process</h2>
        <ol>
          <li>Review the job listings above.</li>
          <li>Click on the "Apply Now" button for the desired position.</li>
          <li>Fill out the application form with your details.</li>
          <li>Submit your resume and cover letter.</li>
          <li>Our team will review your application and reach out to you.</li>
        </ol>
      </section>
    </div>
  );
};

export default Career;

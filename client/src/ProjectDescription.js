import React from 'react';
import FlippingNumber from './FlippingNumber';
import './ProjectDescription.css';
import Dashboard from './Dashboard';
import CalendlyEmbedWithCaptcha from './Calendly';

function ProjectDescription() {
  return (
      <section id="project-description" className="ProjectDescription">
          <h2>Facilitate the early diagnosis of Alagille syndrome by facial image analysis</h2>
          <div className="dashboard">
              <div className="dashboard-item">
                  <h2>Patients</h2>
                  <FlippingNumber targetNumber={80} intervalSpeed={20}/>
              </div>
              <div className="dashboard-item">
                  <h2>Photos</h2>
                  <FlippingNumber targetNumber={121} intervalSpeed={10}/>
              </div>
              <div className="dashboard-item">
                  <h2>Countries</h2>
                  <FlippingNumber targetNumber={10} intervalSpeed={50}/>
              </div>
          </div>
          <h3>Why?</h3>
          <p>Alagille syndrome is a rare genetic disorder that can affect multiple organs, including the liver,
              heart, and kidneys. It is caused by mutations in the <i>JAG1</i> or <i>NOTCH2</i> genes. The syndrome is
              characterized by a distinctive facial appearance, which can be subtle and difficult to recognize. However,
              Early diagnosis is important for timely medical intervention and management of the disease. In general,
              the
              treatment outcomes are better when the disease is diagnosed early. Therefore, this project aims to
              improve the diagnosis of Alagille syndrome by using artificial intelligence to analyze facial images.
          </p>
          <h3>How?</h3>
          <p>Many patients with Alagille syndrome have distinctive facial dysmorphic features, and artificial
              intelligence (AI), such as GestaltMatcher (Hsieh et al. Nature Genetics, 2022), has proven the ability
              to recognize the rare disorder by facial image analysis. Over the last few years, we published
              GestaltMatcher to recognize 1,115 rare disorders and GestaltMatcher-Arc (Hustinx et al. WACV, 2023)
              to further improve the performance by 100%, considered state-of-the-art. Moreover, we built GestaltMatcher
              Database (GMDB) consisting of more than 10,000 facial images with 792 disorders that can be used for
              model training.
          </p>
          <br></br>
          <p>
              This project will be built upon our GestaltMatcher approach and database. We first collect facial
              photos of Alagille Syndrome patients to train the AI tool to help physicians diagnose accurately and
              efficiently.
          </p>
          <h3>How to participate in this project?</h3>
          <p>If you're interested in this project and want to contribute to it, please feel free to contact us or
              schedule
              up a meeting with us.
          </p>
          <h4>Schedule a Meeting, now!</h4>

          <div className="CalendlyEmbed">
              <CalendlyEmbedWithCaptcha/>
          </div>

      </section>
  );
}

export default ProjectDescription;
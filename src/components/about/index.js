import React from 'react';
import coverImage from '../../assets/photos/cover.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a Javascript develper that enjoys to work with the frontend and backend side of devolping. I love to learn and watch movies in my free time
        </p>
      </div>
    </section>
  );
}

export default About;
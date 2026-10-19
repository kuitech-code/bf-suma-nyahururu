import doctorPhoto from '../../assets/Dr Charles.jpg'

function About() {
  return (
    <section
      className="home-section about"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="about__story">
        <p className="about__eyebrow about__eyebrow--brand">About Suma Health and Wellness</p>
        <h2 id="about-title">The Story Behind Suma Nyahururu</h2>
        <p>
          For Dr. Charles, wellness is more than a profession; it is a passion
          rooted in a genuine desire to see people live healthier, happier and
          more fulfilling lives.
        </p>
        <p>
          His journey has been driven by a deep interest in people’s well-being
          and a commitment to helping individuals take a more active role in
          caring for their health. Through his work at Suma Nyahururu, he strives
          to create a welcoming environment where every client feels heard,
          valued and supported.
        </p>
        <p>
          What inspires him most is the opportunity to interact with people from
          different walks of life, understand their wellness concerns and guide
          them towards making informed choices about their health. He believes
          that every person deserves attention, respect and guidance that
          considers their individual needs.
        </p>
        <p>
          His dedication goes beyond the clinic doors. It is reflected in his
          desire to educate, encourage and build lasting relationships with the
          people he serves. For him, every client interaction is an opportunity
          to make a positive contribution to someone’s wellness journey.
        </p>
        <p>
          At Suma Health and Wellness, his vision is to build a trusted wellness
          centre where people can access health screening, learn about products,
          receive attentive service and feel encouraged as they pursue their
          personal wellness goals.
        </p>
      </div>

      <figure className="about__visual">
        <div className="about__image-wrap">
          <img src={doctorPhoto} alt="Dr. Charles at Suma Health and Wellness" />
        </div>
        <figcaption>Dr. Charles, Suma Health and Wellness, Nyahururu</figcaption>
      </figure>
    </section>
  )
}

export default About

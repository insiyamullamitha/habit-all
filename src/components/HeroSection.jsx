export default function HeroSection() {
  return (
    <>
      <div className="section">
        <div className="col">
          <h2 className="tagline">
            Track, Transform, Triumph – Master Your Habits with Ease
          </h2>
          <img
            className="hero-image"
            src="/images/heroimage.png"
            alt="heroimage"
          />
        </div>
        <div className="col">
          <p className="info-header">&#128640;&nbsp;Chart Your Progress</p>
          <p>
            Easily track and visualise your habits, turning daily routines into
            stepping stones towards your goals.
          </p>
          <p className="info-header">&#127919;&nbsp;Customised Guidance</p>
          <p>
            Receive personalised insights and recommendations, helping you
            optimise your path to success.
          </p>
          <p className="info-header">&#128274;&nbsp;Privacy and Security</p>
          <p>
            Your data is sacred. Rest assured, our platform prioritizes your
            privacy, ensuring a secure space for your personal growth.
          </p>
        </div>
      </div>
    </>
  );
}

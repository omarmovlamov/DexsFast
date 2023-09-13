function Hero() {
  return (
    <>
      <section
        id="home"
        className="min-h-100vh flex justify-start items-center"
      >
        <div className="mx-5 md-mx-l5">
          <div className="inline-block br-round hero-orange-bg orange-lightest p-2 fs-s2 mb-5">
            <div className="inline-block hero-orange-fg br-round px-3 py-1 mr-3 fs-s3">
              Get in line now
            </div>
            We are here to make your websites faster
          </div>
          <div>
            <h1 className="white fs-l3 lh-2 md-fs-xl1 md-lh-1 fw-900 ">
              Let us <br />
              make your website faster
            </h1>

            <div className="br-8 mt-10 inline-flex">
              <input
                type="text"
                className="input-lg half bw-0 fw-200 bg-orange-lightest-10 white ph-orange-lightest focus-white opacity-80 fs-s3 py-5 min-w-25vw br-r-0"
                placeholder="Email Address"
              />
              <button className="button-lg bg-orange-lightest-20 orange-lightest focus-white fw-300 fs-s3 mr-0 br-l-0">
                Get Started
              </button>
            </div>
            <div className="white opacity-20 fs-s3 mt-3">Sign up is free</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

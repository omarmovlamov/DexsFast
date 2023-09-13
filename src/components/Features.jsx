function Features() {
  return (
    <section id="features" className="p-10 md-p-l5">
      <div className="flex flex-column md-flex-row mx-auto">
        <div className="w-100pc md-w-40pc">
          <div className="br-8 p-5 m-5">
            <div className="flex justify-center items-center bg-orange-lightest-10 white w-l5 h-l5 br-round mb-5">
              <i className="fa-solid fa-inbox" style={{ fontSize: 20 }}></i>
            </div>
            <h4 className="white fw-600 fs-m3 mb-5">Storage</h4>
            <div className="orange-lightest fw-600 fs-m1 lh-3 opacity-50">
              Your website's performance depends on data availability quickly.
              Storage enables rapid delivery of web pages, images, and other
              content.
            </div>
            <a
              href="#"
              className="mt-5 button bg-orange-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300"
            >
              Read
            </a>
          </div>
        </div>
        <div className="w-100pc md-w-40pc">
          <div className="br-8 p-5 m-5">
            <div className="flex justify-center items-center bg-orange-lightest-10 white w-l5 h-l5 br-round mb-5">
              <i className="fa-solid fa-microchip" style={{ fontSize: 20 }}></i>
            </div>
            <h4 className="white fw-600 fs-m3 mb-5">Compute</h4>
            <div className="orange-lightest fw-600 fs-m1 opacity-50">
              Server Capacity: You should use servers with sufficient computing
              capacity so that your website can operate smoothly even during
              periods of heavy traffic.
            </div>
            <a
              href="#"
              className="mt-5 button bg-orange-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300"
            >
              Read
            </a>
          </div>
        </div>
        <div className="w-100pc md-w-40pc">
          <div className="br-8 p-5 m-5">
            <div className="flex justify-center items-center bg-orange-lightest-10 white w-l5 h-l5 br-round mb-5">
              <i className="fa-solid fa-database" style={{ fontSize: 20 }}></i>
            </div>
            <h4 className="white fw-600 fs-m3 mb-5">Database</h4>
            <div className="orange-lightest fw-600 fs-m1 opacity-50">
              Database Optimization: Your website's database should support fast
              and efficient queries. Database design and optimization of queries
              and web pages
            </div>
            <a
              href="#"
              className="mt-5 button bg-orange-lightest-10 fs-s3 white no-underline hover-opacity-100 hover-scale-up-1 ease-300"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

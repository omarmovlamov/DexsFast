function Footer() {
  return (
    <>
      <footer className="p-5 md-p-l5 bg-orange-lightest-10">
        <div className="flex flex-wrap">
          <div className="md-w-25pc mb-10">
            <img src="assets/images/logo.png" className="w-l5" alt="" />
            <div className="white opacity-70 fs-s2 mt-4 md-pr-10">
              <p>
                We are here to boost your website's speed and elevate your
                digital presence. Let's take a step forward together and
                discover the fast lane to success.
              </p>
            </div>
          </div>
          <div className="w-100pc md-w-50pc">
            <div className="flex justify-around">
              <div className="w-33pc md-px-10 mb-10">
                <h5 className="white">Company</h5>
                <ul className="list-none mt-5 fs-s2">
                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      About Us
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      Join Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-33pc md-px-10 mb-10">
                <h5 className="white">Product</h5>
                <ul className="list-none mt-5 fs-s2">
                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      About Us
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      Join Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-33pc md-px-10 mb-10">
                <h5 className="white">Support</h5>
                <ul className="list-none mt-5 fs-s2">
                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      About Us
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      Contact
                    </a>
                  </li>
                  <li className="my-3">
                    <a
                      href="#"
                      className="white opacity-70 no-underline hover-underline"
                    >
                      Join Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-100pc md-w-25pc">
            <div className="flex w-75pc col-div md-w-100pc mx-auto">
              <input
                type="text"
                className="input flex-grow-1 bw-0 fw-200 bg-orange-lightest-10 white ph-orange-lightest focus-white opacity-80 fs-s3 py-5 br-r-0"
                placeholder="Email Address"
              />
              <button className="button bg-price orange-lightest fw-300 fs-s3 br-l-0">
                Start
              </button>
            </div>
            <div className="flex justify-around my-8">
              <a
                href="#"
                title="twitter"
                className="relative p-5 bg-price br-round white hover-scale-up-1 ease-400"
              >
                <i
                  data-feather="twitter"
                  className="fa-brands fa-x-twitter absolute-center h-4"
                ></i>
              </a>
              <a
                href="#"
                title="facebook"
                className="relative p-5 bg-price br-round white hover-scale-up-1 ease-400"
              >
                <i
                  data-feather="facebook"
                  className="fa-brands fa-facebook absolute-center h-4"
                ></i>
              </a>
              <a
                href="#"
                title="instagram"
                className="relative p-5 bg-price br-round white hover-scale-up-1 ease-400"
              >
                <i
                  data-feather="instagram"
                  className="fa-brands fa-instagram absolute-center h-4"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

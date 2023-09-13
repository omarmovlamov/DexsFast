import React from "react";

function Product() {
  return (
    <>
      <section className="p-10 md-py-10">
        <div className="w-100pc md-w-70pc mx-auto py-10">
          <h2 className="white  md-fs-xl1 fw-900 lh-2">
            DexsFast is Turkey's leading web speed optimizing
            <span className="border-b orange-underline bw-4">
              {" "}
              technology company.
            </span>
          </h2>
        </div>
      </section>
      <section className="py-l10">
        <div className="flex flex-column md-flex-row md-w-80pc mx-auto">
          <div className="w-100pc md-w-50pc">
            <div className="br-8 p-5 m-5 bg-orange-lightest-10 pointer hover-scale-up-1 ease-300">
              <div className="inline-block bg-product orange-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                Services
              </div>
              <div className="orange-lightest fw-600 fs-m1">
                Web Acceleration Solutions:
                <span className="opacity-30">
                  {" "}
                  DexsFast offers services such as caching, CDN integration and
                  database optimization to speed up websites, enabling customers
                  to achieve high performance.
                </span>
              </div>
              <a
                href="#"
                className="mt-10 button bg-black fs-s3 white no-underline"
              >
                Read
              </a>
            </div>
          </div>
          <div className="w-100pc md-w-50pc">
            <div className="br-8 p-5 m-5 bg-orange-lightest-10  pointer hover-scale-up-1 ease-300">
              <div className="inline-block bg-product orange-lightest br-3 px-4 py-1 mb-10 fs-s4 uppercase">
                Mission and Vision:
              </div>
              <div className="orange-lightest fw-600 fs-m1">
                Our mission
                <span className="opacity-30">
                  {" "}
                  is to help our customers succeed in the digital world by
                  optimizing their web presence. Our vision is to constantly
                  improve the web experience and lead innovations using
                  technology.
                </span>
              </div>
              <a
                href="#"
                className="mt-10 button bg-black fs-s3 white no-underline"
              >
                Read
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;

import React from "react";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div className="container py-5">
      <div className="row mb-5 mt-5 justify-content-center align-items-center">
        <div className="col-md-6 col-sm-12 mb-3">
          <h2 className="about-heading">About Awiwiz Adventures</h2>
          <hr
            className="w-50 border-3 mb-6 py-2"
            style={{ borderColor: "#ff0000" }}
          />
          <p className="about-text">
            Awiwiz Adventures was founded in 2023, focused on adventure and
            survival. We offer various services ensuring you get the best
            adventure in the country. Awiwiz Adventures was founded in 2023,
            focused on adventure and survival. We offer various services
            ensuring you get the best adventure in the country.
          </p>
          <Link href="#" className="hero-btn">
            Explore
          </Link>

          {/* <Image
            src="/logo.svg"
            alt=""
            className="img-fluid"
            width={150}
            height={150}
          />
          <Image
            src="/nairobi.jpg"
            alt=""
            className="img-fluid"
            width={150}
            height={150}
          /> */}
        </div>
        <div className="col-md-6 col-sm-12 mb-3">
          {/* <h1 className="about-title text-uppercase">Discover Kenyan Coast</h1> */}
          <Image
            src="/giraffe.jpg"
            alt=""
            className="img-fluid"
            width={400}
            height={400}
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default About;

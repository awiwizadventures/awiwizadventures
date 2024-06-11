import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="text-uppercase">Awiwiz Adventures</h5>
            <p>
              We offer the best adventure and survival experiences in the
              country. Join us for unforgettable memories.
            </p>
          </div>

          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-sm-12 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-envelope-fill me-2"></i>{" "}
                <Link
                  href="mailto:awiwizadventures@gmail.com"
                  className="text-white"
                >
                  awiwizadventures@gmail.com
                </Link>
              </li>
              <li>
                <i className="bi bi-telephone-fill me-2"></i> +254 710 584581
              </li>
              <li>
                <i className="bi bi-geo-alt-fill me-2"></i> 862-80101, Mtwapa
              </li>
            </ul>
            <div className="mt-3">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-2"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-2"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/awiwizadventures"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-2"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Awiwiz Adventures. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

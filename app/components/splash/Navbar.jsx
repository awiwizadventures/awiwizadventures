import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light border-bottom sticky-top">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image
              src="/logo.svg"
              alt="logo"
              width={70}
              height={70}
              priority={true}
              className="d-inline-block align-text-top"
            />
          </Link>
          <button
            className="navbar-toggler btn-sm"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            aria-controls="collapsibleNavbar"
          >
            <i className="bi bi-list navbar-toggler-icon"></i>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/explore" className="nav-link">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

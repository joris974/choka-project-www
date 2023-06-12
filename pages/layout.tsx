import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 d-flex flex-wrap">
            <p className="d-flex me-4 mb-0">
              <i className="bi-person custom-icon me-2"></i>
              <strong className="text-dark">Abrirá en verano de 2023</strong>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavBar() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Choka Project
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/sports"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Deportes
            </Link>
            <Link
              href="/pricing"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Prices
            </Link>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            Choka Project
          </a>

          <a
            href="ticket.html"
            className="btn custom-btn d-lg-none ms-auto me-4"
          >
            Obtener un Pase
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center ms-auto me-lg-5">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  Sobre
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Equipo
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Calendario
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Precio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_6">
                  Direcciones
                </a>
              </li>
            </ul>

            <a href="ticket.html" className="btn custom-btn d-lg-block d-none">
              Obtener un Pase
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h2 className="text-white mb-lg-0">Choka Project</h2>
            </div>

            <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
              <ul className="social-icon d-flex justify-content-lg-end">
                <li className="social-icon-item">
                  <a
                    href="https://www.facebook.com/profile.php?id=100087295354394"
                    className="social-icon-link"
                  >
                    <span className="bi-facebook"></span>
                  </a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="https://twitter.com/GeoffreyBuchou"
                    className="social-icon-link"
                  >
                    <span className="bi-twitter"></span>
                  </a>
                </li>

                <li className="social-icon-item">
                  <a
                    href="https://www.instagram.com/chokatenerife"
                    className="social-icon-link"
                  >
                    <span className="bi-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-4 pb-2">
            <h5 className="site-footer-title mb-3">Enlaces</h5>

            <ul className="site-footer-links">
              <li className="site-footer-link-item">
                <a href="#section_2" className="site-footer-link click-scroll">
                  Sobre
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_3" className="site-footer-link click-scroll">
                  Equipo
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_4" className="site-footer-link click-scroll">
                  Calendario
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_5" className="site-footer-link click-scroll">
                  Precio
                </a>
              </li>

              <li className="site-footer-link-item">
                <a href="#section_6" className="site-footer-link click-scroll">
                  Direcciones
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <h5 className="site-footer-title mb-3">¿Tengo una pregunta?</h5>

            <p className="text-white d-flex mb-1">
              <a href="tel: +34607641905" className="site-footer-link">
                + 34 607 64 19 05
              </a>
            </p>

            <p className="text-white d-flex">
              <a
                href="mailto:contact@choka-project.com"
                className="site-footer-link"
              >
                contact@choka-project.com
              </a>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
            <h5 className="site-footer-title mb-3">Direcciones</h5>

            <p className="text-white d-flex mt-3 mb-2">
              Zona Costa-Sur, Santa-Cruz, Tenerife, Canarias, España
            </p>
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mt-5">
              <p className="copyright-text">Copyright © 2023 ChokaTenerife</p>
            </div>

            <div className="col-lg-8 col-12 mt-lg-5">
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Terms &amp; Conditions
                  </a>
                </li>

                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

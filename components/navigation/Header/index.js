import Link from 'next/link'

export default function index() {

  return (
    <div>
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 d-flex">
            <Link href="/">
              <a  className="site-logo">
                medium clone
              </a>
              </Link>

              <a
                href="#"
                className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
            <div className="col-12 col-lg-6 ml-auto d-flex">
              <div className="ml-md-auto top-social d-none d-lg-inline-block">
                <a href="#" className="d-inline-block p-3">
                  <span className="icon-facebook"></span>
                </a>
                <a href="#" className="d-inline-block p-3">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#" className="d-inline-block p-3">
                  <span className="icon-instagram"></span>
                </a>
              </div>
              <form action="#" className="search-form d-inline-block">
                <div className="d-flex">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button type="submit" className="btn btn-secondary">
                    <span className="icon-search"></span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6 d-block d-lg-none text-right"></div>
          </div>
        </div>

        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <li className="active">
                    <Link href="/">
                      <a  className="nav-link text-left">
                        Home
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/categories/finance">
                      <a  className="nav-link text-left">
                        Finance
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/categories/design">
                      <a  className="nav-link text-left">
                        Design
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/categories/business" >
                      <a className="nav-link text-left">
                        Business
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/categories/developers" >
                      <a  className="nav-link text-left">
                        Developers
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/categories/game-dev" >
                      <a  className="nav-link text-left">
                        Game Dev
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/categories/e-sports" >
                      <a  className="nav-link text-left">
                        E-Sports
                      </a>
                      </Link>
                    </li>
                    <li>
                    <Link href="/categories/DD" >
                      <a  className="nav-link text-left">
                        Medical Science
                      </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// HomeHtml.tsx
import './home.css';

const HomeHtml = () => {
    return (
      <>
       <nav className="navbar navbar-expand-md bg-primary-subtle fixed-top border-bottom" role="navigation">
            <div className="container">
                <a className="navbar-brand d-md-none" href="/index.html">
                {/* <img className="bi" width="35" height="35" src="../images/MentalWellnessLogo.png" /> */}
                </a>
                <a className="navbar-brand d-md-none" href="/index.html">
                <span>Med Sync</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"
                aria-controls="offcanvas" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvas" aria-labelledby="offcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLabel">Menu</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav flex-grow-1 justify-content-between">
                    <li className="nav-item"><a className="nav-link" href="/index.html"><span>Home</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="/about.html"><span>About</span></a></li>
                    {/* <a href="/index.html"><img className="bi1" width="40" height="40" src="../images/MentalWellnessLogo.png" /></a> */}
                    <li className="nav-item"><a className="nav-link" href="/faq.html"><span>FAQ's</span></a></li>
                    <li className="nav-item"><a className="nav-link custom-nav-link">Login</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>

        <div className="py-5 mt-5 text-center">
            <div className="col-lg-6 mx-auto mb-4">
                {/* <img id="img" alt="profile picture" style="height: 35%; width: 35%;" src="./images/MentalWellnessLogo.png" /> */}
            </div>
            <h1 className="display-4" id="name-goes-here">Hi, Kamal</h1>
            
            <hr />
            <p className="display-6">How are you feeling today?</p>
        </div>

        <div className="container mb-3">
            <input className="form-control me-2 custom-rounded" type="search" placeholder="Search" aria-label="Search" />
            {/* <textarea className="form-control form-control-lg" id="message" type="text" placeholder="Enter your thoughts" aria-label=".form-control-lg example"></textarea> */}
        </div>

        <div className="d-flex gap-2 justify-content-center pb-5">
        <button className="btn btn-primary rounded-circle p-3 lh-1" type="button">
            <svg className="bi" width="24" height="24"></svg>
            <span className="visually-hidden">Dismiss</span>
        </button>
        <button className="btn btn-outline-primary rounded-circle p-3 lh-1" type="button">
            <svg className="bi" width="24" height="24"></svg>
            <span className="visually-hidden">Dismiss</span>
        </button>
        <button className="btn btn-primary rounded-circle p-3 lh-1" type="button">
            <svg className="bi" width="24" height="24"></svg>
            <span className="visually-hidden">Dismiss</span>
        </button>
        <button className="btn btn-outline-primary rounded-circle p-3 lh-1" type="button">
            <svg className="bi" width="24" height="24"></svg>
            <span className="visually-hidden">Dismiss</span>
        </button>
        </div>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
            <div className="col">
            <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
                <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white" />
                    </li>
                    <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>Earth</small>
                    </li>
                    <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>3d</small>
                    </li>
                </ul>
                </div>
            </div>
            </div>
      </div>
        
      </>
    );
};
  
  export default HomeHtml;
  
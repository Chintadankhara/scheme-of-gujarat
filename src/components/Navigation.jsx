import { Signupbutton } from "./Signupbutton"

export const Navigation = () => {

    return (
        <>
            {/* Main navigation bar */}
            <nav className="navbar navbar-expand-md main back shadow-lg mt-3 sticky-top p-0">

                <div className="container">
                    <a href="#" className="navbar-brand">
                        <span className="ms-2 text-primary">Chintan Dankhara</span>
                    </a>
                    {/* Navigation toggler */}
                    <a className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#show">
                        <span><i className="bi bi-three-dots-vertical text-white" style={{ 'cursor': 'pointer' }}></i></span>
                    </a>
                    {/*Navigation toggler */}
                    <div className="offcanvas offcanvas-start classtoggle " tabIndex="-1" id="show" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                <span className="text-light">Chinta Dankhara</span>
                            </h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav text-center">
                                <li className="nav-item ms-2">
                                    <a href="" className="nav-link">More-Info</a>
                                </li>
                            </ul>
                              
                              <Signupbutton/>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

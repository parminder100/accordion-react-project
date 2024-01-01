import "../Header/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () =>{
    return(
        <>
            <header>
                <div className="accordion-grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="project-name">Accordion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;
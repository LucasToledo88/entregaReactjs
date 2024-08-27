import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container">
                    <a className="navbar-brand" href="#">CoderShop ReactJS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navShop" aria-controls="navShop" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navShop">
                        <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Hamburguesas</a></li>
                                    <li><a className="dropdown-item" href="#">Papas Fritas</a></li>
                                    <li><a className="dropdown-item" href="#">Pizzas</a></li>
                                </ul>
                            </li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
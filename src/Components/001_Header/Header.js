import "./Header.css"

import Nav from "./Nav/Nav"

const Header = () => {
    return (
        <header>
            {/* <img src="https://cdn.pixabay.com/photo/2016/12/20/05/36/store-1919731_960_720.png" alt="Logo" /> */}
            <a className="logo" href="#">The Design Shop</a>
            <Nav />
        </header>
    )
}
export default Header
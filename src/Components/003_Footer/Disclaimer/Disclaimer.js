import "./Disclaimer.css";

const Disclaimer = () => {
	return (
		<div className="disclaimer">
			<p>© {new Date().getFullYear()} The Design Shop</p>
            <div><ul>
                <li><a href="#">Disclaimer</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Weekly Picks</a></li>
            </ul></div>
		<p>Made/ Curated by <a href="https://github.com/WeiMingTay">Wei Ming Tay</a></p>
		</div>
	);
};

export default Disclaimer;

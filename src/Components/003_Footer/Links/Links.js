import "./Links.css";

const Links = () => {
	return (
		<div className="linksContainer">
			<div>
				<h4>Info</h4>
				<p>
					Carefully curated online design store. Featuring simple, beautiful and thoughtfully designed products for everyday use.
				</p>
			</div>
			<div>
				<h4>Get in touch</h4>
				<p><b>hello@thedsgnshop.com</b></p>
				<p>Los Angeles, CA</p>
			</div>
			<div>
				<h4>Newsletter</h4>
				<p><b>Sign up</b> for the latest arrivals, special offers and weekly picks</p>
			</div>
			<div>
				<h4>Follow us</h4>
				<div>
					<a href="#">
						<i class="fa-brands fa-facebook"></i>
					</a>
					<a href="#">
						<i class="fa-solid fa-hashtag"></i>
					</a>
					<a href="#">
						<i class="fa-regular fa-heart"></i>
					</a>
					<a href="#">
						<i class="fa-solid fa-crow"></i>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Links;

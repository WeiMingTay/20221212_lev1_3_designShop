import "./Footer.css"

import Links from "./Links/Links";
import SocialMedia from "./SocialMedia/SocialMedia";
import Disclaimer from "./Disclaimer/Disclaimer";

const Footer = () => {
	return (
		<footer className="footer">
			<Links />
			<Disclaimer />
		</footer>
	);
};
export default Footer;

import ProdukteList from "./ProdukteList";
import "./Produkte.css"

const Produkte = (props) => {
	return (
		<article>
			<div className="produktImage">
				<img src={props.src} alt={props.name} />
			</div>
			<div className="produktInfos">
				<p>{props.name}</p>
				<p>{props.preis} €</p>
			</div>
		</article>
	);
};
export default Produkte;

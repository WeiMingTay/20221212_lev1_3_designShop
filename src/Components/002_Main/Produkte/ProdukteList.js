import Produkte from "./Produkte";
import "./ProdukteList.css"

let artikel = [
	{
		src: require("./img/01-Home.png"),
		name: "Vifa Copenhagen 2.0 Loudspeaker",
		preis: 799,
	},
	{
		src: require("./img/29-Lifestyle_b-o.png"),
		name: "Bang & Olufsen Wireless Headphones",
		preis: 174,
	},
	{
		src: require("./img/01-Books.png"),
		name: "Poketo: Creative Spaces",
		preis: 25,
	},
	{
		src: require("./img/02-Lifestyle.png"),
		name: "Ucon Acrobatics Hajo Backpack",
		preis: 79,
	},
	{
		src: require("./img/46-Home_bm.png"),
		name: "Summer Print by Bratislav Milenkovic",
		preis: 27,
	},
	{
		src: require("./img/45-Home_hem.png"),
		name: "Palo Modular Corner Sofa by Hem",
		preis: 3699,
	},
];

const ProdukteList = () => {
	return (
		<div className="artikelContainer">
			{artikel.map((e) => (
				<Produkte src={e.src} name={e.name} preis={e.preis.toFixed(2)} />
			))}
		</div>
	);
};
export default ProdukteList;

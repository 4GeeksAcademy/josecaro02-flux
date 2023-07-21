import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Hijo1 from "./Hijo1";
import Hijo2 from "./Hijo2";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h3>Hola a todas!</h3>
			<Hijo1/>
			<Hijo2/>
		</div>
	);
};

export default Home;

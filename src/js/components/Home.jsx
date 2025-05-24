import React from "react";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron"
import Card from "./Card";
import Footer from "./Footer";


//create your first component
const Home = () => {
	return (
		<div className="">
			<NavBar />
			<div className="d-flex justify-content-between p-3"><Jumbotron /></div>
			<div className="d-flex justify-content-between p-3">
				<Card className="flex-row p-2" title="Canal de Panamá" text="Una de las maravillas de la ingeniería moderna. Conecta el océano Atlántico con el Pacífico, facilitando el comercio mundial desde 1914." image="https://blogs.iadb.org/transporte/wp-content/uploads/sites/9/2016/09/Ampliacion-Canal-de-Panama_credito_ACP.jpg" info="https://es.wikipedia.org/wiki/Canal_de_Panam%C3%A1" />
				<Card className="flex-row p-2" title="Casco Antiguo (Ciudad de Panamá)" text="Centro histórico de la capital, declarado Patrimonio de la Humanidad por la UNESCO. Conserva arquitectura colonial, plazas y museos." image="https://sicultura.gob.pa/img/http/aHR0cHM6Ly9zaWN1bHR1cmEuZ29iLnBhL2ltYWdlcy9lc3BhY2lvcy9tb251bWVudG9zL2Nhc2NvLWFudGlndW8tMjAyMC0xLmpwZw==?p=lightbox-2xl&s=06200213f884dd70e73c7783addd04f0" info="https://es.wikipedia.org/wiki/Casco_Antiguo_de_Panam%C3%A1" />
				<Card className="flex-row p-2" title="Archipiélago de San Blas (Guna Yala)" text="Conformado por más de 300 islas paradisíacas en el Caribe panameño, habitadas por el pueblo Guna. Es un destino ideal para ecoturismo y cultura indígena." image="https://www.civitatis.com/f/panama/ciudad-de-panama/excursion-islas-san-blas-589x392.jpg" info="https://es.wikipedia.org/wiki/Comarca_Guna_Yala" />
				<Card className="flex-row p-2" title="Parque Nacional Coiba" text="Patrimonio Mundial de la UNESCO. Es un parque marino con biodiversidad impresionante, ideal para buceo y observación de fauna marina." image="https://www.discovercoibapanama.com/wp-content/uploads/2020/07/Express-1-Whale-shark-and-swimmer-1-e1647040763584.jpg" info="https://es.wikipedia.org/wiki/Parque_nacional_Coiba" />
				<Card className="flex-row p-2" title="Volcán Barú" text="El punto más alto de Panamá (3,475 m). Desde su cima, en días despejados, se pueden ver el océano Pacífico y el mar Caribe. Ideal para senderismo." image="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_jpg,g_xy_center,h_667,q_100,w_1920,x_1880,y_817/v1/clients/panama/_D758799_19fea1ed-3bc8-4003-bf62-2c86d289eb79.jpg" info="https://es.wikipedia.org/wiki/Volc%C3%A1n_Bar%C3%BA" />
				<Card className="flex-row p-2" title="Bocas del Toro" text="Archipiélago caribeño con playas de arena blanca, selvas tropicales y vida nocturna. Es un lugar popular entre mochileros y surfistas." image="https://www.panamazing.com/wp-content/uploads/2019/09/Bocas.jpg" info="https://es.wikipedia.org/wiki/Provincia_de_Bocas_del_Toro" />
			</div>

			<Footer />
		</div>
	);
};

export default Home;
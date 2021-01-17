import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
	return (
		<div className="home">
			<img  className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" alt=""></img>

			<div className="home__row">
				<Product id="12345" title="Daniel's Amazon Guide" price={99000} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" rating={4.5}/>
				<Product id="12345" title="Daniel's Amazon Guide" price={99000} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" rating={4.5}/>
			</div>
			<div className="home__row">
				<Product id="12345" title="Daniel's Amazon Guide" price={99000} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" rating={4.5}/>
				<Product id="12345" title="Daniel's Amazon Guide" price={99000} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" rating={4.5}/>
				<Product id="12345" title="Daniel's Amazon Guide" price={99000} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" rating={4.5}/>
			</div>
		</div>
	)
}

export default Home;

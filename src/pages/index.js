import React from 'react'
import { Image } from 'cloudinary-react'
import { container, header, title } from '../styles/home-styles'

const Home = () =>
	<div style={container}>
		<div style={header}>
			<Image
				cloudName='ziro'
				width='45'
				publicId='logo-round_kxn8sa'
				version='1508000699'
				format='png'
				secure='true'
		    />
			<span style={title}>Mural de vagas</span>
		</div>
		<p>
			Confira as oportunidades atualmente em aberto na Ziro.
		</p>
	</div>

export default Home
import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Image } from 'cloudinary-react'
import { container, header, title, divider, job, name, tags, button } from '../styles/home-styles'

const Home = ({ data: { allMarkdownRemark: { edges } } }) =>
	<div style={container}>
		<Helmet defaultTitle='Ziro Vagas'>
			<meta charset='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<html lang='pt-br' />
			<link rel='canonical' href='https://vagas.ziro.online' />
	        <meta property='og:url' content='https://vagas.ziro.online' />
	        <meta property='og:type' content='website' />
	        <meta property='og:locale' content='pt-br' />
	        <meta property='og:site_name' content='Ziro Vagas' />
		</Helmet>
		<div style={header}>
			<Image
				cloudName='ziro'
				width='45'
				publicId='logo-round_kxn8sa'
				version='1508000699'
				format='png'
				secure='true'
				alt='logo'
		    />
			<span style={title}>Mural de vagas</span>
		</div>
		<p>Confira as oportunidades atualmente em aberto na Ziro.</p>
		<hr style={divider} />
		{
			edges.map( ({ node: { frontmatter: { path, location, area, title } } }, index) =>
				<div style={job} key={index}>
					<div>
						<span style={name}>{title}</span>
						<div style={tags}>
							<span>{location}</span>
							<span>{area}</span>
						</div>
					</div>
					<Link style={button} to={path}>Saiba Mais</Link>
				</div>
			)
		}
	</div>

export const pageQuery = graphql`
	query {
	  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
	    edges {
	      node {
	        frontmatter {
	          path
	          location
	          area
	          title
	        }
	      }
	    }
	  }
	}
`

export default Home
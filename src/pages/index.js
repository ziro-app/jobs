import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Logo from '@bit/vitorbarbosa19.ziro.logo'
import { container, header, title, divider, job, name, tags, button } from '../styles/home-styles'

const Home = ({ data: { allMarkdownRemark: { edges } } }) =>
	<div style={container}>
		<Helmet defaultTitle='Ziro Vagas'>
			<meta charset='UTF-8' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<html lang='pt-br' />
			<link rel='canonical' href='https://vagas.ziro.online' />
	        <meta name='Description' content='Mural de vagas da Ziro' />
	        <meta property='og:url' content='https://vagas.ziro.online' />
	        <meta property='og:type' content='website' />
	        <meta property='og:locale' content='pt-br' />
	        <meta property='og:site_name' content='Ziro Vagas' />
		</Helmet>
		<div style={header}>
			<Logo />
			<span style={title}>Mural de vagas</span>
		</div>
		<p>Confira as oportunidades atualmente em aberto na Ziro.</p>
		<hr style={divider} />
		{
			edges.map( ({ node: { frontmatter: { path, location, area, title, enabled } } }, index) => {
				if (enabled) {
					return (
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
				return null
			})
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
	          enabled
	        }
	      }
	    }
	  }
	}
`

export default Home
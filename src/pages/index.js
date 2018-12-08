import React from 'react'
import { graphql } from 'gatsby'
import { Image } from 'cloudinary-react'
import { container, header, title, divider, job, name, tags } from '../styles/home-styles'

const Home = ({ data: { allMarkdownRemark: { edges } } }) =>
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
		<hr style={divider} />
		{
			edges.map( ({ node: { frontmatter: { location, area, title } } }, index) =>
				<div style={job} key={index}>
					<span style={name}>{title}</span>
					<div style={tags}>
						<span>{location}</span>
						<span>{area}</span>
					</div>
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
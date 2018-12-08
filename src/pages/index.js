import React from 'react'
import { graphql } from 'gatsby'
import { Image } from 'cloudinary-react'
import { container, header, title, divider } from '../styles/home-styles'

const Home = ({ data: { allMarkdownRemark: { edges } } }) => {
	console.log(edges)
	return (
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
	</div>
	)
}

export const pageQuery = graphql`
	query {
	  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
	    edges {
	      node {
	        frontmatter {
	          date(formatString: "DD MMMM, YYYY")
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
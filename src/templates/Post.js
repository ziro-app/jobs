import React from 'react'
import { graphql, Link } from 'gatsby'
import Parser from 'react-html-parser'
import { Image } from 'cloudinary-react'
import BackArrow from '../icons/BackArrow'
import translateDate from '../utils/translateDate'
import { container, nav, back, header } from '../styles/post-styles'

const Post = ({ data: { markdownRemark: { frontmatter: { date, title }, html } } }) =>
	<div style={container}>
		<div style={nav}>
			<Image
				cloudName='ziro'
				width='45'
				publicId='logo-round_kxn8sa'
				version='1508000699'
				format='png'
				secure='true'
				alt='logo'
		    />
		    <Link style={back} to='/'>
		    	<BackArrow size={18} />
		    	<p>Voltar</p>
		    </Link>
	   	</div>
		<h1 style={header}>{title}</h1>
		<span>{translateDate(date)}</span>
		{Parser(html)}
	</div>

export const pageQuery = graphql`
	query($path: String!) {
	 	markdownRemark(frontmatter: { path: { eq: $path } }) {
	 		html
	 		frontmatter {
	 			date(formatString: "DD MMMM, YYYY")
	 			title
	 		}
	 	}
	}
`

export default Post
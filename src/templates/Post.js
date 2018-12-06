import React from 'react'
import { graphql } from 'gatsby'
import Parser from 'react-html-parser'
import { Image } from 'cloudinary-react'
import translateDate from '../utils/translateDate'
import { container, header } from '../styles/post-styles'

const Post = ({ data: { markdownRemark: { frontmatter: { date, path, title }, html } } }) => {
	console.log(date)
	return (
	<div style={container}>
		<Image
			cloudName='ziro'
			width='45'
			publicId='logo-round_kxn8sa'
			version='1508000699'
			format='png'
			secure='true'
	    />
		<h1 style={header}>{title}</h1>
		<span>{translateDate(date)}</span>
		{Parser(html)}
	</div>
	)
}

export const pageQuery = graphql`
 query($path: String!) {
 	markdownRemark(frontmatter: { path: { eq: $path } }) {
 		html
 		frontmatter {
 			date(formatString: "DD MMMM, YYYY")
 			path
 			title
 		}
 	}
 }
`

export default Post
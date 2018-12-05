import React from 'react'
import { graphql } from 'gatsby'
import Parser from 'react-html-parser'
import { container, header } from '../styles/post-styles'

const Post = ({ data: { markdownRemark: { frontmatter: { date, path, title }, html } } }) =>
	<div style={container}>
		<div>
			<h1 style={header}>{title}</h1>
			<span>{date}</span>
			{Parser(html)}
		</div>
	</div>

export const pageQuery = graphql`
 query($path: String!) {
 	markdownRemark(frontmatter: { path: { eq: $path } }) {
 		html
 		frontmatter {
 			date(formatString: "MMMM DD, YYYY")
 			path
 			title
 		}
 	}
 }
`

export default Post
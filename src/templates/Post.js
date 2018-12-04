import React from 'react'
import { graphql } from 'gatsby'
import Parser from 'react-html-parser'

const Post = ({ data: { markdownRemark: { frontmatter: { date, path, title }, html } } }) =>
	<div>
		<div>
			<h1>{title}</h1>
			<h2>{date}</h2>
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
import React from 'react'
import { graphql } from 'gatsby'

const Post = ({ data }) => {
	const { markdownRemark } = data
	const { frontmatter, html } = markdownRemark
	return (
		<div className='blog-post-container'>
			<div className='blog-post'>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div className='blog-post-content' dangerouslySetInnerHtml={{ __html: html }} />
			</div>
		</div>
	)
}

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
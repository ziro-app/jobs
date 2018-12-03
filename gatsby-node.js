const path = require('path')

exports.createPages = ({ actions, graphql }) => {
	const { createPate } = actions
	const blogPostTemplate = path.resolve('src/templates/Blog.js')
	return graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter__date] }
				limit: 1000
			) {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}
		result.data.allMarkdownRemark.edges.forEach( ({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {}
			})
		})
	})
}
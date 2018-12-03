module.exports = {
	plugins: [
		'gatsby-plugin-netlify-cms',
		{
			resolve: 'gatbys-source-filesystem',
			options: {
				path: `${__dirname}/blog`,
				name: 'markdown-pages'
			}
		},
		'gatsby-transformer-remark'
	]
}
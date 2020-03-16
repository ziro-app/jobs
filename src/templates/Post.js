import React from 'react'
import { graphql, Link } from 'gatsby'
import Parser from 'react-html-parser'
import Logo from '@bit/vitorbarbosa19.ziro.logo'
import BackArrow from '../icons/BackArrow'
import translateDate from '../utils/translateDate'
import { container, nav, back, header } from '../styles/post-styles'

const Post = ({ data: { markdownRemark: { frontmatter: { date, title, enabled }, html } } }) =>
	<div style={container}>
		<div style={nav}>
			<Logo />
		    <Link style={back} to='/'>
		    	<BackArrow size={18} />
		    	<p>Voltar</p>
		    </Link>
	   	</div>
		<h1 style={header}>{ enabled ? title : `${title} (Vaga Encerrada)` }</h1>
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
	 			enabled
	 		}
	 	}
	}
`

export default Post
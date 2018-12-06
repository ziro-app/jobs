const translateMonth = month => {
	switch (month) {
		case 'January': return 'Janeiro'
		case 'February': return 'Fevereiro'
		case 'March': return 'Março'
		case 'April': return 'Abril'
		case 'May': return 'Maio'
		case 'June': return 'Junho'
		case 'July': return 'Julho'
		case 'August': return 'Agosto'
		case 'September': return 'Setembro'
		case 'October': return 'Outubro'
		case 'November': return 'Novembro'
		case 'December': return 'Dezembro'
	}
}

const translateDate = date => {
	const parts = date.split(' ').map( part => part.replace(',',''))
	const [ day, month, year ] = parts
	return `${day} ${translateMonth(month)}, ${year}`
}


export default translateDate
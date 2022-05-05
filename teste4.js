var ListaDePresenca = 
{
	"pessoa1": {
		"nome": "Cassiano",
		"idade": 32
	},

	"pessoa2": {
		"nome": "José",
		"idade": 54,
		"esportes": [{
				"tipo": "futebol",
				"horario": "10:00"
			},
			{
				"tipo": "basquete",
				"horario": "20:00"
			}
		]
	}
}


// obtendo todo o objeto da lista de presença
console.log(ListaDePresenca);

// obtendo uma pessoa da lista de presença
console.log(ListaDePresenca.pessoa1)

// obtendo o nome de uma pessoa da lista de presença
console.log(ListaDePresenca.pessoa1.nome)


console.log(ListaDePresenca.pessoa2.esportes[1].horario)
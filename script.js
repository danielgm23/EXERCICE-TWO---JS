/* 
- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀
*/
let verificaMedia 
const students = [
  {name: "Daniel",
   primeiraProva: 10,
   segundaProva: 9 
  },
  { name: "Ana",
    primeiraProva: 8,
    segundaProva: 7},
  { name: "calebe",
    primeiraProva: 4,
    segundaProva: 5 },
  { name: "Dourado",
    primeiraProva: 6,
    segundaProva: 6}
]

for (let aluno of students) {
  verificaMedia = (aluno.primeiraProva + aluno.segundaProva) / 2
  mediaProva(aluno,verificaMedia)
  
  
}

function mediaProva(aluno,verificaMedia){

  if (verificaMedia >= 7){
    alert(`Parabens ${aluno.name} a sua média é de ${verificaMedia}`)
  }
  else if (verificaMedia >= 5) {
    alert(`Aluno ${aluno.name} a sua média é de ${verificaMedia} \nserá necessario fazer recuperação`)
  }
  else {
    alert(`Aluno ${aluno.name} a sua média é de ${verificaMedia} \nVocê foi reprovado!`)

  }


}
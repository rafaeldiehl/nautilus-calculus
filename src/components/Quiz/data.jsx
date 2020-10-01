import firstQuestion from '../../assets/images/moneyExercises/firstQuestion.png';
import secondQuestion from '../../assets/images/moneyExercises/secondQuestion.png';
import thirdQuestion from '../../assets/images/moneyExercises/thirdQuestion.png';
import fourthQuestion from '../../assets/images/moneyExercises/fourthQuestion.png';
import fifthQuestion from '../../assets/images/moneyExercises/fifthQuestion.png';

const Data = [
  {
    id: 1,
    image: firstQuestion,
    imageDescription: 'Duas notas de 10 reais, duas moedas de 50 centavos e uma moeda de 25 centavos',
    question: 'Qual a quantia total em reais somando as cédulas e moedas acima?',
    findAnswer: ['R$ 20,75', 'R$ 21,25', 'R$ 21,75', 'R$ 22,25'],
    rightAnswer: 'R$ 21,25',
  },
  {
    id: 2,
    image: secondQuestion,
    imageDescription: 'Quatro moedas de 1 real, uma moeda de 25 centavos, duas moedas de 10 centavos e uma moeda de 5 centavos',
    question: 'Qual a quantia total em reais somando essas moedas?',
    findAnswer: ['R$ 4,00', 'R$ 4,25', 'R$ 4,50', 'R$ 4,75'],
    rightAnswer: 'R$ 4,50',
  },
  {
    id: 3,
    image: thirdQuestion,
    imageDescription: 'Duas notas de 5 reais, uma moeda de 1 real e duas moedas de cinquenta centavos',
    question: 'Se você compra um produto por R$ 15,00 e entrega a quantia acima, quanto receberá de troco?',
    findAnswer: ['R$ 2,50', 'R$ 3,00', 'R$ 3,50', 'R$ 4,00'],
    rightAnswer: 'R$ 3,00',
  },
  {
    id: 4,
    image: fourthQuestion,
    imageDescription: 'Uma nota de 10 reais, uma nota de 20 reais, uma moeda de 50 centavos, duas moedas de 10 centavos e uma moeda de 5 centavos',
    question: 'A quantia acima corresponde a quantas moedas de 25 centavos?',
    findAnswer: ['123', '127', '131', '135'],
    rightAnswer: '123',
  },
  {
    id: 5,
    image: fifthQuestion,
    imageDescription: 'Uma nota de 100 reais, uma nota de dois reais, duas moedas de 1 real, uma moeda de dez centavos e uma moeda de cinco centavos',
    question: 'Se sua compra custa R$ 120,00 e você entrega a quantia acima, quanto receberá de troco?',
    findAnswer: ['R$ 15,85', 'R$ 16,15', 'R$ 16,85', 'R$ 17,15'],
    rightAnswer: 'R$ 15,85',
  },
];

export default Data;

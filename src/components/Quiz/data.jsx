import firstQuestion from '../../assets/images/moneyExercises/firstQuestion.png';
import secondQuestion from '../../assets/images/moneyExercises/secondQuestion.png';
import thirdQuestion from '../../assets/images/moneyExercises/thirdQuestion.png';
import fourthQuestion from '../../assets/images/moneyExercises/fourthQuestion.png';
import fifthQuestion from '../../assets/images/moneyExercises/fifthQuestion.png';
import Model from '../../assets/images/model.jpg';

const Data = [
  {
    id: 1,
    image: firstQuestion,
    imageDescription: 'Lorem ipsum dolor sit amet',
    question: 'Qual a quantia total em reais somando as cédulas e moedas acima?',
    findAnswer: ['R$ 20,75', 'R$ 21,25', 'R$ 21,75', 'R$ 22,25'],
    rightAnswer: 'R$ 21,25',
  },
  {
    id: 2,
    image: secondQuestion,
    imageDescription: 'Lorem ipsum dolor sit amet',
    question: 'Qual a quantia total em reais somando essas moedas?',
    findAnswer: ['R$ 4,00', 'R$ 4,25', 'R$ 4,50', 'R$ 4,75'],
    rightAnswer: 'R$ 4,50',
  },
  {
    id: 3,
    image: thirdQuestion,
    imageDescription: 'Lorem ipsum dolor sit amet',
    question: 'Se você compra um produto por R$ 15,00 e entrega a quantia acima, quanto receberá de troco?',
    findAnswer: ['R$ 2,50', 'R$ 3,00', 'R$ 3,50', 'R$ 4,00'],
    rightAnswer: 'R$ 3,00',
  },
  {
    id: 4,
    image: fourthQuestion,
    imageDescription: 'Lorem ipsum dolor sit amet',
    question: 'A quantia acima corresponde a quantas moedas de 25 centavos?',
    findAnswer: ['123', '127', '131', '135'],
    rightAnswer: '123',
  },
  {
    id: 5,
    image: fifthQuestion,
    imageDescription: 'Se sua compra custa R$ 120,00 e você entrega a quantia acima, quanto receberá de troco?',
    question: 'Se sua compra custa R$ 120,00 e você entrega a quantia acima, quanto receberá de troco?',
    findAnswer: ['R$ 15,85', 'R$ 16,15', 'R$ 16,85', 'R$ 17,15'],
    rightAnswer: 'R$ 15,85',
  },
];

export default Data;

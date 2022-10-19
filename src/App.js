import logo from './sunflower.png';
import './App.css';
import {useState, useEffect} from 'react';
import {geraFrase} from './frases';

function App() {
  const [fraseEscolhida, setFraseEscolhida] = useState('');

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
  
    const difference = +new Date(`11/19/${year}`) - +new Date();

    let timeLeftObj = {};

    if (difference > 0) {
      timeLeftObj = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeftObj;
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  useEffect(() =>{
    setFraseEscolhida(geraFrase());
  }, []);

  // const timeLeftObj = calculateTimeLeft();

  
  
  const onClickGeraFrase = () => {
    
    setFraseEscolhida(geraFrase())
  }



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Faltam {timeLeft.days} dias, {timeLeft.hours} Horas, {timeLeft.minutes} minutos e {timeLeft.seconds} segundos para o dia mais feliz da minha vida!
        </p>
        <p>
          Emilly & Pedro ❤ de 19 de Novembro de 2022 para Sempre!
        </p>
        <p>
          
        </p>
        <p>
          Razões pelas quais eu me apaixono por você todos os dias!
        </p>
          <p>{fraseEscolhida}</p>
       <button onClick={onClickGeraFrase}>
            +Razões
       </button>
      </header>
    </div>
  );
}
export default App;


// Soli Deo Gloria

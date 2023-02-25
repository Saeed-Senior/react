import img from '../img/refresh.png';


function Buttons({num, setNum}){
   function plus(){
      setNum(num + 3);
   };
   function minus(){
      num > 1 ? setNum(num - 2) : setNum(0);
   };
   function reStart(){
      setNum(0);
   };

   return (
      <div className='main__buttons'>
            <button onClick={plus} className='main__btn'>
               <span>+</span>
            </button>
            <button onClick={reStart} className='main__btn'>
               <span><img src={img} alt="Сброс"/></span>
            </button>
            <button onClick={minus} className='main__btn'>
               <span>-</span>
            </button>
      </div>
   )
}


export default Buttons;


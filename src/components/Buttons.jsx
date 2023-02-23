import img from '../img/refresh.png';

const buttons = [
   {
      sign: '+',
      id: 1
   },
   {
      sign: <img src={img} alt="Сброс" />,
      id: 2
   },
   {
      sign: '-',
      id: 3
   },
]

function Buttons(){
   return (
      <div className='main__buttons'>
      {
         buttons.map((btn) => {
         return(
            <button className='main__btn' key={btn.id}>
               <span>{btn.sign}</span>
            </button>
         )
      })
   }
   </div>
   )
}


export default Buttons;


import logo from './cat.gif';

const col = [
   {
      name: 'Мохьмад',
      age: 32,
      address: {
         city: 'Грозный',
         homeNumber: 13,
      },
      id: 1,
   },
   {
      name: 'Али',
      age: 23,
      address: {
         city: 'Шали',
         homeNumber: 4,
      },
      id: 2,
   },
   {
      name: 'Рамзан',
      age: 41,
      address: {
         city: 'Гудурмес',
         homeNumber: 5,
      },
      id: 3,
   },
   {
      name: 'Асхьаб',
      age: 27,
      address: {
         city: 'Курчалой',
         homeNumber: 64,
      },
      id: 4,
   },
   {
      name: 'Расул',
      age: 36,
      address: {
         city: 'Урус-Мартан',
         homeNumber: 8,
      },
      id: 5,
   },
]

export function List(props) {
return(
   <>
   {col.map((item) => {
      return(
         <div key={item.id} className = 'column'>
            <img src={logo} alt="" />
            <h2>{props.title}.</h2>
            <p>{`Имя: ${item.name}`}</p>
            <p>{`Возраст: ${item.age}`}</p>
            <h3>Адрес.</h3>
            <div>
               <p>{`Город: ${item.address.city}`}</p>
               <span>{`Дом номер: ${item.address.homeNumber}`}</span>
            </div>
         </div>
      )
   })}
   </>
);
}
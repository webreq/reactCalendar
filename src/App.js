import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
function App() {
  const [tgl,setTgl] = useState(new Date())
  const events = ['01-08-2022','07-08-2022','11-08-2022','20-08-2022','15-08-2022','29-08-2022']
  return (
    <div className="w-full h-full p-10">
      <Calendar className="w-96 h-full rounded-xl bg-violet-300" onChange={setTgl} value={tgl}
        tileClassName={({date})=>{
          let day = date.getDate()
          let month = date.getMonth()+1
          if(date.getMonth()<10){
            month = '0'+month
          }
          if(date.getDate()<10){
            day = '0'+day
          }
          const realDate = day+'-'+month+'-'+date.getFullYear()
          if(events.find(val=> val===realDate)){
            return 'highlight'
          }
        }}
       />
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import TimePicker from 'react-time-picker';
import './App.css';

function App() {
  const[selectDay,setSelectDay]=useState('Monday');
  const[selectTime,setSelectTime]=useState('08:00');
  const[selectActivity,setSelectActivity]=useState('wake up');
  const dayOfWeek=[
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const activities=[
    'Wake up',
    'Go to gym',
    'Breakfast',
    'Meetings',
    'Lunch',
    'Quick nap',
    'Go to library',
    'Dinner',
    'Go to sleep',
  ];
  const scheduleRemainder=()=>{
    const reminderTime=new Date();
    const[hours,minutes]=selectTime.split(':').map(Number);
    reminderTime.setHours(hours,minutes,0);
    const now=new Date();
    const timeToRemainder=reminderTime.getTime()-now.getTime();
    if(timeToRemainder>0)
    {
      setTimeout(()=>{
        alert(`It's time for ${selectActivity}!`);

      },timeToRemainder);
    }
    else{
      alert('Selected time is in the past,Please choose a future time.');
    }
  };
  return(
    <div className='App'>
    <h1>Reminder App</h1>
    <div className='form-group'>
    <label>Day of the week:</label>
    <select
    value={selectDay}
    onChange={(e)=>setSelectDay(e.target.value)}>
    {dayOfWeek.map((day)=>(
      <option key={day} value={day}>
      {day}
      </option>
    ))}
    </select>
    </div>
    <div className='form-group'>
    <label>Time:</label>
    <TimePicker
          onChange={setSelectTime}
          value={selectTime}
          className="time-picker"
        />
    </div>
    <div className='form-group'>
    <label>Activity:</label>
    <select
    value={selectActivity}
    onChange={(e)=>setSelectActivity(e.target.value)}>
    {activities.map((activity)=>(
      <option key={activity} value={activity}>
      {activity}
      </option>
    ))}
    </select>
    </div>
    <button onClick={scheduleRemainder}>Set Reminder</button>
    </div>
  )
}

export default App;

import './App.css';
import {SlotsTable} from "./MyComponents/SlotsTable";
const timeSlots = ["6:00-6:45 AM", "7:00-7:45 AM", "8:00-8:45 AM", "4:00-4:45 PM", "5:00-5:45 PM", "6:00-6:45 PM", "7:00-7:45 PM", "8:00-8:45 PM"];
function App() {
  return (
    <div className="App">
        <h3>Select Your Gym Slot</h3>
        <SlotsTable timeSlots={timeSlots}/>
    </div>
  );
}

export default App;

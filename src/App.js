import './App.css';
import {SlotButton} from "./MyComponents/SlotButton";
import {SlotsTableContent} from "./MyComponents/SlotsTableContent";
const timeSlots = ["6:00-6:45 AM", "7:00-7:45 AM", "8:00-8:45 AM", "4:00-4:45 PM", "5:00-5:45 PM", "6:00-6:45 PM", "7:00-7:45 PM", "8:00-8:45 PM"];
function App() {
  return (
    <div className="App">
        <h3>Select Your Gym Slot</h3>
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Device IMEI</th>
                <th scope="col">Model Name</th>
                <th scope="col">Transfer To</th>
                <th scope="col">Withdraw Transfer</th>
            </tr>
            </thead>
            <tbody>
            {timeSlots.map((timeslots,index) => {
                return <SlotsTableContent timeSlots={timeslots} index={index}/>
            })}
        </tbody>
        </table>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {SlotsTablePage} from "./MyComponents/SlotsTablePage";
import {LoginPage} from "./MyComponents/LoginPage";
import {useState} from "react";
import {SelectDaysPage} from "./MyComponents/SelectDaysPage";
import {MarkAttendancePage} from "./MyComponents/MarkAttendancePage";
import {ConfirmSlotPage} from "./MyComponents/ConfirmSlotPage";
import 'react-toastify/dist/ReactToastify.css'
import {toast, ToastContainer} from "react-toastify";

const timeSlots = ["6:00-6:45 AM", "7:00-7:45 AM", "8:00-8:45 AM", "4:00-4:45 PM", "5:00-5:45 PM", "6:00-6:45 PM", "7:00-7:45 PM", "8:00-8:45 PM"];

function App() {
    const [userSNUID, setUserSNUID] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [selectedDaysCode, setSelectedDaysCode] = useState("")
    const [selectedDaysText, setSelectedDaysText] = useState("")
    const [confirmSelectionDisabled, setConfirmSelectionButtonDisabled] = useState(true)
    const [selectedSlotNumber, setSelectedSlotNumber] = useState("")
    const [selectedSlotText, setSelectedSlotText] = useState("")


    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/login"
                           element={<>
                               <LoginPage userSNUID={userSNUID}
                                          setUserSNUID={setUserSNUID}
                                          loginPassword={loginPassword}
                                          setLoginPassword={setLoginPassword}/></>}/>

                    <Route exact path="/book-slot"
                           element={<><h3>Select Your Gym Slot</h3>
                               <SlotsTablePage timeSlots={timeSlots}
                                               userSNUID={userSNUID}
                                               setUserSNUID={setUserSNUID}
                                               selectedDaysText={selectedDaysText}
                                               setSelectedDaysText={setSelectedDaysText}
                                               selectedDaysCode={selectedDaysCode}
                                               setSelectedDaysCode={setSelectedDaysCode}
                                               setConfirmSelectionButtonDisabled={setConfirmSelectionButtonDisabled}
                                               setSelectedSlotNumber={setSelectedSlotNumber}
                                               setSelectedSlotText={setSelectedSlotText}
                                               selectedSlotNumber={selectedSlotNumber}
                                               selectedSlotText={selectedSlotText}
                               /></>}/>

                    <Route exact path="/select-days"
                           element={<>
                               <SelectDaysPage userSNUID={userSNUID}
                                               setUserSNUID={setUserSNUID}
                                               selectedDaysText={selectedDaysText}
                                               setSelectedDaysText={setSelectedDaysText}
                                               selectedDaysCode={selectedDaysCode}
                                               setSelectedDaysCode={setSelectedDaysCode}
                                               confirmSelectionDisabled={confirmSelectionDisabled}
                                               setConfirmSelectionButtonDisabled={setConfirmSelectionButtonDisabled}/></>}/>

                    <Route exact path="/mark-attendance"
                           element={<>
                               <MarkAttendancePage setUserSNUID={setUserSNUID}
                                                   userSNUID={userSNUID}
                                                   selectedDaysCode={selectedDaysCode}
                                                   setSelectedDaysCode={setSelectedDaysCode}
                                                   selectedDaysText={selectedDaysText}
                                                   setSelectedDaysText={setSelectedDaysText}
                                                   selectedSlotNumber={selectedSlotNumber}
                                                   setSelectedSlotNumber={setSelectedSlotNumber}
                                                   selectedSlotText={selectedSlotText}
                                                   setSelectedSlotText={setSelectedSlotText}
                                                   timeslots={timeSlots}
                               /></>}/>

                    <Route exact path="/confirm-slot"
                           element={<>
                               <ConfirmSlotPage setUserSNUID={setUserSNUID}
                                                setSelectedDaysCode={setSelectedDaysCode}
                                                setSelectedDaysText={setSelectedDaysText}
                                                selectedDaysText={selectedDaysText}
                                                selectedDaysCode={selectedDaysCode}
                                                setConfirmSelectionButtonDisabled={setConfirmSelectionButtonDisabled}
                                                setSelectedSlotNumber={setSelectedSlotNumber}
                                                setSelectedSlotText={setSelectedSlotText}
                                                selectedSlotNumber={selectedSlotNumber}
                                                selectedSlotText={selectedSlotText}
                                                userSNUID={userSNUID}
                               /></>}/>


                    <Route exact path="/" element={<Navigate to="/login"/>}/>
                </Routes>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;

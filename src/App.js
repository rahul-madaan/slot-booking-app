import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import {SlotsTablePage} from "./MyComponents/SlotsTablePage";
import {LoginPage} from "./MyComponents/LoginPage";
import {useState} from "react";
import {SelectDaysPage} from "./MyComponents/SelectDaysPage";

const timeSlots = ["6:00-6:45 AM", "7:00-7:45 AM", "8:00-8:45 AM", "4:00-4:45 PM", "5:00-5:45 PM", "6:00-6:45 PM", "7:00-7:45 PM", "8:00-8:45 PM"];

function App() {
    const [userSNUID, setUserSNUID] = useState("")
    const [loginOTP, setLoginOTP] = useState("")
    const [selectedDaysCode, setSelectedDaysCode] = useState("")


    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/login"
                           element={<>
                               <LoginPage userSNUID={userSNUID}
                                          setUserSNUID={setUserSNUID}
                                          loginOTP={loginOTP}
                                          setLoginOTP={setLoginOTP}/></>}/>

                    <Route exact path="/book-slot"
                           element={<><h3>Select Your Gym Slot</h3>
                               <SlotsTablePage timeSlots={timeSlots} selectedDaysCode={selectedDaysCode}/></>}/>

                    <Route exact path="/select-days"
                           element={<>
                               <SelectDaysPage selectedDaysCode={selectedDaysCode}
                                               setSelectedDaysCode={setSelectedDaysCode}
                                               userSNUID={userSNUID}
                                               setUserSNUID={setUserSNUID}/></>}/>

                    <Route exact path="/" element={<Navigate to="/login"/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default App;

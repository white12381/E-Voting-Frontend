import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Navbar from "./components/navbar"
import DashboardPage from "./pages"
import CreateDecisionRoom from "./pages/createDecisionRoom"
import VeiwDecisionRooms from "./pages/veiwDecisionRooms"
import VeiwDecisionRoom from "./pages/veiwDecisionRoom"
import VoteDecisionRoom from "./pages/voteDecisionRoom"
import { useEffect } from "react"

const Dashboard = () => {
    const pathname = useLocation()
    const navigate = useNavigate();
    useEffect(() => {
if(!localStorage.getItem('token')){
navigate('/')
}
    },[pathname])
    return <>
        <Navbar />
        <div className="mt-20 px-4 md:px-6 lg:px-10">
            <Routes>
                <Route index={true} element={<DashboardPage />} />
                <Route path="/create-room" element={<CreateDecisionRoom />} />
                <Route path="/my-rooms" element={<VeiwDecisionRooms />} />
                <Route path="/my-room/:id" element={<VeiwDecisionRoom />} />
                <Route path="/vote-decison" element={<VoteDecisionRoom />} />

            </Routes>
        </div>
    </>
}
export default Dashboard
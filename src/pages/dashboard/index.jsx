import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Navbar from "./components/navbar"
import DashboardPage from "./pages"
import CreateDecisionRoom from "./pages/createDecisionRoom"
import VeiwDecisionRooms from "./pages/veiwDecisionRooms"
import VeiwDecisionRoom from "./pages/veiwDecisionRoom"
import VoteDecisionRoom from "./pages/voteDecisionRoom"
import { useEffect } from "react"
import VeiwCandidateVote from "./pages/veiwCandidateVote"

const Dashboard = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate();
    
  useEffect(() => {
    const token = localStorage.getItem('token');

    const isProtectedRoute =  !pathname.includes('/dashboard/vote-decison');

    if (!token && isProtectedRoute) {
      navigate('/');
    }
  }, [pathname, navigate]);
    return <>
        <Navbar />
        <div className="mt-20 px-4 md:px-6 lg:px-10">
            <Routes>
                <Route index={true} element={<DashboardPage />} />
                <Route path="/create-room" element={<CreateDecisionRoom />} />
                <Route path="/my-rooms" element={<VeiwDecisionRooms />} />
                <Route path="/my-room/:id" element={<VeiwDecisionRoom />} />
                <Route path="/vote-decison" element={<VoteDecisionRoom />} />
                <Route path="/my-room/:id/:candidate" element={<VeiwCandidateVote />} />

            </Routes>
        </div>
    </>
}
export default Dashboard
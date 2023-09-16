import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from '../../screens/login'
import SignUp from '../../screens/signup'
import { Link } from '@mui/material'
import Dashboard from '../../screens/DashBoard/DashBoard'
import Call from '../../screens/component/CallComponent'
import Project from '../../screens/Project'
import AddProject from '../../screens/AddProject'
export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Call />} />
                <Route path='BADashboard/*' element={<Dashboard />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='projet' element={<Project />} />
                <Route path='AddProject' element={<AddProject />} />
            </Routes>
        </Router>
    )
}
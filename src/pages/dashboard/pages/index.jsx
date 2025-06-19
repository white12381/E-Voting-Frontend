import { Link } from "react-router-dom"
const DashboardPage = () => {
    return <div>
        <p className="dashboardPage">   Dashboard Page </p>
        <div className="grid grid-cols-2 md:grid-cols-3 md:gap-6 mt-6 text-gray-600 text-sm">
            <Link className="dashboardLink" to={'/dashboard/create-room'}>
                <img src={'/vite.svg'} className="block mx-auto" width={60} height={40} />
                <h1 className="font-bold">Create Decision</h1>
                <p>Click to create a new decision Room.</p>
            </Link>

            <Link className="dashboardLink" to={'/dashboard/my-rooms'}>
                <img src={'/vite.svg'} className="block mx-auto" width={60} height={40} />
                <h1 className="font-bold">Manage Decision Rooms</h1>
                <p>Click to veiw, update and edit my Decision Rooms.</p>
            </Link>


            <Link className="dashboardLink" to={`/dashboard/vote-decison`}>
                <img src={'/vite.svg'} className="block mx-auto" width={60} height={40} />
                <h1 className="font-bold">Vote Annonymously</h1>
                <p>Click to Vote annoymously in a decision Room.</p>
            </Link>
        </div>
    </div>
}
export default DashboardPage
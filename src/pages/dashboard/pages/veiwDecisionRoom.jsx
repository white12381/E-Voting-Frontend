import { Table } from "antd";
import { Link, useParams } from "react-router-dom";
import { useApIServiceGetQuery } from "../../../app/api/apiService";
import Veiw from "../../../assets/images/view.svg"

const VeiwDecisionRoom = () => {
    const {id} = useParams()
    
        const {  data: Room } = useApIServiceGetQuery(`/voting/room/${id}`); 
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
        },
        
         {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        }
    ] 
    const candidateCounts = new Map();
Room?.voters?.forEach((voter) => {
  const count = candidateCounts.get(voter?.candidateName) || 0;
  candidateCounts.set(voter?.candidateName, count + 1);
});

const data = Array.from(candidateCounts, ([candidateName, count]) => ({ name: candidateName, count,

 action:
            <div className="flex space-x-3 items-center"> <Link
                to={`/dashboard/my-room/${id}/${candidateName}`}
            ><img alt="veiw" src={Veiw} width={18} height={18} className="cursor-pointer" /> </Link>
             </div>
}));
    return <>
        <h1 className="dashboardPage">   {Room?.room?.title} </h1>
        <p className="mt-4 text-sm text-gray-600 font-semibold">
      {Room?.room?.description}
        </p>
        <h2 className="dashboardPage my-6">   Contestant </h2>

        <Table columns={columns} dataSource={data} 
          footer={() => (
    <div style={{ textAlign: 'right' }}>
      <strong>Total Votes:</strong> {Room?.voters?.length}
    </div>
  )}
        />

    </>
}
export default VeiwDecisionRoom
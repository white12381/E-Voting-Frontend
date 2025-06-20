import { Table } from "antd";
import { useParams } from "react-router-dom";
import { useApIServiceGetQuery } from "../../../app/api/apiService";

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
    ] 
    const candidateCounts = new Map();
Room?.voters?.forEach((voter) => {
  const count = candidateCounts.get(voter?.candidateName) || 0;
  candidateCounts.set(voter?.candidateName, count + 1);
});

const data = Array.from(candidateCounts, ([candidateName, count]) => ({ name: candidateName, count}));
    return <>
        <h1 className="dashboardPage">   {Room?.room?.title} </h1>
        <p className="mt-4 text-sm text-gray-600 font-semibold">
      {Room?.room?.description}
        </p>
        <h2 className="dashboardPage my-6">   Contestant </h2>

        <Table columns={columns} dataSource={data} />

    </>
}
export default VeiwDecisionRoom
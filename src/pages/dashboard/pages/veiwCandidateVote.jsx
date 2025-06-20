import { useParams } from "react-router-dom";
import { useApIServiceGetQuery } from "../../../app/api/apiService";
import formatDate from "../../../utils/function/formatDate";
import { Table } from "antd";

const VeiwCandidateVote = () => {
    const { id, candidate } = useParams()
    const { data: Room } = useApIServiceGetQuery(`/voting/room/${id}`);
     const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
    ] 
    const data = Room?.voters?.filter(dat => dat?.candidateName === candidate)?.map(dat => ({
        name: dat?.fullName, date: formatDate(dat?.createdAt)
    }))
    return <>
        <h1 className="dashboardPage">   {Room?.room?.title} </h1>
        <p className="mt-4 text-sm text-gray-600 font-semibold">
      {Room?.room?.description}
        </p>
        <h2 className="dashboardPage my-6 capitalize">   {candidate} </h2>
<Table columns={columns} dataSource={data} 
          footer={() => (
    <div style={{ textAlign: 'right' }}>
      <strong>Total Votes:</strong> {Room?.voters?.filter(dat => dat?.candidateName === candidate)?.length}
    </div>
  )}
        />

    </>
}
export default VeiwCandidateVote
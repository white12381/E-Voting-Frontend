import { Space, Table, Tag } from "antd"
import Veiw from "../../../assets/images/view.svg"
import { Link } from "react-router-dom";
const VeiwDecisionRooms = () => {
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
        },

        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Deadline',
            dataIndex: 'deadline',
            key: 'deadline',
        },
        {
            title: 'Total Vote',
            dataIndex: 'totalVote',
            key: 'totalVote',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
        },

    ];
    const data = [
        {
            key: '1', deadline: 'Monday, 1st 2024, 3pm', totalVote: 290,
            title: 'John Brown',
            description: 'Lorem',
             action: 
             <Link
             to={`/dashboard/my-room/4`}
             ><img alt="veiw" src={Veiw} width={18} height={18} className="cursor-pointer" /> </Link>
        }
    ];
    return <>
        <p className="dashboardPage">   My Decision Rooms </p>

      
        <Table columns={columns} dataSource={data} />

    </>
}
export default VeiwDecisionRooms
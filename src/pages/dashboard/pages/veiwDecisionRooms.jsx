import {  Table,  } from "antd"
import Veiw from "../../../assets/images/view.svg"
import { Link } from "react-router-dom";
import LineLoader from "../../../component/lineLoader";
import { useApIServiceGetQuery } from "../../../app/api/apiService";
import formatDate from "../../../utils/function/formatDate";
import { IoCopyOutline } from "react-icons/io5";
import { BsShare } from "react-icons/bs";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
const VeiwDecisionRooms = () => {
    const { isFetching, data: Rooms } = useApIServiceGetQuery(`/voting/my-rooms`);
    const [copied, setCopied] = useState([])
  function copyLink(dat) {
  const link = `${window.location.origin}/dashboard/vote-decison?id=${dat?._id}`;
  navigator.clipboard.writeText(link)
    .then(() => setCopied([...copied, dat?._id]))
    .catch((error) => console.error('Error copying link:', error));
}


function shareLink(dat) {
  const url = `${window.location.origin}/dashboard/vote-decison?id=${dat?._id}`;
  const title = "Vote Decision";
  const text = "Check out the vote decision";

  if (navigator.share) {
    navigator.share({ title, text, url })
      .then(() => console.log('Link shared successfully'))
      .catch((error) => console.error('Error sharing link:', error));
  } else {
    console.log('Web Share API not supported'); 
    navigator.clipboard.writeText(url)
      .then(() => console.log('Link copied to clipboard'))
      .catch((error) => console.error('Error copying link:', error));
  }
}
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
    const data = Rooms?.map(dat => ({
        key: dat?._id, deadline: formatDate(dat?.deadline), title: dat?.title, totalVote: dat?.totalVotes, description: dat?.description,
        action:
            <div className="flex space-x-3 items-center"> <Link
                to={`/dashboard/my-room/${dat?._id}`}
            ><img alt="veiw" src={Veiw} width={18} height={18} className="cursor-pointer" /> </Link>
                {!copied?.includes(dat._id) ? <IoCopyOutline onClick={() => copyLink(dat)} width={18} height={18} className="cursor-pointer block" /> : 
                <IoMdCheckmark width={18} height={18} className="cursor-pointer block" />
                }
                <BsShare onClick={() => shareLink(dat?.title, dat?.description)} width={18} height={18} className="cursor-pointer block" />
            </div>
    }))
    return <>
        <p className="dashboardPage">   My Decision Rooms </p>

        {isFetching ? <LineLoader /> :
            <Table columns={columns} dataSource={data} />}

    </>
}
export default VeiwDecisionRooms
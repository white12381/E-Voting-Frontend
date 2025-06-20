import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useApiServicePostMutation } from "../../../app/api/apiService";
import { Toastify } from "../../../utils/Toastify/toast";
import Loader from "../../../component/loader";

const CreateDecisionRoom = () => {
  const [contestantName, setContestantName] = useState('');
  const [contestantNames, setContestantNames] = useState([]);
  const [createDecisionRoom, { isLoading }] = useApiServicePostMutation()
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datas = {
        "title": e.target.title.value,
        "contestantName": contestantNames,
        "deadline": e.target.deadline.value, description: e.target.description.value
      }
      const response = await createDecisionRoom({ path: '/voting/create-voting', datas }).unwrap()
      response && Toastify('Voting Room Created Successfully', 'success');
      response && navigate('/dashboard/my-rooms')
    } catch (err) {
      console.log('err', err)
      Toastify(err.data.error, 'error')
    }
  };
  return <>
    <p className="dashboardPage">   Create Decision Room </p>
    <form onSubmit={handleSubmit} className="recaptureForm">
      <div>
        <label>Title</label>
        <input required name="title" placeholder="Enter Title" />
      </div>

      <div>
        <label>Description</label>
        <textarea

          className="h-24"
          placeholder="Enter Description"
          name="description"
        />
      </div>


      <div>
        <label>Contestant Name</label>
        <div className="flex space-x-1">
          <input value={contestantName} onChange={e => setContestantName(e.target.value)} name="name" placeholder="Enter DeadLine" />
          <button onClick={() => {
            if (contestantNames?.length < 5 && contestantName && !contestantNames?.includes(contestantName?.toLowerCase())) {
              setContestantNames([...contestantNames, contestantName?.toLowerCase()]);
              setContestantName('')
            }
          }}
            type="button"
            className="p-3 font-bold  text-white  rounded bg-primary
                  hover:bg-primary text-sm font-nunito text-center mx-auto md:col-span-3"
          >
            Add
          </button>
        </div>
        <ul className="my-4 space-y-2 list-disc capitalize">
          {
            contestantNames?.map((contestant, index) => <li className="flex justify-between items-center"><p>{contestant} </p>
              <p onClick={() =>
                setContestantNames([...contestantNames.slice(0, index), ...contestantNames.slice(index + 1)])}
                className="bg-red-900 text-white p-1 rounded cursor-pointer hover:bg-red-900/80">X</p></li>)
          }
        </ul>
      </div>
      <div>
        <label>Deadline</label>
        <input required name="deadline" type="datetime-local" placeholder="Enter DeadLine" />
      </div>
      <button
        type="submit"
        className="p-3 font-bold  text-white  rounded bg-primary
                  hover:bg-primary text-sm font-nunito text-center mx-auto md:col-span-3"
      >
        {isLoading ? <Loader /> : "Submit"}
      </button>
    </form>
  </>
}
export default CreateDecisionRoom
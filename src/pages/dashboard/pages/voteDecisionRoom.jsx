import { useEffect, useRef, useState } from "react";
import SearchForm from "../components/searchForm"
import { useApIServiceGetQuery, useApiServicePostMutation } from "../../../app/api/apiService";
import { Toastify } from "../../../utils/Toastify/toast";
import { useNavigate } from "react-router-dom";
import Loader from "../../../component/loader";

const VoteDecisionRoom = () => {
  const [search, setSearch] = useState('');
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  useEffect(() => {
    setSearch(id)
  }, [id]);
  const navigate = useNavigate();
  const formRef = useRef()
  const [vote, { isLoading }] = useApiServicePostMutation()
  const { data, isFetching } = useApIServiceGetQuery(`/voting/room/${search}`)
  const [candidateName, setCandidateName] = useState('')
  const [annoymous, setAnonymous] = useState('No')
  const handleSubmit = async (e) => {
    e.preventDefault();
    const datas = {
      "userId": annoymous === "No" ? JSON.parse(localStorage.getItem('userInfo'))?._id : null,
      "roomId": search,
      "title": data?.room?.title,
      "fullName": e.target.fullName.value,
      "candidateName": candidateName
    }
    try {
      const response = await vote({ path: '/voting/select-candidate', datas }).unwrap()
      response && Toastify("Vote Recorded SuccessFully", "success");
      response && formRef.current.reset()
      
    } catch (err) {
      Toastify(err.data.error, 'error')}
    }
    useEffect(() => {
setAnonymous(!localStorage.getItem('token') ? 'Yes' : "No")
    },[])
    return <>
      <p className="dashboardPage">   Vote for Candidates </p>
      {!id && <SearchForm isFetching={isFetching} search={search} setSearch={setSearch} />}
      <form ref={formRef} onSubmit={handleSubmit} className="recaptureForm">
        <div>
          <label>Title</label>
          <input required placeholder="Enter Title" readOnly value={data?.room?.title} />
        </div>
        <div>
          <label>Full Name</label>
          <input required name="fullName" defaultValue={JSON.parse(localStorage.getItem('userInfo'))?.fullName} placeholder="Enter Your Full Name" />
        </div>
        <div>
          <label>Select Candidate</label>
          <div className="space-y-4 mt-4">
            {data?.room?.contestantName?.map(dat => <label className="!flex space-x-4">
              <p>{dat}</p> <input type="radio" onClick={() => setCandidateName(dat)} value={dat} name="candidate" className="accent-primary !block" /> </label>)
            }

          </div>
        </div>
   { localStorage.getItem('token') &&    <div>
          <label>Vote Annonymously</label>
          <div className="flex space-x-8 mt-4">
            <label className="!flex space-x-2">
              <p>Yes</p> <input onClick={() => setAnonymous("Yes")} defaultChecked={annoymous === "Yes"} type="radio" name="anonymous" className="accent-primary !block" /> </label>

            <label className="!flex space-x-2">
              <p>No</p> <input type="radio" onClick={() => setAnonymous('No')} defaultChecked={annoymous === "No"} name="anonymous" className="accent-primary !block" /> </label>
          </div>
        </div>
}
        <button
          type="submit"
          className="p-3 font-bold  text-white  rounded bg-primary
                  hover:bg-primary text-sm font-nunito text-center mx-auto md:col-span-3"
        >
          {isLoading ? <Loader/> : "Submit"}
        </button>
      </form>
    </>
  }
  export default VoteDecisionRoom
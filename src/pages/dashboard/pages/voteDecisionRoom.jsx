import SearchForm from "../components/searchForm"

const VoteDecisionRoom = () => {
    return <>
        <p className="dashboardPage">   Vote for Candidates </p>
        <SearchForm/>
        <form className="recaptureForm">
 <div>
        <label>Title</label>
        <input required name="name" placeholder="Enter Title" readOnly value={`Presidential Election`} />
      </div>
       <div>
        <label>Full Name</label>
        <input required name="name" placeholder="Enter Your Full Name" />
      </div>
       <div>
        <label>Select Candidate</label> 
        <div className="space-y-4 mt-4">
<label className="!flex space-x-4">
    <p>User 1</p> <input type="radio" name="candidate" className="accent-primary !block" /> </label>
    <label className="!flex space-x-4">
    <p>User 2</p> <input type="radio" name="candidate" className="accent-primary !block" /> </label>
        </div>
      </div>
         <div>
        <label>Vote Annonymously</label> 
                <div className="flex space-x-8 mt-4">
<label className="!flex space-x-2">
    <p>Yes</p> <input type="radio" name="candidate" className="accent-primary !block" /> </label>
    
<label className="!flex space-x-2">
    <p>No</p> <input type="radio" name="candidate" className="accent-primary !block" /> </label>
    </div>
        </div>
        <button
        type="submit"
        className="p-3 font-bold  text-white  rounded bg-primary
                  hover:bg-primary text-sm font-nunito text-center mx-auto md:col-span-3"
      >
        Submit
      </button>
        </form>
    </>
}
export default VoteDecisionRoom
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Toastify } from "../utils/Toastify/toast";
import { useApiServicePatchMutation } from "../app/api/apiService";
import Loader from "../component/loader";

const ResetPassword = () => {
  const { id } = useParams(); // gets the id from the URL path
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token');
  const [resetPassword, { isLoading }] = useApiServicePatchMutation()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datas = {
        "oldPassword": e.target.oldPassword.value,
        "newPassword": e.target.newPassword.value,
        "confirmPassword": e.target.confirmPassword.value
      }
      const response = await resetPassword({ path: `user/${id}/change-password?token=${token}`, datas }).unwrap()
      response && Toastify('Password Reset Successful', "success")
      response && navigate('/')
    } catch (err) {
      Toastify(err.data.error, 'error')
    }
  }
  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen">
      <section className="bg-primary flex flex-col gap-3 items-center justify-center p-6">
        <img src="/vite.svg" alt="vite" className="h-20 w-20 md:w-40 md:h-40" />
        <h1 className="text-center font-bold text-white lg:text-2xl md:text-xl text-base">
          Digixel Voting
        </h1>
      </section>
      <section className="flex gap-4 flex-col items-center  justify-center bg-white rounded-xl">
        <form onSubmit={handleSubmit} className="p-6 md:p-2 m-4 w-full md:w-2/3  rounded-xl">
          <h1 className="text-primary font-semibold text-base lg:text-xl">
            Reset Password
          </h1>
          <p className="font-bold  text-sm text-black mt-4 mb-6">
            Recover Your Password
          </p>
          <div className="space-y-1">
            <label className="label">Old Password</label>
            <input name="oldPassword" className="input" />
          </div>

          <div className="space-y-1 mt-6">
            <label className="label">Password</label>
            <input type="password" name="newPassword" className="input" />
          </div>

          <div className="space-y-1 mt-6">
            <label className="label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="input" />
          </div>
          <button className="btn !mt-6">{isLoading ? <Loader/> : "Submit"}</button>
        </form>
        <p className="text-xs text-black text-center">
          Don&apos;t have any account?{" "}
          <Link to={"/register"} className="text-primary font-semibold">
            Sign up
          </Link>
        </p>
      </section>
    </div>
  );
};
export default ResetPassword;

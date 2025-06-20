import { Link, useNavigate } from "react-router-dom";
import { Toastify } from "../utils/Toastify/toast";
import { useApiServicePostMutation } from "../app/api/apiService";
import Loader from "../component/loader";

const Register = () => {
  const [register, { isLoading }] = useApiServicePostMutation()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const datas = {
        "fullName": e.target.fullName.value,
        "email": e.target.email.value?.toLowerCase(),
        "phoneNumber": e.target.phoneNumber.value,
        "password": e.target.password.value,
        "confirmPassword": e.target.confirmPassword.value
      }
      const response = await register({ path: '/user/register', datas }).unwrap()
      response && localStorage.setItem('token', response.token)
      response && localStorage.setItem('userInfo', JSON.stringify(response.user))
      response && navigate('/dashboard')
    } catch (err) {
      Toastify(err.data.error, 'error')
    }
  };
  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen">
      <section className="bg-white flex flex-col gap-3 items-center justify-center p-6">
        <img src="/vite.svg" alt="vite" className="h-20 w-20 md:w-40 md:h-40" />
        <h1 className="text-center font-bold text-primary lg:text-2xl md:text-xl text-base">
          Digixel Voting
        </h1>
      </section>
      <section className="flex gap-4 flex-col items-center  justify-center bg-white rounded-xl">
        <form onSubmit={handleSubmit} className="p-6 md:p-2 m-4 w-full md:w-2/3  rounded-xl">
          <h1 className="text-primary font-semibold text-base lg:text-xl">
            Create an account
          </h1>
          <p className="font-bold  text-sm text-black mt-4 mb-6">
            Sign up to Register
          </p>

          <div className="space-y-1">
            <label className="label">Full Name</label>
            <input className="input" name="fullName" />
          </div>

          <div className="space-y-1 mt-4">
            <label className="label">Phone Number</label>
            <input type="tel" name="phoneNumber" className="input" />
          </div>
          <div className="space-y-1 mt-4">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" />
          </div>
          <div className="space-y-1 mt-4">
            <label className="label">Password</label>
            <input type="password" name="password" className="input" />
          </div>

          <div className="space-y-1 mt-4">
            <label className="label">Confirm Password</label>
            <input type="password" name="confirmPassword" className="input" />
          </div>
          <p className="text-black font-semibold text-sm mt-1 text-center">
            By registering, i agree to{" "}
            <Link target="_blank" to={"/terms-and-conditions"} className="text-primary">
              Digixel Terms and Conditions and Privacy Policy{" "}
            </Link>
          </p>
          <button className="bg-primary w-full mt-4 rounded-md text-white p-2 hover:bg-primary/50">
            {isLoading ? <Loader /> : `Sign Up`}
          </button>
        </form>
        <p className="text-xs text-black text-center mb-6">
          Have an account?
          <Link className="text-primary font-semibold" to={"/"}>
            Sign in
          </Link>
        </p>
      </section>
    </div>
  );
};
export default Register;

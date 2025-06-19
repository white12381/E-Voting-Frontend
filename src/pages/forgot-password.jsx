import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault(); navigate('/reset-password');
    }
  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen">
      <section className="bg-primary flex flex-col gap-3 items-center justify-center p-6">
        <img src="/vite.svg" alt="vite" className="h-20 w-20 md:w-40 md:h-40" />
        <h1 className="text-center font-bold text-white lg:text-2xl md:text-xl text-base">
          Digixel
        </h1>
      </section>
      <section className="flex gap-4 flex-col items-center  justify-center bg-white rounded-xl">
        <form onSubmit={handleSubmit} className="p-6 md:p-2 m-4 w-full md:w-2/3  rounded-xl">
          <h1 className="text-primary font-semibold text-base lg:text-xl">
            Forgot Password
          </h1>
          <p className="font-bold  text-sm text-black mt-4 mb-6">
            Recover Your Password
          </p>
          <div className="space-y-1">
            <label className="label">Email</label>
            <input className="input" type="Email" />
          </div>
          <button className="btn">Submit</button>
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
export default ForgotPassword;

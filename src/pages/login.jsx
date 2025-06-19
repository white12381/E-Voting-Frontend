import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/authenticated/dashboard");
  };
  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen">
      <section className="bg-primary flex flex-col gap-3 items-center justify-center p-6">
        <img src="/vite.svg" alt="vite" className="h-20 w-20 md:w-40 md:h-40" />
        <h1 className="text-center font-bold text-white lg:text-2xl md:text-xl text-base">
          Digixel Voting
        </h1>
      </section>
      <section className="flex gap-4 flex-col items-center  justify-center bg-white rounded-xl">
        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-2 m-4 w-full md:w-2/3  rounded-xl"
        >
          <h1 className="text-primary font-semibold text-base lg:text-xl">
            Welcome Back
          </h1>
          <p className="font-bold  text-sm text-black mt-4 mb-6">
            Sign in to continue
          </p>
          <div className="space-y-1">
            <label className="label">Email or Username</label>
            <input className="input" />
          </div>
          <div className="space-y-1 mt-2 lg:mt-4">
            <label className="label">Password</label>
            <input type="password" className="input" />
          </div>
          <div className="text-[10px] md:text-xs flex justify-between items-baseline mt-1">
            <div className="flex gap-1 items-center">
              <input id="login" type="checkbox" className="accent-primary" />
              <label htmlFor="login" className="text-black font-medium">
                Keep me logged In
              </label>
            </div>
            <Link to={"/forgot-password"} className="text-black font-medium">
              Forgot Password?
            </Link>
          </div>
          <button className="btn">Log In</button>
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
export default Login;

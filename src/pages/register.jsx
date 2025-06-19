import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 h-screen">
      <section className="bg-white flex flex-col gap-3 items-center justify-center p-6">
        <img src="/vite.svg" alt="vite" className="h-20 w-20 md:w-40 md:h-40" />
        <h1 className="text-center font-bold text-primary lg:text-2xl md:text-xl text-base">
          Digixel Voting
        </h1>
      </section>
      <section className="flex gap-4 flex-col items-center  justify-center bg-white rounded-xl">
        <form className="p-6 md:p-2 m-4 w-full md:w-2/3  rounded-xl">
          <h1 className="text-primary font-semibold text-base lg:text-xl">
            Create an account
          </h1>
          <p className="font-bold  text-sm text-black mt-4 mb-6">
            Sign up to Register
          </p>

          <div className="space-y-1">
            <label className="label">Full Name</label>
            <input className="input" />
          </div>

          <div className="space-y-1 mt-4">
            <label className="label">Phone Number</label>
            <input type="tel" className="input" />
          </div>
          <div className="space-y-1 mt-4">
            <label className="label">Email or Username</label>
            <input className="input" />
          </div>
          <div className="space-y-1 mt-4">
            <label className="label">Password</label>
            <input type="password" className="input" />
          </div>

          <div className="space-y-1 mt-4">
            <label className="label">Confirm Password</label>
            <input type="password" className="input" />
          </div>
          <p className="text-black font-semibold text-sm mt-1 text-center">
            By registering, i agree to{" "}
            <Link target="_blank" to={"/terms-and-conditions"} className="text-primary">
              Digixel Terms and Conditions and Privacy Policy{" "}
            </Link>
          </p>
          <button className="bg-primary w-full mt-4 rounded-md text-white p-2 hover:bg-primary/50">
            Sign Up
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

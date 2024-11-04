//import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <figure className="flex justify-center">
          <img src="https://i.ibb.co.com/1Gpjc9M/6478111.png" alt="" />
        </figure>
        <h2 className="font-bold text-xl md:text-2xl lg:text-4xl mt-12">
          404 Page Not Found!!!!
        </h2>
        {/* <div className="text-center">
          <Link to="/">
            <button className="btn py-6 px-3 h-auto rounded-full font-bold mt-8">
              Back to Home
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default ErrorPage;

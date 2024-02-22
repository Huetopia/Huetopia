import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-vh bg-404 bg-center bg-no-repeat bg-cover">
      <h1 className="text-9xl font-bold text-neutral">404</h1>
      <h2 className="text-6xl font-medium text-white py-8">Oops! Page not found</h2>
      <button onClick={() => navigate("/")} className="btn btn-neutral">Go to Homepage</button>

    </div>
  );
};

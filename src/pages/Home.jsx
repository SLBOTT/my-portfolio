import NavigationBar from "../components/NavigationBar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome</h1>
        <h2>
          <Link to="/yenuki">Click here Yenuki</Link>
        </h2>
      </div>
    </>
  );
}
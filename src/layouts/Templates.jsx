import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Templates() {
  return (
    <div>
      <heaser>
        <Navbar />
      </heaser>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Templates;

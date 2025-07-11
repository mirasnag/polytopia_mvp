// main library
import { Outlet } from "react-router-dom";

// components
import StarfieldBackground from "@/components/utils/StarfieldBackground";

const PageLayout = () => {
  return (
    <div className="page-layout">
      <StarfieldBackground />
      <Outlet />
    </div>
  );
};

export default PageLayout;

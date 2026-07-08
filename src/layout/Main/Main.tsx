import { memo } from "react";
import { Outlet } from "react-router-dom";

const Main = memo(function Main() {
  return (
    <main>
      <Outlet />
    </main>
  );
});

export default Main;

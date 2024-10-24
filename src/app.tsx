import { Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </div>
  );
};

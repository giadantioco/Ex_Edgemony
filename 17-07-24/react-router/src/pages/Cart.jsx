import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Cart() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return (
    <div>
      Ciao, {user && user.name}
      <Outlet />
    </div>
  );
}

export default Cart;

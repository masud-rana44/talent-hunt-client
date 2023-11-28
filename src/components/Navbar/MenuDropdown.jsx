import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout successfully");
    } catch (error) {
      toast.error(error?.message || "Failed to logout");
    }
  };

  if (!user) return null;

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=" border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-sm transition"
        >
          {/* Avatar */}
          <img
            className="rounded-full object-cover h-10 w-10"
            referrerPolicy="no-referrer"
            src={user && user.photoURL}
            alt="profile"
            height="40"
            width="40"
          />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-md shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {user?.email ? (
              <>
                <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
                  {user?.displayName}
                </div>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Dashboard
                </Link>
                <div
                  onClick={handleLogout}
                  className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                >
                  Logout
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;

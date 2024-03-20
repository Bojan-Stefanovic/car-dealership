import { useState } from "react";

function AccountPage() {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: "John",
    surname: "Doe",
    email: "johndoe@example.com",
    phone: "067-0123-9874",
  });
  const [tempUser, setTempUser] = useState({ ...user });

  const handleChange = (e) => {
    setTempUser({ ...tempUser, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    setUser(tempUser);
    setEditMode(false);
  };

  const discardChanges = () => {
    setTempUser(user);
    setEditMode(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-noOffset shadow-gray-500/30 p-8 max-w-sm w-full space-y-6">
        <h2 className="text-center font-semibold text-xl mb-4">
          Account Details
        </h2>
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
            {/* Placeholder for image or icon */}
            <img
              src="../../public/AccountImage/Generic-Profile-Image.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          {!editMode ? (
            <div className="text-center">
              <div>
                {user.name} {user.surname}
              </div>
              <div>{user.email}</div>
              <div>{user.phone}</div>
            </div>
          ) : (
            <>
              <input
                type="text"
                name="name"
                value={tempUser.name}
                onChange={handleChange}
                className="input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Name"
              />
              <input
                type="text"
                name="surname"
                value={tempUser.surname}
                onChange={handleChange}
                className="input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Surname"
              />
              <input
                type="email"
                name="email"
                value={tempUser.email}
                onChange={handleChange}
                className="input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
              <input
                type="text"
                name="phone"
                value={tempUser.phone}
                onChange={handleChange}
                className="input border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Phone"
              />
            </>
          )}
        </div>
        <div className="flex justify-center gap-4">
          {editMode ? (
            <>
              <button
                onClick={saveChanges}
                className="bg-[#6faa63]  hover:bg-[#8bc77f] transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Save
              </button>
              <button
                onClick={discardChanges}
                className="bg-red-500 hover:bg-red-700  transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Discard
              </button>
            </>
          ) : (
            <button
              onClick={() => setEditMode(true)}
              className="bg-[#6faa63]  hover:bg-[#8bc77f] transition duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Edit Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default AccountPage;

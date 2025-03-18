import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://workingbackend-i34e.onrender.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const savedPackages = JSON.parse(localStorage.getItem("packages")) || [];
    setPackages(savedPackages);
  }, []);

  const createPackage = (name, price, duration) => {
    const newPackage = {
      id: Date.now(),
      name,
      price,
      duration,
      users: [],
    };
    const updatedPackages = [...packages, newPackage];
    setPackages(updatedPackages);
    localStorage.setItem("packages", JSON.stringify(updatedPackages));
  };

  const addUserToPackage = (userId, packageId) => {
    const updatedPackages = packages.map((pkg) => {
      if (pkg.id === packageId) {
        if (!pkg.users.some((u) => u.id === userId)) {
          const user = users.find((u) => u._id === userId);
          pkg.users.push({
            ...user,
            paymentDate: new Date(),
            expiryDate: new Date(
              Date.now() + pkg.duration * 24 * 60 * 60 * 1000
            ),
          });
        }
      }
      return pkg;
    });
    setPackages(updatedPackages);
    localStorage.setItem("packages", JSON.stringify(updatedPackages));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Packages</h2>
      <button onClick={() => createPackage("Premium", 499, 360)}>
        Create Premium Package
      </button>
      <div className="mt-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="border p-2 mt-2">
            <h3>
              {pkg.name} - ₹{pkg.price} ({pkg.duration} Days)
            </h3>
            <ul>
              {pkg.users.map((user) => (
                <li key={user.id}>
                  {user.name} - Expiry:{" "}
                  {new Date(user.expiryDate).toLocaleDateString()}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold my-4">User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Add to Package</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border">
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => addUserToPackage(user._id, pkg.id)}
                    >
                      Add to {pkg.name}
                    </button>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersList;

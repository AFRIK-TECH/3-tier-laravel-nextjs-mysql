"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  // Temporary mock data until backend is connected
  const [users, setUsers] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getUsers`
      );
      console.log(res.data);
      setUsers(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) {
    return <div className="w-full h-[70vh]">Loading...</div>;
  }

  return (
    <div className="h-[50vh] bg-gray-100">
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Registered Users
          </h2>
          <div className="space-y-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="border-b border-gray-200 pb-4 last:border-0"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.name}
                </h3>
                <p className="text-gray-600">{user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

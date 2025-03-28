"use client";
import { useRef, useState } from "react";
import axios from "axios";

export default function Registration() {
  //reference to the name and email input fields
  const nameRef = useRef();
  const emailRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/createUser`,
        formData
      );
      nameRef.current.value = "";
      emailRef.current.value = "";
      console.log(res);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="h-[50vh] bg-gray-100">
      <main className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            User Registration
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Register
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

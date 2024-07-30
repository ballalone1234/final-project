import React from "react";

const RegisterPage = () => {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h1 className="text-4xl text-[#1D51AC] text-center">Regiser</h1>
      <p className="text-[#1D51AC] mb-4">
        Enter your Student ID and Password for add.
      </p>
      <form>
        <div className="mb-4">
          <label className="block mb-2">Enter Student or Staff ID</label>
          <input
            type="text"
            name="id"
            placeholder="Student or Staff ID"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Enter Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            Enter Student or Staff Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Student or Staff name"
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-4">
            <label className="block mb-2">Select Role</label>
            <select
              name="role"
              className="border border-gray-300 p-2 w-full"
            >
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
        </div>
        <button
          type="submit"
          className="bg-[#1D51AC] text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;

import { useState } from "react"

const App = () => {

  const [data, setData] = useState(null)

  const callApi = async(type) => {
    const res = await fetch(`http://localhost:5000/api/${type}`);
    const result = await res.json()
    setData(result)
  }  

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Middleware Demo</h1>
      <div className="flex gap-4">
        <button
          onClick={() => callApi("students")}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Student
        </button>

        <button
          onClick={() => callApi("admin")}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Admin
        </button>
      </div>
      {data && (
        <>
          <div className="mt-6 p-4 bg-white shadow rounded w-full max-w-3xl">
            <p>
              <b>Message:</b> {data.message}
            </p>

            <p>
              <b>Role:</b> {data.role || "N/A"}
            </p>

            <p>
              <b>Status:</b> {data.success ? "Success" : "Failed"}
            </p>
          </div>

          {data.students && (
            <table className="w-full max-w-3xl mt-4 border border-gray-300 bg-white">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Course</th>
                </tr>
              </thead>

              <tbody>
                {data.students.map((student) => (
                  <tr key={student.id}>
                    <td className="border p-2">{student.id}</td>
                    <td className="border p-2">{student.name}</td>
                    <td className="border p-2">{student.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )}
    </div>
  );
}

export default App

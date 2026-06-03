

const Table = ({data}) => {
  return (
    <>
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
  );
}

export default Table
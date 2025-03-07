'use client';
import { usePeopleApi } from "./hooks/usePeopleApi";

export default function Home() {
  const { currentPerson, personHistory, error, loading, fetchData } = usePeopleApi();

  if (error) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <button
        onClick={fetchData}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch Data
      </button>

      {loading && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          Loading...
        </div>
      )}

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-lg font-bold mb-4">Current Person</h1>
        {currentPerson && (
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full text-center">
            <img
              src={currentPerson.picture}
              alt={currentPerson.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold">{currentPerson.name}</h2>
            <p className="text-gray-600">{currentPerson.email}</p>
            <p className="text-gray-600">{new Date(currentPerson.birthday).toLocaleDateString()}</p>
            <p className="text-gray-600">{currentPerson.phone}</p>
          </div>
        )}
      </div>

      <div className="fixed left-4 top-4 w-64 overflow-y-auto max-h-screen">
        <h1 className="text-lg font-bold mb-4">Person History</h1>
        {personHistory.map((person, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <img
              src={person.picture}
              alt={person.name}
              className="w-16 h-16 rounded-full mx-auto mb-2"
            />
            <h2 className="text-lg font-bold">{person.name}</h2>
            <p className="text-gray-600">{person.email}</p>
            <p className="text-gray-600">{new Date(person.birthday).toLocaleDateString()}</p>
            <p className="text-gray-600">{person.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
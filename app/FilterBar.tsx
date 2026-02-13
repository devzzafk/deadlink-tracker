export default function FilterBar({ setFilter }: any) {
  return (
    <div className="flex gap-4 mt-6">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("Internship")}>Internship</button>
      <button onClick={() => setFilter("Hackathon")}>Hackathon</button>
      <button onClick={() => setFilter("Scholarship")}>Scholarship</button>
      <button onClick={() => setFilter("Job")}>Job</button>
    </div>
  );
}

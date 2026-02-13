export default function LinkCard({ link }: any) {
  return (
    <div className="border p-4 bg-white shadow">
      <h2 className="font-semibold">{link.title}</h2>
      <p className="text-sm text-gray-600">{link.type}</p>
      <a
        href={link.url}
        target="_blank"
        className="text-blue-500 underline"
      >
        Visit
      </a>
    </div>
  );
}

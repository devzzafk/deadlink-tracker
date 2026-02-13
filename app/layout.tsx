import "./globals.css";

export const metadata = {
  title: "Deadlink Tracker",
  description: "Track opportunities easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen p-8">
        {children}
      </body>
    </html>
  );
}

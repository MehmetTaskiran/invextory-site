import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className="text-white antialiased bg-[#0B1220] relative">

        {/* GLOBAL RADIAL GLOW */}
        <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_center,#22d3ee20,transparent_70%)]" />

        {children}

      </body>
    </html>
  );
}
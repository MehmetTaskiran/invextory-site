import NavbarClient from "@/components/layout/NavbarClient";
import Footer from "@/components/layout/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      
      <NavbarClient />

      <main className="flex-1">
        {children}
      </main>

      <Footer />

    </div>
  );
}
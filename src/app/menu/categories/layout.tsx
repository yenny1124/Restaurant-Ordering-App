import MenuNavbar from "./components/MenuNavbar";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MenuNavbar />
      {children}
    </>
  );
}

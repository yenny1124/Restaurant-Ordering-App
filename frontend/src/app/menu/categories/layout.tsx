import MenuNavbar from "./components/menunavbar/MenuNavbar";

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

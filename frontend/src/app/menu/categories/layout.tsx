import MenuNavbar from "../../components/menu/menunavbar/MenuNavbar";

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

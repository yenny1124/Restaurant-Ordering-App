import Link from "next/link";
import Image from "next/image";

export default function RestaurantLogo() {
  return (
    <Link href="/home" className="restaurant-logo">
      <Image
        width={75}
        height={75}
        src="/logo.png"
        style={{
          height: "100%",
        }}
        alt="Rolls and rolls plus logo"
      />
    </Link>
  );
}

import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center font-bold gap-1 z-100 text-xl md:text-2xl tracking-tight">
      <span className=" font-bold">Fixit</span>
      <span className=" text-primary font-bold">24/7</span>
    </div>
  );
}

export function DarkLogo() {
  return (
    <div className="flex items-center gap-1 font-bold z-100 text-xl md:text-2xl tracking-tight">
      <span className=" text-white">
        Fixit
      </span>
      <span className="text-blue-400">24/7</span>
    </div>
  );
}

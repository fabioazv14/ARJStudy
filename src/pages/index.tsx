import Image from "next/image";


export default function Home() {
  return (
    <div className="flex items-center w-max mx-auto p-6">
      <img
        src="/arjlogo.svg"
        alt="ARJLOGO"
        width={120}
        height={120}
        className=""
      />
      <h1 className="text-4xl font-bold mt-6">ARJ Study</h1>
    </div>
  );
}

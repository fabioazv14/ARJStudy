import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Uke() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/tecnica");
  }, [router]);
  return null;
}
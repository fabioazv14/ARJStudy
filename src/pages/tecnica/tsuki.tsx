import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Tsuki() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/tecnica");
  }, [router]);
  return null;
}
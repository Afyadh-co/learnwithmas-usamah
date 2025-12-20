import { Button } from "@/components/ui/button";
import Link from "next/link";


export function BackToHome() {
  return (
    <div className="py-4">
      {" "}
      <Button className="py-4">
        <Link href="/">Back To Home</Link>
      </Button>
    </div>
  );
}

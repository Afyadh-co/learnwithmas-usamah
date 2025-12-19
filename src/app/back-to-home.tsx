import { Button } from "@/components/ui/button";
import Link from "next/link";


export function BackToHome() {
  return (
    <div>
      {" "}
      <Button className="my-10">
        <Link href="/">Back To Home</Link>
      </Button>
    </div>
  );
}

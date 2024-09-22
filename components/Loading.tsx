import { id } from "@/lib/data";
import Image from "next/image";

interface LoadingProps {
  message?: string;
}

export default function Component({
  message = "Carregando...",
}: LoadingProps = {}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] p-4 space-y-4 bg-background rounded-lg ">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-secondary flex items-center justify-center border-t-transparent animate-spin">
          {" "}
          <Image src={id.iconLogo} alt="Logo" width="24" height="24" />
        </div>
      </div>
      <p className="text-lg font-medium text-foreground">{message}</p>
    </div>
  );
}

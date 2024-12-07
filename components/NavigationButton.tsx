import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NavigationButtonProps {
    title: string;
    path: string;
}

export default function NavigationButton({ title, path }: NavigationButtonProps) {
    return (
        <Button className="bg-inherit" variant={"outline"} asChild>
          <Link className="w-48 text-white font-semibold uppercase" href={path}>{title}</Link>
        </Button>
    );
}
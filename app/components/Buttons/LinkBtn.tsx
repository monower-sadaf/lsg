import { cn } from "@/lib/utils";
import Link from "next/link";

interface props {
      title: string,
      cls: string,
      href: string,
}
const LinkBtn = ({ title, cls, href }: props) => {
      return <Link href={href} className={cn("bg-primary font-medium text-14 md:text-16 px-3 md:px-7 py-1 text-slate-50 rounded-md", cls)}>{title}</Link>
}

export default LinkBtn;
import { cn } from "@/lib/utils";

interface TitleProps {
      title: string,
      cls: string,
}
const Title = ({ title, cls }: TitleProps) => {
      return <h3 className={cn("text-20 md:text-32 font-medium text-secondary", cls)}>{title}</h3>
}

export default Title;
import { isAbsolute } from "path";
import { title } from "process";

export const metadata={
    title: "With auth layout",
    description: "this for the practice"
}
export  default function AuthLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
        <div>
            <h2> Inner layout</h2>
            {children}
        </div>
    )
}
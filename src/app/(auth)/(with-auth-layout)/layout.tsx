import Link from "next/link";

export const metadata={
    title: "With auth layout",
    description: "this for the practice"
}
const navLinks=[
    {name: "Register",href: "/register"},
    {name: "Login",href: "/login"},
    {name: "Forgot-password",href: "/forgot-password"},
]
export  default function AuthLayout({
    children,
}:{
    children: React.ReactNode;
}) {
    return(
        <div>
            <h2> Inner layout</h2>
            {navLinks.map((link)=>{
                return (
                    <Link href={link.href} key={link.name}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}
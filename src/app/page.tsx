import  Link  from "next/link";
export default function Home() {
  return (
    <>
      <h1>Welcome practice in NextJS</h1>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/forgot-password">Forgot password</Link>
      <Link href="/blog">Blog</Link>
    </>
)
}

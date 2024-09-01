import getUrl from "@/lib/get-url";
import { NextRequest, NextResponse } from "next/server"
 
export default function middleware (req : NextRequest)
{
  const token = req.cookies.get("authjs.session-token");
  const pathname =  req.nextUrl.pathname;

  console.log({
    token : token?.value,
    pathname
  });

  if(pathname == "/login" && token?.value)
  {
    return NextResponse.redirect(new URL(getUrl("/home")));
  }

  if(pathname == "/home" && !token)
  {
    return NextResponse.redirect(new URL(getUrl("/login")));
  }

};
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
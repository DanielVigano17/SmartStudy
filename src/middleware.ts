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
    return NextResponse.redirect(new URL(getUrl("/intern/home")));
  }

  if(pathname.includes("/intern") && !token)
  {
    return NextResponse.redirect(new URL(getUrl("/login")));
  }

};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
import { jwtVerify } from 'jose'
import { NextResponse, type NextRequest } from 'next/server'
const secret=()=>new TextEncoder().encode(process.env.AUTH_SECRET||'')
export async function middleware(request:NextRequest){
 const {pathname}=request.nextUrl
 if(!pathname.startsWith('/admin')||pathname==='/admin/login')return NextResponse.next()
 const token=request.cookies.get('au_admin')?.value
 if(!token)return NextResponse.redirect(new URL('/admin/login',request.url))
 try{await jwtVerify(token,secret());return NextResponse.next()}catch{return NextResponse.redirect(new URL('/admin/login',request.url))}
}
export const config={matcher:['/admin/:path*']}
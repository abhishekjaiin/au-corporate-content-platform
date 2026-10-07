import { jwtVerify } from 'jose'
import { NextResponse, type NextRequest } from 'next/server'

const secret=()=>new TextEncoder().encode(process.env.AUTH_SECRET||'')

export async function middleware(request:NextRequest){
 const {pathname}=request.nextUrl
 const isAdminPage=pathname.startsWith('/admin') && pathname!=='/admin/login'
 const isAdminApi=pathname.startsWith('/api/admin')
 if(!isAdminPage && !isAdminApi)return NextResponse.next()
 const token=request.cookies.get('au_admin')?.value
 if(!token){
   if(isAdminApi)return NextResponse.json({error:'Unauthorized'},{status:401})
   return NextResponse.redirect(new URL('/admin/login',request.url))
 }
 try{await jwtVerify(token,secret());return NextResponse.next()}
 catch{
   if(isAdminApi)return NextResponse.json({error:'Unauthorized'},{status:401})
   return NextResponse.redirect(new URL('/admin/login',request.url))
 }
}

export const config={matcher:['/admin/:path*','/api/admin/:path*']}

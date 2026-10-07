import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = {title:'AU Corporate | India entry & business advisory',description:'AU Corporate helps international and Indian businesses establish and operate in India across business structure, tax, finance, payroll and compliance.',generator:'AU Corporate Content Platform'}
export const viewport: Viewport={colorScheme:'light',themeColor:'#10243e'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className="antialiased">{children}{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html>}
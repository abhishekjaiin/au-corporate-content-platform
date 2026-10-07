export default function PageHero({eyebrow,title,children}:{eyebrow:string,title:string,children?:React.ReactNode}){
 return <section className="page-hero"><div className="page-hero-inner"><p className="eyebrow gold">{eyebrow}</p><h1>{title}</h1>{children&&<div className="page-hero-copy">{children}</div>}</div></section>
}

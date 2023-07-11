"use client"
import Head from 'next/head'
import Script from 'next/script'
export default function DashboardPage() {
    return (
        <div className='container'>
      <Script src="https://www.googletagmanager.com/gtag/js?id=AW-1114798497" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'AW-1114798497');
        `}
      </Script>
        </div>
    )
  }
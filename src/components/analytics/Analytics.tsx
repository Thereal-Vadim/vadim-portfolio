import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID?.trim() ?? "";
const ymId = process.env.NEXT_PUBLIC_YM_ID?.trim() ?? "";

const validGaId = /^G-[A-Z0-9]+$/.test(gaId) ? gaId : "";
const validYmId = /^\d{5,12}$/.test(ymId) ? ymId : "";

export function Analytics() {
  return (
    <>
      {validGaId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${validGaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${validGaId}');`}
          </Script>
        </>
      ) : null}
      {validYmId ? (
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${validYmId},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}
        </Script>
      ) : null}
    </>
  );
}

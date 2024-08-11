// Google Analytics
(function() {
    var gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-DVXV738B73';
    document.head.appendChild(gaScript);

    gaScript.onload = function() {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-DVXV738B73');
    };
})();


// Google Tag Manager
(function(w,d,s,l,i){
    w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','YOUR_GTM_ID');

// Facebook Pixel
!function(f,b,e,v,n,t,s){
    if(f.fbq)return;
    n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s);
}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('track', 'PageView');

// Schema Markup for Organization
var organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ceylon Hospital",
    "url": "https://www.ceylonhospital.com",
    "logo": "https://www.ceylonhospital.com/assets/images/logo.png",
    "sameAs": [
        "https://www.facebook.com/ceylonhospital",
        "https://www.instagram.com/ceylonhospital",
        "https://www.linkedin.com/company/ceylonhospital",
        "https://twitter.com/ceylonhospital"
    ]
};
document.head.insertAdjacentHTML('beforeend', `<script type="application/ld+json">${JSON.stringify(organizationSchema)}</script>`);

// Rich Snippets for Articles
var articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Ayurveda: Ancient Medicine of India",
    "datePublished": "2024-07-30",
    "description": "Explore Ayurveda, an ancient system of medicine from India, gaining recognition for its holistic approach to health and wellness. Learn about its benefits, treatments, and integration with modern medicine.",
    "author": {
        "@type": "Person",
        "name": "Ceylon Hospital"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Ceylon Hospital",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.ceylonhospital.com/assets/images/logo.png"
        }
    },
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.ceylonhospital.com/blog"
    }
};
document.head.insertAdjacentHTML('beforeend', `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>`);

// Local Business Schema
var localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Ceylon Hospital",
    "image": "https://www.ceylonhospital.com/assets/images/logo.png",
    "@id": "https://www.ceylonhospital.com",
    "url": "https://www.ceylonhospital.com",
    "telephone": "+94712509898",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": " No. 228/1, Asiri Mawatha, Kandy Rd, Yakkala",
        "addressLocality": "Gampaha",
        "postalCode": "11870",
        "addressCountry": "Sri Lanka"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 6.927079,
        "longitude": 79.861244
    },
    "sameAs": [
        "https://www.facebook.com/ceylonhospital",
        "https://www.instagram.com/ceylonhospital",
        "https://www.linkedin.com/company/ceylonhospital",
        "https://twitter.com/ceylonhospital"
    ]
};
document.head.insertAdjacentHTML('beforeend', `<script type="application/ld+json">${JSON.stringify(localBusinessSchema)}</script>`);

// Web Vitals
(function() {
    function logVitals(metric) {
        console.log(metric);
       
    }
    window.addEventListener('DOMContentLoaded', (event) => {
        import('https://unpkg.com/web-vitals/dist/web-vitals.iife.js').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
            getCLS(logVitals);
            getFID(logVitals);
            getLCP(logVitals);
            getFCP(logVitals);
            getTTFB(logVitals);
        });
    });
})();

// Hotjar Tracking Code
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

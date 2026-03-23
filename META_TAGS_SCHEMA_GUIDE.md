# Meta Tags & Schema Implementation Examples

## Complete HTML Head Section Example

```html
<!doctype html>
<html lang="en">
<head>
  <!-- Character Encoding & Viewport -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <!-- Primary Meta Tags (for Search Engines) -->
  <title>NDN Controls and Automation | Industrial Automation Solutions Bangalore</title>
  <meta name="title" content="NDN Controls and Automation | Industrial Automation Solutions Bangalore">
  <meta name="description" content="NDN Controls and Automation is a leading industrial automation company in Bangalore. We provide PLC programming, HMI development, SCADA systems, VFDs, and custom control panels for Pharma, Food, Energy, and Manufacturing industries.">
  <meta name="keywords" content="NDN Controls and Automation, industrial automation, PLC, HMI, SCADA, VFDs, control panels, system integration, Bangalore">
  <meta name="author" content="NDN Controls and Automation">
  <meta http-equiv="content-language" content="en-IN">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  
  <!-- Open Graph / Facebook Meta Tags -->
  <meta property="og:type" content="business.business">
  <meta property="og:url" content="https://nryogee-netizen.github.io/ndn-site/">
  <meta property="og:title" content="NDN Controls and Automation | Industrial Automation Solutions">
  <meta property="og:description" content="NDN Controls and Automation provides industrial automation systems, PLC programming, HMI development, and custom control panels in Bangalore, India.">
  <meta property="og:image" content="https://nryogee-netizen.github.io/ndn-site/assets/logo.svg">
  <meta property="og:image:alt" content="NDN Controls and Automation logo">
  
  <!-- Twitter Meta Tags -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://nryogee-netizen.github.io/ndn-site/">
  <meta property="twitter:title" content="NDN Controls and Automation | Industrial Automation Solutions">
  <meta property="twitter:description" content="NDN Controls and Automation provides industrial automation systems, PLC programming, HMI development, and custom control panels in Bangalore, India.">
  <meta property="twitter:image" content="https://nryogee-netizen.github.io/ndn-site/assets/logo.svg">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://nryogee-netizen.github.io/ndn-site/">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="css/style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
  
  <!-- Schema Markup - Organization/LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NDN Controls and Automation",
    "alternateName": ["NDN Controls & Automation", "NDN Automation"],
    "description": "NDN Controls and Automation is a technology-oriented company specializing in providing industrial automation solutions including PLC programming, HMI development, SCADA systems, and custom control panels.",
    "url": "https://nryogee-netizen.github.io/ndn-site/",
    "telephone": "+919972700220",
    "email": "ndncontrols@gmail.com",
    "foundingDate": "2015-01-01",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "#742, 14th Cross, Behind Widia Poornapragna School",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560073",
      "addressCountry": "IN"
    },
    "image": "https://nryogee-netizen.github.io/ndn-site/assets/logo.svg",
    "priceRange": "$$",
    "serviceType": [
      "Industrial Automation",
      "PLC Programming",
      "HMI Development",
      "SCADA Systems",
      "Control Panel Manufacturing",
      "System Integration"
    ],
    "knowsAbout": [
      "PLC (Programmable Logic Controller)",
      "HMI (Human Machine Interface)",
      "SCADA (Supervisory Control and Data Acquisition)",
      "VFDs (Variable Frequency Drives)",
      "Soft Starters",
      "Control Panels"
    ]
  }
  </script>
  
  <!-- Schema Markup - Corporation -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "NDN Controls and Automation",
    "legalName": "NDN Controls and Automation",
    "taxID": "29AVTPR2427G1Z1",
    "founder": {
      "@type": "Person",
      "name": "NDN Founding Team"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "5"
    },
    "industry": "Industrial Automation and Control Systems",
    "brand": {
      "@type": "Brand",
      "name": "NDN Controls and Automation"
    }
  }
  </script>

</head>
<body>
  <!-- Rest of HTML -->
</body>
</html>
```

---

## Heading Hierarchy Best Practices

### ✅ DO THIS:

```html
<!-- Page Level (ONE H1 per page) -->
<h1>NDN Controls and Automation: Industrial Automation Solutions</h1>

<!-- Section Level -->
<h2>NDN Controls and Automation Services</h2>
<h3>PLC Programming & HMI Development by NDN Controls and Automation</h3>
<h3>SCADA Systems and Control Panels</h3>

<h2>Why Choose NDN Controls and Automation?</h2>
<h3>Expertise in Industrial Automation</h3>
<h3>Years of Experience with NDN Controls and Automation</h3>

<h2>Industries Served by NDN Controls and Automation</h2>
<h3>Pharmaceutical Industry Solutions</h3>
<h3>Food & Beverage Automation</h3>
<h3>Energy Sector Integration</h3>

<h2>About NDN Controls and Automation</h2>
<h2>Contact NDN Controls and Automation</h2>
```

### ❌ DON'T DO THIS:

```html
<!-- Multiple H1s on one page (Bad for SEO) -->
<h1>Home</h1>
<h1>NDN Controls and Automation</h1>
<h1>Services</h1>

<!-- Skipping heading levels (Bad for structure) -->
<h1>Title</h1>
<h4>Subsection</h4>  <!-- Should be H2 or H3 -->

<!-- Not including brand name -->
<h1>Industrial Automation Services</h1>  <!-- Missing company name -->
```

---

## Content Optimization Examples

### ✅ OPTIMIZED HOMEPAGE INTRO (Include this near the top):

```html
<section class="intro">
  <p>
    <strong>NDN Controls and Automation</strong> is a leading industrial automation company 
    based in Bengaluru, India. We specialize in delivering comprehensive industrial automation 
    solutions including PLC programming, HMI development, SCADA systems, VFDs, and custom 
    control panel manufacturing.
  </p>
  
  <p>
    With years of experience in automation technology, <strong>NDN Controls and Automation</strong> 
    has become the trusted partner for businesses across Pharma, Food, Energy, HVAC, and 
    Manufacturing sectors. Our team at <strong>NDN Controls and Automation</strong> combines 
    engineering expertise with cutting-edge technology to deliver solutions tailored to your 
    industrial needs.
  </p>
</section>
```

**Why this works:**
- Includes company name 3 times naturally in first 100 words
- Mentions key services: PLC, HMI, SCADA, VFDs, control panels
- Mentions industries: Pharma, Food, Energy, HVAC, Manufacturing
- Uses `<strong>` to emphasize company name

---

## Service Pages - Header & Intro Template

### For each service page (e.g., /services/plc-programming/)

```html
<!doctype html>
<html lang="en">
<head>
  <title>PLC Programming Services | NDN Controls and Automation</title>
  <meta name="description" content="Professional PLC programming services by NDN Controls and Automation. We provide custom PLC solutions for industrial automation using Siemens, Rockwell, and other leading platforms in Bangalore.">
  <link rel="canonical" href="https://nryogee-netizen.github.io/ndn-site/services/plc-programming/">
  
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "PLC Programming",
    "provider": {
      "@type": "LocalBusiness",
      "name": "NDN Controls and Automation"
    },
    "description": "Custom PLC programming services by NDN Controls and Automation for industrial automation",
    "areaServed": {
      "@type": "City",
      "name": "Bengaluru"
    }
  }
  </script>
</head>
<body>
  <h1>PLC Programming Services by NDN Controls and Automation</h1>
  <p>
    <strong>NDN Controls and Automation</strong> offers professional PLC programming services 
    for industrial automation systems. Our experienced PLC programmers at 
    <strong>NDN Controls and Automation</strong> work with leading platforms including Siemens, 
    Rockwell, and others to deliver customized solutions for your business.
  </p>
</body>
</html>
```

---

## Internal Linking Strategy

### ✅ GOOD INTERNAL LINKS:

```html
<!-- Using branded anchor text -->
<a href="/">Home | NDN Controls and Automation</a>
<a href="/about">About NDN Controls and Automation</a>
<a href="/services">NDN Controls and Automation Services</a>
<a href="/services/plc">PLC Programming by NDN Controls and Automation</a>
<a href="/services/hmi">HMI Development Services</a>
<a href="/contact">Contact NDN Controls and Automation</a>
<a href="/industries/pharma">Pharmaceutical Solutions from NDN Controls and Automation</a>
```

### ❌ POOR INTERNAL LINKS:

```html
<!-- Generic anchor text - misses SEO opportunity -->
<a href="/">Home</a>
<a href="/about">Click Here</a>
<a href="/services">Read More</a>
<a href="/">Learn More</a>
```

---

## Robots.txt Configuration

Create or update `robots.txt` in root:

```
User-agent: *
Allow: /
Sitemap: https://nryogee-netizen.github.io/ndn-site/sitemap.xml

# Optional: Block specific bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /
```

---

## FAQ Schema Markup Example

If you add an FAQ section, use this schema:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is NDN Controls and Automation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NDN Controls and Automation is a leading industrial automation company in Bangalore providing PLC programming, HMI development, SCADA systems, and custom control panel manufacturing services."
      }
    },
    {
      "@type": "Question",
      "name": "What services does NDN Controls and Automation provide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NDN Controls and Automation specializes in PLC programming, HMI development, SCADA systems, VFDs, control panel manufacturing, and system integration for various industries."
      }
    }
  ]
}
</script>
```

---

## Google Search Console Checklist

After publishing these changes:

1. **Add Property**: https://search.google.com/search-console
2. **Submit Sitemap**: Add `sitemap.xml` URL
3. **Verify URL Parameters**: Verify root domain
4. **Check Indexing**: Monitor index coverage
5. **Monitor Keywords**: Track "NDN Controls and Automation" queries
6. **Fix Issues**: Address any crawl errors
7. **Mobile Friendly**: Verify mobile optimization

---

## Expected Search Results Display

### BEFORE Optimization:
```
NDN Company Profile
NDN Controls & Automation — industrial automation systems...
nryogee-netizen.github.io › ndn-site
```

### AFTER Optimization:
```
NDN Controls and Automation | Industrial Automation Solutions Bangalore
NDN Controls and Automation is a leading industrial automation company in Bangalore. We provide PLC programming, HMI development, SCADA systems, VFDs, and custom control panels...
nryogee-netizen.github.io › ndn-site
```

The full company name will now be prominent in search results! ✅

---

**Implementation Completed:** March 2026
**Files Updated:** 2 index.html files in main and website folders

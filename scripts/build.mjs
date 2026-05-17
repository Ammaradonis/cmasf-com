import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const assetsDir = path.join(dist, "assets");

const CONTACT = {
  email: "hello@cmasf.com",
  phone: "(415) 359-9294",
  address: "1217 Polk St San Francisco, CA 94109",
  shortAddress: "1217 Polk, San Francisco"
};

const NAV = [
  ["/about", "About"],
  ["/schedule", "Schedule"],
  ["/youth-program", "Youth Program"],
  ["/coaches", "Coaches"],
  ["/videos", "Videos"],
  ["/pricing", "Pricing"],
  ["/faqs", "FAQs"],
  ["/contact", "Contact"]
];

const FOOTER_LINKS = [
  ["/schedule", "Schedule"],
  ["/about", "About"],
  ["/pricing", "Pricing"],
  ["/faqs", "FAQs"],
  ["/contact", "Newsletter"]
];

const REVIEWS = [
  {
    quote: "\"You're not going to find a better combo of genuine and approachable dudes who are also skilled, passionate and attentive fight coaches like you will in Dave and Joe.\"",
    author: "Joshua Brain J.",
    location: "San Francisco, CA"
  },
  {
    quote: "\"This gym is great because you get lots of individual attention, even in the classes, and the environment is really welcoming and friendly no matter your skill level.\"",
    author: "Ariel J.",
    location: "Chicago, IL"
  },
  {
    quote: "\"I started practicing Muay Thai a little over a year ago under Dave's instruction, and I couldn't have asked for a better mentor as a complete beginner.\"",
    author: "Moon D.",
    location: "San Francisco, CA"
  },
  {
    quote: "\"Joe and Dave are extremely well-rounded teachers and their relatively small class sizes compared to other gyms allows them to give attention to students individually.\"",
    author: "Eric T.",
    location: "San Francisco, CA"
  },
  {
    quote: "\"I highly recommend this place! It's refueled my passion for martial arts and I couldn't be happier to have found an incredible gym community.\"",
    author: "Samantha A.",
    location: "San Francisco, CA"
  },
  {
    quote: "\"They'll make sure you learn and work out hard, but they also stress timing and technique so you learn the right way.\"",
    author: "Nikky L.",
    location: "Washington, DC"
  },
  {
    quote: "\"There are so many great things to say about CMA. All the coaches are incredibly knowledgeable and push you without creating a hostile environment\"",
    author: "Michael L.",
    location: "San Francisco, CA"
  }
];

const SCHEDULE = [
  {
    day: "Mondays",
    classes: [
      ["7:00 - 8:00 AM", "All Levels Muay Thai"],
      ["12:00 - 1:00 PM", "Beginner Muay Thai"],
      ["4:30 - 5:15 PM", "Youth Muay Thai"],
      ["5:30 - 6:30 PM", "All Levels Muay Thai"],
      ["6:30 - 7:30 PM", "Beginner Muay Thai"],
      ["7:30 - 8:30 PM", "Intermediate Muay Thai *"]
    ]
  },
  {
    day: "Tuesdays",
    classes: [
      ["12:00 - 1:00 PM", "All Levels Muay Thai"],
      ["5:00 - 6:00 PM", "Open Gym"],
      ["5:30 - 6:30 PM", "Beginner Muay Thai"],
      ["6:30 - 7:30 PM", "All Levels Muay Thai"],
      ["7:30 - 8:30 PM", "Advanced Drilling"]
    ]
  },
  {
    day: "Wednesdays",
    classes: [
      ["7:00 - 8:00 AM", "All Levels Muay Thai"],
      ["12:00 - 1:00 PM", "Beginner Muay Thai"],
      ["4:30 - 5:15 PM", "Youth Muay Thai"],
      ["5:30 - 6:30 PM", "All Levels Muay Thai"],
      ["6:30 - 7:30 PM", "Beginner Muay Thai"],
      ["7:30 - 8:30 PM", "Intermediate Muay Thai *"]
    ]
  },
  {
    day: "Thursdays",
    classes: [
      ["12:00 - 1:00 PM", "All Levels Muay Thai"],
      ["4:30 - 5:15 PM", "Youth Muay Thai"],
      ["5:30 - 6:30 PM", "Beginner Muay Thai"],
      ["6:30 - 7:30 PM", "All Levels Muay Thai"],
      ["7:30 - 8:30 PM", "Advanced Drilling"]
    ]
  },
  {
    day: "Fridays",
    classes: [
      ["7:00 - 8:00 AM", "All Levels Muay Thai"],
      ["12:00 - 1:00 PM", "All Levels Muay Thai"],
      ["4:30 - 5:15 PM", "Youth Muay Thai"],
      ["5:30 - 6:30 PM", "Beginners Muay Thai"],
      ["6:00 - 7:00 PM", "All Levels Training"]
    ]
  },
  {
    day: "Saturdays",
    classes: [
      ["10:00 - 11:00 AM", "Heavy Bag Cardio"],
      ["11:00 - 12:00 PM", "Beginner Muay Thai"],
      ["12:00 - 1:00 PM", "Intermediate Muay Thai *"],
      ["1:00 - 2:00 PM", "Muay Thai Sparring **"]
    ]
  }
];

const PRICING = [
  {
    title: "month - to - month",
    price: "$214",
    cadence: "per month",
    details: ["$50 one-time enrollment fee", "Access to unlimited classes", "Access to open gym hours"]
  },
  {
    title: "youth monthly",
    price: "$124",
    cadence: "per month",
    details: ["$50 one-time enrollment fee", "Access to unlimited youth classes"]
  },
  {
    title: "6 months",
    price: "$1180",
    cadence: "per 6 months ($196/month)",
    details: ["No enrollment fee", "1 free guest pass", "(No prorated refunds)"]
  },
  {
    title: "12 monthS",
    price: "$2200",
    cadence: "per 12 months ($183/month)",
    details: ["No enrollment fee", "2 free guest passes", "(No prorated refunds)"]
  }
];

const FAQS = [
  {
    question: "Do i need to register for a class before attending?",
    answer: "Before your first class, call us at (415) 359-9294 or email hello@cmasf.com so we can direct you to the right class based on your skill level."
  },
  {
    question: "What do i need for my first class?",
    answer: "Wear comfortable athletic clothing and contact CMA before your first visit so the team can direct you to the right class."
  },
  {
    question: "How much experience do i need for intermediate, advanced and sparring classes?",
    answer: "A beginner class is required first. Intermediate, advanced drilling, and sparring require coach permission."
  },
  {
    question: "do i need my own equipment for class?",
    answer: "Intermediate class requires gloves and shin guards. Contact the gym if you need help preparing for your first class."
  },
  {
    question: "how much physical contact is involved?",
    answer: "Class contact depends on level and coach approval. There is no unsupervised sparring without coach approval."
  },
  {
    question: "Do you offer private one-on-one sessions?",
    answer: "Yes. Individual coach pages include a private coaching request form."
  }
];

const COACHES = [
  ["/muay-thai-coach-dave-engel", "Dave Engel", "Head Coach & Owner"],
  ["/muay-thai-coach-joe-chernay", "Joe Chernay", "Head Coach & Owner"],
  ["/muay-thai-coach-brandon-lydick", "Brandon Lydick", "Senior Coach"],
  ["/muay-thai-coach-tina-carter", "Tina Carter", "Coach"],
  ["/muay-thai-coach-xyler-rodis", "Xyler Rodis", "Coach"],
  ["/muay-thai-coach-eric-tran", "Eric Tran", "Coach"],
  ["/muay-thai-coach-lindsay-bowering", "Lindsay Bowering", "Coach"]
];

const COACH_BIO_MARKERS = {
  "/muay-thai-coach-dave-engel": "Dave has",
  "/muay-thai-coach-joe-chernay": "Joe  is",
  "/muay-thai-coach-brandon-lydick": "Brandon's journey",
  "/muay-thai-coach-tina-carter": "Tina discovered",
  "/muay-thai-coach-xyler-rodis": "Born and raised",
  "/muay-thai-coach-eric-tran": "Eric started",
  "/muay-thai-coach-lindsay-bowering": "Born  and raised"
};

const VIDEO_FILTERS = [
  ["/videos", "All"],
  ["/videos/gym-videos", "Gym Videos"],
  ["/videos/fight-videos", "Fight Videos"],
  ["/videos/instructional-videos", "Instructional Videos"]
];

const esc = (value = "") =>
  String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);

const normalize = (value = "") => String(value ?? "").replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();

function pageRoute(url) {
  const parsed = new URL(url);
  const pathname = parsed.pathname.replace(/\/$/, "") || "/";
  return pathname;
}

function publicHref(href) {
  if (!href) return "#";
  try {
    const parsed = new URL(href);
    if (parsed.hostname === "www.cmasf.com" || parsed.hostname === "cmasf.com") {
      return `${parsed.pathname}${parsed.hash}`;
    }
  } catch {
    return href;
  }
  return href;
}

function isVisualAsset(src = "") {
  return /images\.squarespace-cdn\.com|i\.ytimg\.com|video\.squarespace-cdn\.com/.test(src);
}

function youtubeId(src = "") {
  const match = src.match(/\/vi\/([^/]+)/);
  return match ? match[1] : "";
}

function cleanTitle(page) {
  return normalize(page?.page?.title || "California Martial Athletics").replace(/\s+—\s+California Martial Athletics$/, "");
}

function heading(page, fallback = "California Martial Athletics") {
  const first = page?.content?.headings?.find((item) => item.level === "h1") || page?.content?.headings?.[0];
  return normalize(first?.text || fallback);
}

function visualImages(page, options = {}) {
  const seen = new Set();
  const images = (page?.images || []).filter((image) => {
    if (!isVisualAsset(image.src)) return false;
    if (options.noLogo && /CMASF-Logo-05|CMASF-Logo-02/.test(image.src)) return false;
    if (seen.has(image.src)) return false;
    seen.add(image.src);
    return true;
  });
  return images;
}

function imageByPurpose(page, purpose) {
  return visualImages(page).find((image) => image.inferred_purpose === purpose)?.src || visualImages(page)[0]?.src || "";
}

function imageContaining(page, token) {
  return visualImages(page).find((image) => image.src.includes(token))?.src || "";
}

function titleWithoutBrand(value) {
  return normalize(value).replace(/\s+—\s+California Martial Athletics$/, "");
}

async function loadPages() {
  const files = (await fs.readdir(root)).filter((file) => /^www_cmasf_com.*\.json$/.test(file));
  const pages = new Map();
  const sourcePages = [];
  for (const file of files) {
    const fullPath = path.join(root, file);
    const data = JSON.parse(await fs.readFile(fullPath, "utf8"));
    const route = pageRoute(data.page.url);
    data.source_file = file;
    data.route = route;
    pages.set(route, data);
    sourcePages.push(data);
  }
  return { pages, sourcePages };
}

const { pages, sourcePages } = await loadPages();

function page(route) {
  return pages.get(route) || pages.get("/") || sourcePages[0];
}

const homePage = page("/");
const logo = sourcePages.flatMap((item) => item.images || []).find((image) => image.inferred_purpose === "logo")?.src || "";
const footerLogo = sourcePages.flatMap((item) => item.images || []).find((image) => /CMASF-Logo-02\.gif/.test(image.src))?.src || logo;

function renderHeader(activeRoute) {
  const navLinks = NAV.map(([href, label]) => {
    const active = activeRoute === href || (href !== "/" && activeRoute.startsWith(`${href}/`));
    return `<a href="${esc(href)}" class="${active ? "is-active" : ""}">${esc(label)}</a>`;
  }).join("");
  return `
    <header class="site-header">
      <div class="header-inner">
        <a class="brand" href="/" aria-label="California Martial Athletics home">
          ${logo ? `<img src="${esc(logo)}" alt="California Martial Athletics">` : ""}
          <span>California Martial Athletics</span>
        </a>
        <button class="menu-button" type="button" aria-expanded="false" aria-label="Open Menu" data-menu-button><span></span></button>
        <nav class="site-nav" data-site-nav>${navLinks}</nav>
      </div>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          ${footerLogo ? `<img class="footer-logo" src="${esc(footerLogo)}" alt="">` : ""}
        </div>
        <nav class="footer-links" aria-label="Footer">
          ${FOOTER_LINKS.map(([href, label]) => `<a href="${esc(href)}">${esc(label)}</a>`).join("")}
        </nav>
        <div class="footer-contact">
          <p><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p>
          <p>${CONTACT.phone}</p>
          <p>${CONTACT.shortAddress}</p>
        </div>
      </div>
    </footer>`;
}

function shell(currentPage, activeRoute, content) {
  const title = currentPage?.page?.title || "California Martial Athletics";
  const description = currentPage?.page?.meta_description || "California Martial Athletics offers authentic Muay Thai training in San Francisco.";
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}">
    <link rel="canonical" href="${esc(currentPage?.page?.canonical || `https://www.cmasf.com${activeRoute}`)}">
    <link rel="stylesheet" href="/assets/styles.css">
    <script defer src="/assets/app.js"></script>
  </head>
  <body>
    <a class="skip-link" href="#main">Skip to Content</a>
    ${renderHeader(activeRoute)}
    <main id="main">${content}</main>
    ${renderFooter()}
  </body>
</html>`;
}

function hero({ kicker, title, lede, image, actions = [] }) {
  const style = image ? ` style="--hero-image: url('${esc(image)}')"` : "";
  return `
    <section class="hero"${style}>
      <div class="hero-content">
        ${kicker ? `<p class="kicker">${esc(kicker)}</p>` : ""}
        <h1>${esc(title)}</h1>
        ${lede ? `<p class="lede">${esc(lede)}</p>` : ""}
        ${actions.length ? `<div class="hero-actions">${actions.map((action, index) => `<a class="button ${index === 1 ? "alt" : "red"}" href="${esc(action.href)}">${esc(action.label)}</a>`).join("")}</div>` : ""}
      </div>
    </section>`;
}

function renderImage(src, alt = "", className = "") {
  if (!src) return "";
  return `<img${className ? ` class="${esc(className)}"` : ""} src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
}

function contactForm(privateRequest = false) {
  return `
    <form class="contact-form" data-form>
      <div class="field-grid">
        <label>First Name <input name="first_name" autocomplete="given-name" required></label>
        <label>Last Name <input name="last_name" autocomplete="family-name" required></label>
      </div>
      ${privateRequest ? `<label>Phone <input name="phone" autocomplete="tel"></label>` : ""}
      <label>Email <input type="email" name="email" autocomplete="email" required></label>
      <label>Message <textarea name="message" required></textarea></label>
      <button class="button red" type="submit">${privateRequest ? "Submit" : "Send"}</button>
      <p class="form-status" data-form-status></p>
    </form>`;
}

function contactSection() {
  return `
    <section class="section bone" id="contact">
      <div class="container contact-layout">
        <div>
          <p class="eyebrow">Try a Class</p>
          <h2 class="section-heading">Contact us to try a class!</h2>
          <p class="narrow">No pre-registration is required, but first-timers should contact CMA so the team can recommend the right beginner class.</p>
          <div class="info-panel">
            <p><strong>Email</strong><br><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></p>
            <p><strong>Phone</strong><br><a href="tel:+14153599294">${CONTACT.phone}</a></p>
            <p><strong>${CONTACT.address}</strong></p>
          </div>
          <a class="map-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}"><span>1217 Polk St San Francisco</span></a>
        </div>
        ${contactForm(false)}
      </div>
    </section>`;
}

function reviewsSection() {
  return `
    <section class="section dark">
      <div class="container">
        <p class="eyebrow">reviews</p>
        <h2 class="section-heading">Members train hard and feel welcome.</h2>
        <div class="cards-grid">
          ${REVIEWS.map((review) => `
            <article class="review-card">
              <blockquote>${esc(review.quote)}</blockquote>
              <cite>${esc(review.author)} <span class="muted">${esc(review.location)}</span></cite>
            </article>`).join("")}
        </div>
      </div>
    </section>`;
}

function assetGallery(currentPage, limit = 8) {
  const images = visualImages(currentPage, { noLogo: true }).slice(0, limit);
  if (!images.length) return "";
  return `
    <section class="section tight">
      <div class="container">
        <div class="asset-gallery">
          ${images.map((image) => renderImage(image.src, image.alt || image.surrounding_text || "")).join("")}
        </div>
      </div>
    </section>`;
}

function renderHome(currentPage) {
  const heroImage = imageByPurpose(currentPage, "hero");
  const still = imageContaining(currentPage, "CMA-2024-Promo") || visualImages(currentPage, { noLogo: true })[1]?.src;
  const tbaLogo = imageContaining(currentPage, "TBA+logo");
  const background = imageByPurpose(currentPage, "background");
  return `
    ${hero({
      kicker: "California Martial Athletics",
      title: heading(currentPage, "AUthentic muay thai in the heart of san francisco"),
      lede: "more than a gym. a community.",
      image: heroImage,
      actions: [
        { href: "#contact", label: "Try a Class" },
        { href: "/schedule", label: "View Schedule" }
      ]
    })}
    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow">All levels welcome</p>
          <h2 class="section-heading">No experience necessary.</h2>
          <p>Our experienced coaches have over 25 years of teaching, working with everyone from first-timers to pro fighters. We train together, grow together, and push for progress inside and out.</p>
          <div class="actions"><a class="button" href="/schedule">View Schedule</a></div>
        </div>
        <div class="media-frame">${renderImage(still, "CMASF training")}</div>
      </div>
    </section>
    <section class="section red">
      <div class="container split reverse">
        <div class="logo-tile">${renderImage(tbaLogo, "Thai Boxing Association of America")}</div>
        <div>
          <p class="eyebrow">Certified</p>
          <h2 class="section-heading">Certified by the Thai Boxing Association of America</h2>
          <p>California Martial Athletics teaches authentic Muay Thai with a team that supports brand-new students, youth athletes, active competitors, and experienced practitioners.</p>
          <div class="actions"><a class="button alt" href="/coaches">Meet the Coaches</a></div>
        </div>
      </div>
    </section>
    <section class="section" style="background-image: linear-gradient(rgba(251,250,246,.88), rgba(251,250,246,.88)), url('${esc(background)}'); background-size: cover; background-position: center;">
      <div class="container">
        <p class="eyebrow">Training home</p>
        <h2 class="section-heading narrow">Authentic Muay Thai in the heart of San Francisco.</h2>
      </div>
    </section>
    ${reviewsSection()}
    ${contactSection()}`;
}

function renderAbout(currentPage) {
  return `
    ${hero({
      kicker: "About CMA",
      title: heading(currentPage, "Premier Muay Thai Training in San Francisco"),
      lede: "California Martial Athletics has been raising the bar for martial arts and fitness since 2019.",
      image: imageByPurpose(currentPage, "hero"),
      actions: [{ href: "/schedule", label: "View Schedule" }]
    })}
    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow">Facility</p>
          <h2 class="section-heading">Biggest Muay Thai Gym in San Francisco</h2>
          <ul class="feature-list">
            <li>Two-Level Facility: 4,500+ sq ft across two levels for Muay Thai classes, bag work, strength, and conditioning.</li>
            <li>Full boxing ring plus 9 heavy bags.</li>
            <li>Strength and conditioning area with weights, cardio equipment, and assault bikes.</li>
            <li>Beginner-Friendly Environment: Classes for every level.</li>
            <li>30+ Weekly Classes: Offered mornings, midday, and evenings.</li>
            <li>Elite Coaches: 25+ years guiding casual members to competitive fighters.</li>
          </ul>
        </div>
        <div class="media-frame">${renderImage(visualImages(currentPage, { noLogo: true })[1]?.src || imageByPurpose(currentPage, "content"), "CMA facility")}</div>
      </div>
    </section>
    <section class="section bone">
      <div class="container cards-grid two">
        <article class="info-panel">
          <p class="eyebrow">Amenities</p>
          <h2>A complete training experience.</h2>
          <ul class="plain-list">
            <li>Women's and men's locker rooms with showers and an all-gender restroom.</li>
            <li>Secure storage for your gear and personal items.</li>
            <li>Open mat space for stretching, warm-ups, and extra training.</li>
          </ul>
        </article>
        <article class="info-panel">
          <p class="eyebrow">Transportation & Parking</p>
          <h2>Polk Street, between Bush and Sutter.</h2>
          <ul class="plain-list">
            <li>Street parking, parking garages, and multiple public transit stops are nearby.</li>
            <li>Polk-Bush Garage: 1399 Bush St.</li>
            <li>Civic Center Bart Station.</li>
            <li>Muni: 19, 49, 14.</li>
          </ul>
        </article>
      </div>
    </section>
    ${assetGallery(currentPage, 4)}
    ${reviewsSection()}
    ${contactSection()}`;
}

function renderSchedule(currentPage) {
  return `
    ${hero({
      kicker: "Classes",
      title: "SCHEDULE",
      lede: "No pre-regristration required. A beginner class is required of everyone in order to meet class standards and curriculum.",
      image: imageByPurpose(page("/about"), "background") || imageByPurpose(homePage, "hero"),
      actions: [{ href: "#contact", label: "Try a Class" }]
    })}
    <section class="section">
      <div class="container">
        <div class="narrow">
          <p>Please arrive 5 minutes before class starts to fill out new member paperwork. Contact us by email or phone for a recommended class.</p>
          <p class="muted">*Intermediate class requires gloves, shin guards and coach permission. **Fighter training and advanced drilling require coach permission. ***No unsupervised sparring without coach approval. ****Open gym during all class times.</p>
        </div>
        <div class="schedule-grid">
          ${SCHEDULE.map((day) => `
            <article class="day-card">
              <h2>${esc(day.day)}</h2>
              ${day.classes.map(([time, name]) => `<div class="class-row"><strong>${esc(time)}</strong><span>${esc(name)}</span></div>`).join("")}
            </article>`).join("")}
        </div>
      </div>
    </section>
    ${contactSection()}`;
}

function renderPricing(currentPage) {
  return `
    ${hero({
      kicker: "Memberships",
      title: "pricing",
      lede: "Contact us today to try your first class for just $25. See schedule for class times.",
      image: imageByPurpose(homePage, "background") || imageByPurpose(homePage, "hero"),
      actions: [{ href: "/contact", label: "Try a Class" }]
    })}
    <section class="section">
      <div class="container pricing-grid">
        ${PRICING.map((plan) => `
          <article class="price-card">
            <h2>${esc(plan.title)}</h2>
            <p class="price">${esc(plan.price)}</p>
            <p><strong>${esc(plan.cadence)}</strong></p>
            <ul class="plain-list">${plan.details.map((detail) => `<li>${esc(detail)}</li>`).join("")}</ul>
          </article>`).join("")}
      </div>
    </section>`;
}

function renderYouth(currentPage) {
  const images = visualImages(currentPage, { noLogo: true });
  return `
    ${hero({
      kicker: "Youth Program",
      title: heading(currentPage, "youth muay thai"),
      lede: "Building young champions through structured Muay Thai training for ages 8 to 13.",
      image: imageByPurpose(currentPage, "hero"),
      actions: [{ href: "#contact", label: "Try a Class" }]
    })}
    <section class="section">
      <div class="container split">
        <div>
          <p class="eyebrow">Building Young Champions</p>
          <h2 class="section-heading">Confidence in training and everyday life.</h2>
          <p>Our Youth Muay Thai program is built to help young Nak Muays, or practitioners of Muay Thai, grow into confident leaders both in training and in everyday life. Each class is 45 minutes long and follows a structured curriculum that sets monthly goals, encourages teamwork, and builds lasting self-esteem.</p>
          <p>Along with learning the fundamentals of Muay Thai, students develop important life skills such as discipline, respect, and self-defense. The program welcomes all children between the ages of 8 and 13, whether they are training for competition or simply looking for a fun and active way to stay healthy. No previous experience is required.</p>
        </div>
        <div class="media-frame">${renderImage(images[1]?.src || images[0]?.src, "Youth Muay Thai")}</div>
      </div>
    </section>
    <section class="section dark">
      <div class="container narrow">
        <p class="eyebrow">Proven Coaching, Real Results</p>
        <h2 class="section-heading">International competition experience.</h2>
        <p>Our coaching team brings over 15 years of experience in teaching youth Muay Thai. In 2022, they guided one of our young athletes through her first international competition at the WBC International Youth Muay Thai Games in Calgary, Canada, where she earned a gold medal in the 16 to 17 year old division.</p>
      </div>
    </section>
    ${contactSection()}`;
}

function coachImage(route) {
  return visualImages(page(route), { noLogo: true }).find((image) => !/thumbnail$/.test(image.src))?.src || "";
}

function renderCoaches(currentPage) {
  return `
    ${hero({
      kicker: "CMA Team",
      title: heading(currentPage, "Meet the Coaches"),
      lede: "Experienced Muay Thai coaches for first-timers, competitors, youth athletes, and private coaching.",
      image: coachImage("/muay-thai-coach-dave-engel") || imageByPurpose(homePage, "hero"),
      actions: [{ href: "/schedule", label: "Schedule" }]
    })}
    <section class="section">
      <div class="container coach-grid">
        ${COACHES.map(([route, name, role]) => `
          <article class="card coach-card">
            <a href="${esc(route)}">
              ${renderImage(coachImage(route), name)}
              <div class="card-body">
                <h2>${esc(name)}</h2>
                <p>${esc(role)}</p>
                <span class="button ghost">Read Bio</span>
              </div>
            </a>
          </article>`).join("")}
      </div>
    </section>`;
}

function coachBody(currentPage, route) {
  const title = heading(currentPage, cleanTitle(currentPage));
  let text = normalize(currentPage.content.visible_text);
  const titleIndex = text.indexOf(title);
  if (titleIndex >= 0) text = text.slice(titleIndex + title.length);
  text = text.replace(/^< back\s*/i, "").replace(/Play 00:00 .*?% buffered\s*/i, "");
  const privateIndex = text.indexOf("Available for Private Coaching");
  if (privateIndex >= 0) text = text.slice(0, privateIndex);

  const competitionIndex = text.indexOf("Competition Experience:");
  const coachingIndex = text.indexOf("Coaching Experience:");
  const marker = COACH_BIO_MARKERS[route] || "";
  const markerIndex = marker ? text.indexOf(marker) : -1;

  const competition = competitionIndex >= 0 && coachingIndex > competitionIndex
    ? text.slice(competitionIndex + "Competition Experience:".length, coachingIndex)
    : "";
  const coachingEnd = markerIndex > coachingIndex ? markerIndex : text.length;
  const coaching = coachingIndex >= 0 ? text.slice(coachingIndex + "Coaching Experience:".length, coachingEnd) : "";
  const bio = markerIndex >= 0 ? text.slice(markerIndex) : text.replace(competition, "").replace(coaching, "");
  return { title, competition: normalize(competition), coaching: normalize(coaching), bio: normalize(bio) };
}

function renderCoachDetail(currentPage, route) {
  const coach = COACHES.find(([coachRoute]) => coachRoute === route);
  const body = coachBody(currentPage, route);
  return `
    <section class="section">
      <div class="container coach-detail">
        <div>
          ${renderImage(coachImage(route), coach?.[1] || body.title)}
          <div class="actions"><a class="button ghost" href="/coaches">&lt; back</a></div>
        </div>
        <div>
          <p class="eyebrow">${esc(coach?.[2] || "Muay Thai Coach")}</p>
          <h1 class="page-title">${esc(body.title)}</h1>
          ${body.competition ? `<article class="info-panel"><h2>Competition Experience</h2><p>${esc(body.competition)}</p></article>` : ""}
          ${body.coaching ? `<article class="info-panel"><h2>Coaching Experience</h2><p>${esc(body.coaching)}</p></article>` : ""}
          ${body.bio ? `<article class="info-panel"><p>${esc(body.bio)}</p></article>` : ""}
        </div>
      </div>
    </section>
    <section class="section bone">
      <div class="container contact-layout">
        <div>
          <p class="eyebrow">Private Coaching</p>
          <h2 class="section-heading">Available for Private Coaching</h2>
        </div>
        ${contactForm(true)}
      </div>
    </section>`;
}

function videoCards() {
  const listing = page("/videos");
  const details = [...pages.entries()]
    .filter(([route]) => route.startsWith("/videos/v/"))
    .map(([route, data]) => ({ route, title: titleWithoutBrand(data.page.title) }));
  return (listing.images || [])
    .filter((image) => /i\.ytimg\.com/.test(image.src))
    .map((image) => {
      const title = normalize(image.alt || image.surrounding_text);
      const detail = details.find((item) => normalize(item.title).toLowerCase() === title.toLowerCase());
      const id = youtubeId(image.src);
      return {
        title,
        route: detail?.route || "/videos",
        category: videoCategory(title),
        thumbnail: image.src,
        id
      };
    });
}

function videoCategory(title) {
  const text = title.toLowerCase();
  if (/technique|clinch|combos|kick/.test(text)) return "Instructional Videos";
  if (/ vs |rising stars|a1combat|fairtex|wbc|carlo|fernando|mathilda|parmida/.test(text)) return "Fight Videos";
  return "Gym Videos";
}

const videos = videoCards();

function videoGrid(items) {
  return `<div class="video-grid">${items.map((video) => `
    <article class="video-card">
      <a href="${esc(video.route)}">
        <div class="thumb">${renderImage(video.thumbnail, video.title)}<span class="play-mark" aria-hidden="true"></span></div>
        <span class="category-label">${esc(video.category)}</span>
        <h2>${esc(video.title)}</h2>
      </a>
    </article>`).join("")}</div>`;
}

function renderVideoListing(currentPage, route) {
  const filter = route === "/videos" ? "" : VIDEO_FILTERS.find(([href]) => href === route)?.[1] || "";
  const items = filter ? videos.filter((video) => video.category === filter) : videos;
  return `
    <section class="section">
      <div class="container">
        <p class="eyebrow">Skip to Videos</p>
        <h1 class="page-title">${esc(filter || "Videos")}</h1>
        <nav class="video-filters" aria-label="Video categories">
          ${VIDEO_FILTERS.map(([href, label]) => `<a class="${href === route ? "is-active" : ""}" href="${esc(href)}">${esc(label)}</a>`).join("")}
        </nav>
        ${videoGrid(items)}
      </div>
    </section>`;
}

function parseVideoContent(currentPage, currentTitle) {
  const raw = normalize(currentPage.content.visible_text);
  const titleIndex = raw.indexOf(currentTitle);
  const meta = titleIndex > -1 ? raw.slice(0, titleIndex).replace(/^Skip to Content About Schedule Youth Program FAQs Contact\s*/, "") : "";
  let description = titleIndex > -1 ? raw.slice(titleIndex + currentTitle.length) : "";
  description = description.split(" Next ")[0].split(" You Might Also Like ")[0];
  return { meta: normalize(meta), description: normalize(description) };
}

function renderVideoDetail(currentPage) {
  const currentTitle = titleWithoutBrand(currentPage.page.title);
  const current = videos.find((video) => normalize(video.title).toLowerCase() === normalize(currentTitle).toLowerCase());
  const parsed = parseVideoContent(currentPage, currentTitle);
  const relatedTitles = (currentPage.content.headings || [])
    .map((item) => normalize(item.text))
    .filter((text) => text && text !== currentTitle && text !== "You Might Also Like");
  const related = relatedTitles
    .map((title) => videos.find((video) => normalize(video.title).toLowerCase() === normalize(title).toLowerCase()))
    .filter(Boolean);
  const fallbackRelated = videos.filter((video) => video.category === current?.category && video.title !== currentTitle).slice(0, 3);
  return `
    <section class="section">
      <div class="container">
        <p class="eyebrow">${esc(parsed.meta || current?.category || "Videos")}</p>
        <h1 class="page-title">${esc(currentTitle)}</h1>
        <div class="section tight">
          ${current?.id ? `<iframe class="video-player" src="https://www.youtube.com/embed/${esc(current.id)}" title="${esc(currentTitle)}" allowfullscreen></iframe>` : ""}
        </div>
        ${parsed.description ? `<div class="narrow"><p>${esc(parsed.description)}</p></div>` : ""}
      </div>
    </section>
    <section class="section bone">
      <div class="container">
        <h2 class="section-heading">You Might Also Like</h2>
        ${videoGrid((related.length ? related : fallbackRelated).slice(0, 5))}
      </div>
    </section>`;
}

function renderFaq(currentPage) {
  return `
    ${hero({
      kicker: "FAQs",
      title: heading(currentPage, "Frequently Asked Questions"),
      lede: "Questions from the captured CMA FAQ page, with first-class guidance and class-level requirements.",
      image: imageByPurpose(homePage, "background") || imageByPurpose(homePage, "hero")
    })}
    <section class="section">
      <div class="container narrow">
        <div class="faq-list">
          ${FAQS.map((faq, index) => `
            <details class="faq-item" ${index === 0 ? "open" : ""}>
              <summary>${esc(faq.question)}</summary>
              <p>${esc(faq.answer)}</p>
            </details>`).join("")}
        </div>
      </div>
    </section>
    ${contactSection()}`;
}

function renderContact(currentPage) {
  return `
    ${hero({
      kicker: "Contact",
      title: heading(currentPage, "Contact us to try a class!"),
      lede: `${CONTACT.email} | ${CONTACT.phone} | ${CONTACT.address}`,
      image: imageByPurpose(homePage, "background") || imageByPurpose(homePage, "hero")
    })}
    ${contactSection()}`;
}

function renderCart(currentPage) {
  return `
    <section class="section">
      <div class="container">
        <h1 class="page-title">Shopping Cart</h1>
        <div class="cart-box">
          <p>You have nothing in your shopping cart.</p>
          <a class="button red" href="/pricing">Continue Shopping</a>
        </div>
      </div>
    </section>`;
}

function renderGeneric(currentPage) {
  const title = heading(currentPage, cleanTitle(currentPage));
  const lead = normalize(currentPage.content.visible_text).slice(0, 260);
  return `
    ${hero({ kicker: "California Martial Athletics", title, lede: lead, image: imageByPurpose(currentPage, "hero") || imageByPurpose(homePage, "hero") })}
    ${assetGallery(currentPage)}`;
}

function renderRoute(route, currentPage) {
  if (route === "/" || route === "/home") return renderHome(currentPage);
  if (route === "/about") return renderAbout(currentPage);
  if (route === "/schedule") return renderSchedule(currentPage);
  if (route === "/pricing") return renderPricing(currentPage);
  if (route === "/youth-program") return renderYouth(currentPage);
  if (route === "/coaches") return renderCoaches(currentPage);
  if (COACHES.some(([coachRoute]) => coachRoute === route)) return renderCoachDetail(currentPage, route);
  if (route === "/videos" || route === "/videos/gym-videos" || route === "/videos/fight-videos" || route === "/videos/instructional-videos") return renderVideoListing(currentPage, route);
  if (route.startsWith("/videos/v/")) return renderVideoDetail(currentPage);
  if (route === "/faqs") return renderFaq(currentPage);
  if (route === "/contact") return renderContact(currentPage);
  if (route === "/cart") return renderCart(currentPage);
  return renderGeneric(currentPage);
}

async function writeRoute(route, html) {
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route.replace(/^\//, ""), "index.html");
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, html);
}

function assetManifest() {
  const pagesManifest = sourcePages.map((item) => ({
    source: item.source_file,
    route: item.route,
    url: item.page.url,
    title: item.page.title,
    assets: (item.images || []).filter((image) => isVisualAsset(image.src)).map((image) => ({
      src: image.src,
      alt: image.alt || "",
      purpose: image.inferred_purpose || ""
    }))
  }));
  const assets = [...new Set(pagesManifest.flatMap((item) => item.assets.map((asset) => asset.src)))];
  return { generatedFrom: "www_cmasf_com*.json", pageCount: sourcePages.length, pages: pagesManifest, assets };
}

async function build() {
  await fs.rm(dist, { recursive: true, force: true });
  await fs.mkdir(assetsDir, { recursive: true });
  await fs.copyFile(path.join(root, "src", "styles.css"), path.join(assetsDir, "styles.css"));
  await fs.copyFile(path.join(root, "src", "app.js"), path.join(assetsDir, "app.js"));

  const routes = [...pages.keys()].sort((a, b) => a.localeCompare(b));
  if (!routes.includes("/")) routes.unshift("/");
  for (const route of routes) {
    const currentPage = page(route);
    await writeRoute(route, shell(currentPage, route === "/home" ? "/" : route, renderRoute(route, currentPage)));
  }

  const notFound = shell(homePage, "/", `
    <section class="section">
      <div class="container">
        <h1 class="page-title">Page not found</h1>
        <p class="narrow">The requested CMASF page was not part of the captured JSON export.</p>
        <a class="button red" href="/">Return Home</a>
      </div>
    </section>`);
  await fs.writeFile(path.join(dist, "404.html"), notFound);
  await fs.writeFile(path.join(assetsDir, "site-manifest.json"), JSON.stringify(assetManifest(), null, 2));
  await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap(routes));
  console.log(`Built ${routes.length} pages into ${path.relative(root, dist)}`);
}

function sitemap(routes) {
  const urls = routes.map((route) => `  <url><loc>https://www.cmasf.com${route === "/" ? "/" : route}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

await build();

// Dynamic Interactions and Business Logic for Anubhav Chand Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initROASSimulator();
  initPlaybooks();
  initSkills();
  initMobileMenu();
  initPencilAnimation();
});

/* ========================================================
   1. CAMPAIGN GROWTH & ROAS SIMULATOR
======================================================== */
function initROASSimulator() {
  const spendSlider = document.getElementById('spend-slider');
  const cpcSlider = document.getElementById('cpc-slider');
  const cvrSlider = document.getElementById('cvr-slider');
  const aovSlider = document.getElementById('aov-slider');

  const spendVal = document.getElementById('spend-val');
  const cpcVal = document.getElementById('cpc-val');
  const cvrVal = document.getElementById('cvr-val');
  const aovVal = document.getElementById('aov-val');

  const resClicks = document.getElementById('res-clicks');
  const resConv = document.getElementById('res-conv');
  const resCpa = document.getElementById('res-cpa');
  const resRev = document.getElementById('res-rev');
  const resRoas = document.getElementById('res-roas');

  function calculate() {
    const spend = parseFloat(spendSlider.value);
    const cpc = parseFloat(cpcSlider.value);
    const cvr = parseFloat(cvrSlider.value);
    const aov = parseFloat(aovSlider.value);

    // Update Slider Labels
    spendVal.textContent = `$${spend.toLocaleString()}`;
    cpcVal.textContent = `$${cpc.toFixed(2)}`;
    cvrVal.textContent = `${cvr.toFixed(1)}%`;
    aovVal.textContent = `$${aov.toLocaleString()}`;

    // Calculations
    const clicks = Math.round(spend / cpc);
    const conversions = Math.round(clicks * (cvr / 100));
    const cpa = conversions > 0 ? (spend / conversions).toFixed(2) : '0.00';
    const revenue = Math.round(conversions * aov);
    const roas = spend > 0 ? (revenue / spend).toFixed(2) : '0.00';
    const roasPercent = Math.round((revenue / spend) * 100);

    // Update Result Tiles
    resClicks.textContent = clicks.toLocaleString();
    resConv.textContent = conversions.toLocaleString();
    resCpa.textContent = `$${parseFloat(cpa).toLocaleString()}`;
    resRev.textContent = `$${revenue.toLocaleString()}`;
    resRoas.textContent = `${roas}x (${roasPercent}%)`;
  }

  [spendSlider, cpcSlider, cvrSlider, aovSlider].forEach(slider => {
    slider.addEventListener('input', calculate);
  });

  calculate();
}

/* ========================================================
   2. CAMPAIGN PLAYBOOKS & ARCHITECTURE SWITCHER
======================================================== */
const playbooks = {
  sem: {
    title: "Google Ads (Search) High-Intent Campaign Blueprint",
    subtitle: "Google Digital Academy Certified Architecture for Maximizing Search Impression Share & ROAS",
    steps: [
      {
        tag: "PHASE 01: INTENT MAPPING",
        heading: "Commercial Intent Keyword Discovery",
        desc: "Segmentation into Exact and Phrase match types. Strict exclusion of broad informational queries to eliminate ad spend waste.",
        code: `Match Types: [Exact] High-converting terms | "Phrase" Commercial queries\nNegative List: -free, -jobs, -salary, -cheap, -diy, -sample\nTarget Quality Score: 8/10+`
      },
      {
        tag: "PHASE 02: AD RELEVANCY",
        heading: "Responsive Search Ad (RSA) Architecture",
        desc: "Deploying 15 dynamic headlines and 4 descriptions with keyword insertion (DKI) and custom sitelinks, callouts, and structured snippets.",
        code: `Headlines: High-Volume Keyword + Value Proposition + Urgent CTA\nAd Assets: Sitelinks (4+), Callouts (6+), Call Extension, Promo Snippets\nCTR Objective: 5.5% - 8.2% across top positions`
      },
      {
        tag: "PHASE 03: BID OPTIMIZATION",
        heading: "Smart Bidding Transition Strategy",
        desc: "Start with Enhanced CPC or Maximize Clicks to build first 30-50 conversion signals, then migrate to Target CPA / Target ROAS.",
        code: `Telemetry: Google Tag Manager + GA4 Enhanced Ecommerce\nBid Model: Maximize Conversions -> Target CPA (T-CPA)`
      }
    ]
  },
  youtube: {
    title: "YouTube Full-Funnel Performance & Video Action Engine",
    subtitle: "Google Partner Gurukul Certified Video Methodology for Driving Demand and Conversions",
    steps: [
      {
        tag: "STAGE 01: THE 5-SECOND HOOK",
        heading: "Attention Capture & View-Through Design",
        desc: "Structuring video ads with immediate problem identification in seconds 0-5 to eliminate unqualified viewer skip-costs.",
        code: `Format: YouTube In-Stream Skippable & YouTube Shorts\nCreative Rule: ABCD Framework (Attention, Branding, Connection, Direction)\nSkip Rate Target: Filter out passive browsers before 30s charge`
      },
      {
        tag: "STAGE 02: AUDIENCE TARGETING",
        heading: "Custom Intent & In-Market Segments",
        desc: "Targeting users who recently searched for competitor keywords on Google Search, bridging Search Intent with Video storytelling.",
        code: `Audience 1: Custom Intent (Competitor & Solution Google Searchers)\nAudience 2: In-Market (High buyer readiness within 7 days)\nAudience 3: 1st Party Customer Match Lists (LTV Expansion)`
      },
      {
        tag: "STAGE 03: CONVERSION ACTION",
        heading: "Video Action Campaigns (VAC) & Retargeting",
        desc: "Direct-response overlays, clickable product feeds, and dedicated fast-loading mobile landing pages for instant conversion.",
        code: `CTA Asset: Sticky banner + Sitelink extensions on mobile\nOptimization Goal: View-Through Conversions (VTC) & Click-Through Leads`
      }
    ]
  },
  automation: {
    title: "Automated Marketing & Analytics Reporting Pipeline",
    subtitle: "BCA Technical Stack: Automating Daily KPI Aggregation with PowerShell, Bash & Cloud Tools",
    steps: [
      {
        tag: "STEP 01: DATA INGESTION",
        heading: "Cross-Platform Metric Aggregation",
        desc: "Scheduled scripts pulling daily spend, impressions, clicks, conversions, and revenue metrics from advertising accounts.",
        code: `#!/usr/bin/env bash\n# Daily Metric Ingestion Script\ncurl -s -X POST https://api.ads.platform/v1/reports \\\n  -H "Authorization: Bearer $ADS_TOKEN" \\\n  -d '{"date": "yesterday", "metrics": ["cost", "clicks", "conversions"]}' \\\n  > /tmp/daily_ads_metrics.json`
      },
      {
        tag: "STEP 02: PARSING & DISCREPANCY CHECK",
        heading: "PowerShell Anomaly Detection",
        desc: "Automated verification checking if CPA exceeded allowable tolerance or if ad spend hit daily cap unexpectedly.",
        code: `$metrics = Get-Content /tmp/daily_ads_metrics.json | ConvertFrom-Json\nif ($metrics.cpa -gt $target_cpa * 1.25) {\n    Send-Alert "[ALERT] CPA Spiked on Campaign ID $($metrics.campaign_id)"\n}`
      },
      {
        tag: "STEP 03: EXECUTIVE DASHBOARD SYNC",
        heading: "Auto-Populating Sheets & Executive Reports",
        desc: "Piping clean data into centralized Google Sheets and performance dashboards, providing stakeholders with instant visibility.",
        code: `Output: Real-time ROAS Trends, CPA Heatmaps, MoM Comparisons\nTime Saved: 6+ hours weekly of manual spreadsheet copy-pasting`
      }
    ]
  }
};

function switchPlaybook(key) {
  document.querySelectorAll('.playbook-tab').forEach(t => t.classList.remove('active'));
  const activeBtn = document.getElementById(`tab-${key}`);
  if (activeBtn) activeBtn.classList.add('active');

  const p = playbooks[key];
  const container = document.getElementById('playbook-content');
  if (!container) return;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="border-b border-slate-200 pb-4">
        <span class="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">${key.toUpperCase()} STRATEGY PLAYBOOK</span>
        <h3 class="text-2xl font-bold text-slate-900 mt-1">${p.title}</h3>
        <p class="text-sm text-slate-600 mt-1">${p.subtitle}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        ${p.steps.map(step => `
          <div class="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-sm transition-all space-y-3 flex flex-col justify-between">
            <div class="space-y-2">
              <span class="text-[11px] font-mono font-semibold text-blue-600">${step.tag}</span>
              <h4 class="text-base font-bold text-slate-900">${step.heading}</h4>
              <p class="text-xs text-slate-600 leading-relaxed">${step.desc}</p>
            </div>
            <div class="code-block mt-4 text-[11px] font-mono leading-relaxed bg-slate-900 text-blue-100 p-3 rounded-xl border border-slate-800">
              <pre><code>${escapeHtml(step.code)}</code></pre>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function initPlaybooks() {
  switchPlaybook('sem');
}

/* ========================================================
   3. SKILLS MATRIX WITH CATEGORY FILTERS
======================================================== */
const skillsData = [
  // Digital Marketing
  { name: "Google Ads (Search)", category: "marketing", level: "Google Certified", desc: "Search Engine Marketing, keyword match types, RSA creation, negative lists, and bidding strategies.", icon: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>` },
  { name: "YouTube Performance Marketing", category: "marketing", level: "Gurukul Certified", desc: "Video action campaigns, audience targeting, ABCD creative framework, and view-through conversions.", icon: `<svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>` },
  { name: "Campaign Optimization", category: "marketing", level: "Advanced", desc: "A/B testing ad copy, landing page alignment, budget scaling, and conversion rate optimization (CRO).", icon: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>` },
  { name: "Audience Targeting", category: "marketing", level: "Expert", desc: "Custom intent audiences, in-market segments, retargeting pools, and demographic exclusions.", icon: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke-width="2"></circle><circle cx="12" cy="12" r="5" stroke-width="2"></circle><circle cx="12" cy="12" r="1" fill="currentColor"></circle></svg>` },
  { name: "SEM Fundamentals", category: "marketing", level: "Certified", desc: "Auction dynamics, Quality Score mechanics, Ad Rank calculation, and CTR maximization.", icon: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>` },
  { name: "Data-Driven Strategy", category: "marketing", level: "Core Strength", desc: "Translating traffic and conversion metrics into predictable revenue and clear client growth roadmaps.", icon: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>` },

  // Analytics & Reporting
  { name: "KPI Tracking", category: "analytics", level: "Expert", desc: "End-to-end monitoring of CPA, ROAS, CTR, CPC, Conversion Rate, and Customer Retention metrics.", icon: `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>` },
  { name: "Performance Reporting", category: "analytics", level: "Advanced", desc: "Preparing executive summaries, identifying bottlenecks, and delivering actionable insights.", icon: `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>` },
  { name: "Dashboarding", category: "analytics", level: "Advanced", desc: "Visual performance cockpits for real-time visibility across campaigns and customer accounts.", icon: `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 01-1 1h-3a1 1 0 01-1-1v-6z"></path></svg>` },
  { name: "Excel & Google Sheets", category: "analytics", level: "Advanced", desc: "Pivot tables, VLOOKUP/XLOOKUP, formulas, cohort calculations, and custom data modeling.", icon: `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 4h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>` },

  // Technical & Automation (BCA Stack)
  { name: "HTML & CSS", category: "technical", level: "BCA Core", desc: "Landing page structure, responsive styling, form conversion optimization, and tracking tag placement.", icon: `<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>` },
  { name: "PowerShell & Bash", category: "technical", level: "BCA Core", desc: "Writing scripts to automate recurring data ingestion, reporting, and file transformations.", icon: `<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>` },
  { name: "Process Automation", category: "technical", level: "Advanced", desc: "Eliminating manual operational tasks to accelerate reporting velocity and accuracy.", icon: `<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><circle cx="12" cy="12" r="3" stroke-width="2"></circle></svg>` },
  { name: "Git & GitHub", category: "technical", level: "Proficient", desc: "Version control for scripts, landing page repositories, and code collaboration.", icon: `<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11v6m8-3a3 3 0 100-6 3 3 0 000 6zm0 0v1a3 3 0 01-3 3H8"></path></svg>` },
  { name: "AWS & Azure Panels", category: "technical", level: "Hands-on (Zarthi)", desc: "Navigating cloud consoles to resolve customer accounts, review settings, and coordinate tickets.", icon: `<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>` },

  // AI & Modern Workflows
  { name: "Claude AI", category: "ai", level: "Power User", desc: "Deep analytical synthesis, competitor copy dissection, and marketing automation design.", icon: `<svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>` },
  { name: "ChatGPT", category: "ai", level: "Power User", desc: "High-velocity ad copy generation, audience persona simulation, and search query clustering.", icon: `<svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>` }
];

function initSkills() {
  filterSkills('all');
}

function filterSkills(category) {
  document.querySelectorAll('.skill-filter-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = Array.from(document.querySelectorAll('.skill-filter-btn')).find(b => b.getAttribute('onclick')?.includes(category));
  if (activeBtn) activeBtn.classList.add('active');

  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  const filtered = category === 'all' ? skillsData : skillsData.filter(s => s.category === category);

  grid.innerHTML = filtered.map(skill => `
    <div class="bento-card p-5 flex flex-col justify-between space-y-3">
      <div>
        <div class="flex items-center justify-between">
          <div class="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
            ${skill.icon}
          </div>
          <span class="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">${skill.level}</span>
        </div>
        <h4 class="text-base font-bold text-slate-900 mt-2">${skill.name}</h4>
        <p class="text-xs text-slate-600 mt-1 leading-relaxed">${skill.desc}</p>
      </div>
      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span class="flex items-center gap-1">
          <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
          Category:
        </span>
        <span class="uppercase text-slate-800 font-bold">${skill.category}</span>
      </div>
    </div>
  `).join('');
}

/* ========================================================
   4. UTILITIES: TOAST & CLIPBOARD
======================================================== */
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || 'Copied to clipboard!');
  }).catch(() => {
    showToast('Failed to copy');
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3200);
}

/* ========================================================
   5. MOBILE MENU
======================================================== */
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

/* ========================================================
   6. CONTACT FORM SUBMISSION HANDLER
======================================================== */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const role = document.getElementById('contact-role').value;
  const msg = document.getElementById('contact-msg').value;

  showToast('Preparing email dispatch...');

  // Create prefilled mailto link for direct recruiter communication
  const subject = encodeURIComponent(`[Opportunity: ${role}] Contact from ${name}`);
  const body = encodeURIComponent(`Hi Anubhav,\n\nMy name is ${name} (${email}).\n\nI am contacting you regarding: ${role}\n\nMessage Details:\n${msg}\n\nLooking forward to speaking with you!`);
  
  window.location.href = `mailto:anubhavchand333@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    showToast('Inquiry drafted in your email client!');
    document.getElementById('contact-form').reset();
  }, 1000);
}

/* ========================================================
   7. REALISTIC GRAPHITE PENCIL CURSOR & SKETCH ANIMATION
======================================================== */
function initPencilAnimation() {
  let canvas = document.getElementById('pencil-trail-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'pencil-trail-canvas';
    document.body.appendChild(canvas);
  }

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const points = [];
  const particles = [];
  let mouse = { x: -100, y: -100, isDown: false, speed: 0 };
  let lastMouse = { x: -100, y: -100 };

  // Floating pencil visual element that follows mouse with realistic writing angle
  const pencilEl = document.createElement('div');
  pencilEl.id = 'animated-pencil-cursor';
  pencilEl.innerHTML = `
    <svg width="34" height="34" viewBox="0 0 32 32" style="filter: drop-shadow(2px 3px 4px rgba(0,0,0,0.25)); pointer-events: none;">
      <g transform="rotate(-40 16 16)">
        <!-- Eraser -->
        <rect x="13" y="1" width="6" height="4.5" rx="1.5" fill="#F472B6" stroke="#BE185D" stroke-width="0.5"/>
        <!-- Ferrule (metal band) -->
        <rect x="13" y="5.5" width="6" height="2.5" fill="#CBD5E1" stroke="#64748B" stroke-width="0.5"/>
        <!-- Yellow Pencil Body -->
        <rect x="13" y="8" width="6" height="15" fill="#FBBF24" stroke="#B45309" stroke-width="0.5"/>
        <line x1="15" y1="8" x2="15" y2="23" stroke="#F59E0B" stroke-width="0.75"/>
        <!-- Sharpened Wood -->
        <polygon points="13,23 19,23 16,29.5" fill="#FDE68A" stroke="#B45309" stroke-width="0.5"/>
        <!-- Graphite Tip -->
        <polygon points="15,27.5 17,27.5 16,30.5" fill="#1E293B"/>
      </g>
    </svg>
  `;
  pencilEl.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 100000;
    transform: translate(-100px, -100px);
    transition: transform 0.04s ease-out;
    will-change: transform;
  `;
  document.body.appendChild(pencilEl);

  function createGraphiteDust(x, y, count = 4) {
    for (let i = 0; i < count; i++) {
      particles.push({
        x: x + (Math.random() - 0.5) * 5,
        y: y + (Math.random() - 0.5) * 5,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2 - 0.5,
        size: Math.random() * 2 + 1,
        alpha: 0.8,
        decay: Math.random() * 0.03 + 0.02
      });
    }
  }

  function handleMove(x, y) {
    const dx = x - lastMouse.x;
    const dy = y - lastMouse.y;
    mouse.speed = Math.sqrt(dx * dx + dy * dy);

    mouse.x = x;
    mouse.y = y;

    // Position pencil cursor so the lead tip rests precisely at mouse (x, y)
    const tilt = mouse.isDown ? -8 : (dx > 0 ? 4 : dx < 0 ? -12 : 0);
    pencilEl.style.transform = `translate(${x - 3}px, ${y - 30}px) rotate(${tilt}deg)`;

    // Record trail point for authentic sketch line
    points.push({
      x: x,
      y: y,
      age: 0,
      maxAge: mouse.isDown ? 65 : 40,
      width: mouse.isDown ? 2.5 : Math.max(1, Math.min(2.2, 12 / (mouse.speed + 1))),
      alpha: mouse.isDown ? 0.7 : 0.4
    });

    if (mouse.isDown && Math.random() > 0.4) {
      createGraphiteDust(x, y, 2);
    }

    lastMouse.x = x;
    lastMouse.y = y;
  }

  window.addEventListener('mousemove', (e) => {
    handleMove(e.clientX, e.clientY);
  });

  window.addEventListener('mousedown', (e) => {
    mouse.isDown = true;
    createGraphiteDust(e.clientX, e.clientY, 7);
    pencilEl.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 28}px) scale(0.94)`;
  });

  window.addEventListener('mouseup', () => {
    mouse.isDown = false;
  });

  // Touch support for mobile devices
  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      mouse.isDown = true;
      createGraphiteDust(e.touches[0].clientX, e.touches[0].clientY, 5);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.isDown = false;
  });

  // Animation Loop: Render authentic graphite sketch strokes and dust
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw graphite pencil lines
    if (points.length > 1) {
      for (let i = 1; i < points.length; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];

        const progress = p2.age / p2.maxAge;
        const currentAlpha = p2.alpha * (1 - progress);

        if (currentAlpha > 0.01) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          // Realistic graphite pencil stroke
          ctx.strokeStyle = `rgba(51, 65, 85, ${currentAlpha})`;
          ctx.lineWidth = p2.width * (1 - progress * 0.4);
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        }
      }
    }

    // Update trail ages
    for (let i = points.length - 1; i >= 0; i--) {
      points[i].age++;
      if (points[i].age >= points[i].maxAge) {
        points.splice(i, 1);
      }
    }

    // Render graphite dust particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const pt = particles[i];
      pt.x += pt.vx;
      pt.y += pt.vy;
      pt.alpha -= pt.decay;

      if (pt.alpha > 0) {
        ctx.fillStyle = `rgba(30, 41, 59, ${pt.alpha})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

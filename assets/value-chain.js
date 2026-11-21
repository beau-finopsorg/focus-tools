/* FOCUS Value Chain: renders every <figure data-focus-value-chain>.
   One source of truth for the stage wording; style in value-chain.css.
   Attributes: data-variant="full|compact" (default full),
               data-tone="light|dark" (default light),
               data-note="off" to hide the footnote. */
(function () {
  var STAGES = [
    { k: "Data generators", n: "Providers",
      d: "Cloud, SaaS, AI, licensing and data center vendors produce cost and usage data." },
    { k: "Standardized export", n: "FOCUS", focus: true,
      d: "Each provider exports the same columns with the same meaning: <code>BilledCost</code>, <code>EffectiveCost</code>, <code>ServiceCategory</code>, <code>Tags</code>." },
    { k: "Ingest & store", n: "One dataset",
      d: "Every provider\u2019s FOCUS data lands in one table in your lake or warehouse, with no per-vendor mapping." },
    { k: "Allocate & govern", n: "Governed metrics",
      d: "Tags and allocation rules drive chargeback and showback from one agreed definition of cost." },
    { k: "Analyze", n: "Dashboards & AI",
      d: "FinOps tools, reports, forecasts and AI agents all query the same governed metrics." },
    { k: "Act, by role", n: "Business decisions",
      d: "Engineering, Finance, Procurement and Leadership act on numbers they trust." }
  ];
  var NOTE = "<b>FOCUS defines step 2.</b> Because every provider\u2019s data arrives in the same shape, steps 3\u20136 are built once instead of once per provider.";

  function render(fig) {
    if (fig.getAttribute("data-rendered")) return;
    var variant = fig.getAttribute("data-variant") || "full";
    fig.setAttribute("data-variant", variant);
    if (!fig.getAttribute("data-tone")) fig.setAttribute("data-tone", "light");
    var label = STAGES.map(function (s) { return s.n; }).join(" \u2192 ");
    fig.setAttribute("role", "figure");
    fig.setAttribute("aria-label", "The FOCUS value chain: " + label);
    var html = '<div class="vc-head"><p class="vc-title">The FOCUS value chain</p>' +
      '<p class="vc-sub">How standardized cost data becomes trusted business decisions.</p></div><ol>';
    STAGES.forEach(function (s) {
      html += '<li' + (s.focus ? ' class="vc-focus"' : '') + '>' +
        '<span class="vc-kicker">' + s.k + '</span>' +
        '<span class="vc-name">' + s.n + '</span>' +
        '<span class="vc-desc">' + s.d + '</span></li>';
    });
    html += '</ol>';
    if (fig.getAttribute("data-note") !== "off" && variant === "full") html += '<p class="vc-note">' + NOTE + '</p>';
    var extra = fig.querySelector(".vc-caption");
    fig.innerHTML = html;
    if (extra) fig.appendChild(extra);
    fig.setAttribute("data-rendered", "1");
  }
  function run() { document.querySelectorAll("[data-focus-value-chain]").forEach(render); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();

(function () {
  var root = document.getElementById("content");
  var jumps = document.querySelector("[data-jumps]");
  var bar = document.querySelector("[data-bar]");

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var docLinks = [
    ["GEO Publication No. 1/2023", "https://www.cedd.gov.hk/filemanager/eng/content_1024/ep1_2023.pdf"],
    ["GEO Publication 1/2023", "https://www.cedd.gov.hk/filemanager/eng/content_1024/ep1_2023.pdf"],
    ["GEO Publication No. 1/2006", "https://www.cedd.gov.hk/filemanager/eng/content_148/ep1_2006.pdf"],
    ["Code of Practice for Foundations 2017", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/code-and-design-manuals/FoundationCode2017.pdf"],
    ["Geotechnical Manual for Slopes", "https://www.cedd.gov.hk/filemanager/eng/content_91/egms.pdf"],
    ["Geoguide 1", "https://www.cedd.gov.hk/filemanager/eng/content_106/eg1_20200601.pdf"],
    ["Geoguide 2", "https://www.cedd.gov.hk/filemanager/eng/content_108/eg2_20171218.pdf"],
    ["Geoguide 5", "https://www.cedd.gov.hk/filemanager/eng/content_113/eg5_2023.11.pdf"],
    ["Geoguide 7 Table 5.4", "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf"],
    ["Geoguide 7", "https://www.cedd.gov.hk/filemanager/eng/content_117/eg7_2023.11.21.pdf"],
    ["PNAP APP-137", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP137.pdf"],
    ["APP-30", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP030.pdf"],
    ["APP-61", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP061.pdf"],
    ["APP-24", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP024.pdf"],
    ["APP-62", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP062.pdf"],
    ["PNAP APP-109", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP109.pdf"],
    ["APP-109", "https://www.bd.gov.hk/doc/en/resources/codes-and-references/practice-notes-and-circular-letters/pnap/APP/APP109.pdf"]
  ];

  function linkify(value) {
    var html = esc(value);
    docLinks.forEach(function (pair) {
      var safe = esc(pair[0]);
      var anchor = "<a href=\"" + esc(pair[1]) + "\" rel=\"noopener noreferrer\">" + safe + "</a>";
      var parts = html.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/);
      html = parts.map(function (part) {
        if (part.indexOf("<a ") === 0) return part;
        return part.split(safe).join(anchor);
      }).join("");
    });
    return html.replace(/\bKa\b/g, "K<sub>a</sub>").replace(/\bKp\b/g, "K<sub>p</sub>");
  }

  function lines(value) {
    return linkify(value).replace(/\n/g, "<br>");
  }

  function blockHtml(block) {
    if (block.kind === "prose") {
      return "<p>" + linkify(block.text) + "</p>";
    }
    if (block.kind === "gap") {
      return "<p class=\"gap\">" + linkify(block.text) + "</p>";
    }
    if (block.kind === "links") {
      var links = block.items.map(function (item) {
        return "<li><a href=\"" + esc(item.href) + "\" rel=\"noopener noreferrer\">" + esc(item.label) + "</a></li>";
      }).join("");
      return "<ul class=\"doc-links\">" + links + "</ul>";
    }
    if (block.kind === "list" || block.kind === "steps") {
      var tag = block.kind === "steps" ? "ol" : "ul";
      var items = block.items.map(function (item) {
        return "<li>" + linkify(item) + "</li>";
      }).join("");
      return "<" + tag + ">" + items + "</" + tag + ">";
    }
    if (block.kind === "table") {
      return tableRegion(block.headers, block.rows, function (cell) {
        return lines(cell);
      });
    }
    return "";
  }

  function tableRegion(headers, rows, cellText) {
    var head = headers.map(function (header) {
      return "<th scope=\"col\">" + esc(header) + "</th>";
    }).join("");
    var body = rows.map(function (row) {
      return "<tr>" + row.map(function (cell, index) {
        var tag = index === 0 && rows === guide.scheduledAreas.rows ? "th" : "td";
        var scope = tag === "th" ? " scope=\"row\"" : "";
        return "<" + tag + scope + " data-label=\"" + esc(headers[index] || "") + "\">" + cellText(cell) + "</" + tag + ">";
      }).join("") + "</tr>";
    }).join("");
    return "<div class=\"table-scroll\" tabindex=\"0\" role=\"region\" aria-label=\"" + esc(headers.join(", ")) + "\">" +
      "<table><thead><tr>" + head + "</tr></thead><tbody>" + body + "</tbody></table></div>";
  }

  function sectionLinks(procedure) {
    return procedure.sections.map(function (section) {
      return "<a href=\"#" + section.id + "\">" + esc(section.title) + "</a>";
    }).join("");
  }

  function procedureHtml(procedure) {
    var sections = procedure.sections.map(function (section) {
      var blocks = section.blocks.map(blockHtml).join("");
      return "<section id=\"" + section.id + "\" tabindex=\"-1\"><h3>" + esc(section.title) + "</h3>" + blocks + "</section>";
    }).join("");
    return "<article class=\"procedure\" id=\"" + procedure.id + "\" tabindex=\"-1\" data-procedure-section=\"" + procedure.id + "\">" +
      "<h2>" + esc(procedure.title) + "</h2>" +
      "<p class=\"lead\">" + linkify(procedure.lead) + "</p>" +
      "<nav class=\"in-procedure\" aria-label=\"Sections in " + esc(procedure.label) + "\">" + sectionLinks(procedure) + "</nav>" +
      sections +
      "</article>";
  }

  jumps.innerHTML = guide.procedures.map(function (procedure) {
    return "<a data-procedure=\"" + procedure.id + "\" href=\"#" + procedure.id + "\">" + esc(procedure.label) + "</a>";
  }).join("") + "<a class=\"quiet\" href=\"#" + guide.goodPractice.id + "\">Good practice</a>";

  var standards = guide.standards.map(function (item) {
    return "<li><a href=\"" + esc(item.href) + "\" rel=\"noopener noreferrer\">" + esc(item.label) + "</a></li>";
  }).join("");

  var areaTable = tableRegion(guide.scheduledAreas.headers, guide.scheduledAreas.rows, linkify);

  var practice = guide.goodPractice.items.map(function (item) {
    return "<li>" + esc(item) + "</li>";
  }).join("");

  root.innerHTML =
    "<header class=\"opening\">" +
      "<h1>" + esc(guide.title) + "</h1>" +
      "<p class=\"dek\">" + esc(guide.subtitle) + ". " + esc(guide.opening) + "</p>" +
      "<p class=\"disclaimer\">" + esc(guide.disclaimer) + "</p>" +
    "</header>" +
    "<section id=\"documents\" tabindex=\"-1\">" +
      "<h2>Documents the work must follow</h2>" +
      "<p>" + esc(guide.documentsNote) + "</p>" +
      "<ul class=\"standards\">" + standards + "</ul>" +
    "</section>" +
    "<section id=\"scheduled-areas\" tabindex=\"-1\">" +
      "<h2>" + esc(guide.scheduledAreas.heading) + "</h2>" +
      "<p>" + linkify(guide.scheduledAreas.note) + "</p>" +
      "<p><a href=\"" + esc(guide.scheduledAreas.sourceUrl) + "\">" + esc(guide.scheduledAreas.sourceLabel) + "</a></p>" +
      areaTable +
    "</section>" +
    guide.procedures.map(procedureHtml).join("") +
    "<section class=\"practice\" id=\"" + guide.goodPractice.id + "\" tabindex=\"-1\">" +
      "<h2>" + esc(guide.goodPractice.title) + "</h2>" +
      "<ol>" + practice + "</ol>" +
    "</section>" +
    "<footer class=\"close\"><p>" + esc(guide.title) + "</p><p>Developed by Martin Chow. Suggested design guideline, not Department guidance.</p></footer>";

  document.title = guide.title;

  function syncBar() {
    document.documentElement.style.setProperty("--bar-h", bar.offsetHeight + "px");
  }

  function showHash() {
    var id = decodeURIComponent(location.hash.slice(1));
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    target.focus({ preventScroll: true });
    target.scrollIntoView();
  }

  var procedureLinks = Array.prototype.slice.call(jumps.querySelectorAll("[data-procedure]"));

  function markCurrent(id) {
    procedureLinks.forEach(function (link) {
      if (link.getAttribute("data-procedure") === id) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function markFromScroll() {
    var line = bar.getBoundingClientRect().bottom + 1;
    var current = null;
    Array.prototype.forEach.call(document.querySelectorAll("[data-procedure-section]"), function (section) {
      if (section.getBoundingClientRect().top <= line) {
        current = section.getAttribute("data-procedure-section");
      }
    });
    markCurrent(current);
  }

  syncBar();
  showHash();
  markFromScroll();
  window.addEventListener("resize", function () {
    syncBar();
    markFromScroll();
  });
  window.addEventListener("scroll", markFromScroll, { passive: true });
  window.addEventListener("hashchange", function () {
    syncBar();
    showHash();
    markFromScroll();
  });
})();

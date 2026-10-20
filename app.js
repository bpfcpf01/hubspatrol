(() => {
  const loaded = Array.isArray(window.PROJECTS);
  const projects = loaded ? window.PROJECTS : [];
  const grid = document.getElementById("grid");
  const search = document.getElementById("search");
  const tagsBox = document.getElementById("tags");
  const count = document.getElementById("count");
  const empty = document.getElementById("empty");
  const STATUS_LABEL = { live: "ใช้งานอยู่", dev: "กำลังพัฒนา", archived: "เก็บถาวร" };

  let activeTag = null;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const isImage = (icon) => /\.(png|jpe?g|svg|gif|webp)$/i.test(icon || "") || /^https?:/.test(icon || "");

  function card(p) {
    const icon = isImage(p.icon) ? `<img src="${esc(p.icon)}" alt="">` : esc(p.icon || "📁");
    const status = p.status ? `<span class="status ${esc(p.status)}">${esc(STATUS_LABEL[p.status] || p.status)}</span>` : "<span></span>";
    const tags = (p.tags || []).map((t) => `<span class="chip">#${esc(t)}</span>`).join("");
    const repo = p.repo ? `<a class="repo" href="${esc(p.repo)}" target="_blank" rel="noopener">source ↗</a>` : "";
    const external = /^https?:/.test(p.url) ? ' target="_blank" rel="noopener"' : "";
    // การ์ดเป็น <div> ที่มี link หลักครอบทั้งใบ เพื่อให้ปุ่ม source ซ้อนอยู่ข้างในได้
    return `
      <div class="card" style="--c:${esc(p.color || "")}">
        <a href="${esc(p.url)}"${external} style="position:absolute;inset:0;border-radius:inherit" aria-label="${esc(p.name)}"></a>
        <div class="card-head">
          <div class="card-icon">${icon}</div>
          <h2>${esc(p.name)}</h2>
        </div>
        <p>${esc(p.description)}</p>
        <div class="chips">${tags}</div>
        <div class="card-foot">${status}${repo}</div>
      </div>`;
  }

  function renderTags() {
    const all = [...new Set(projects.flatMap((p) => p.tags || []))].sort();
    tagsBox.innerHTML = ["ทั้งหมด", ...all].map((t, i) =>
      `<button class="tag-btn" data-tag="${i ? esc(t) : ""}" aria-pressed="${(i ? t : null) === activeTag}">${i ? "#" : ""}${esc(t)}</button>`
    ).join("");
  }

  function render() {
    const q = search.value.trim().toLowerCase();
    const list = projects.filter((p) => {
      if (activeTag && !(p.tags || []).includes(activeTag)) return false;
      if (!q) return true;
      return [p.name, p.description, ...(p.tags || [])].join(" ").toLowerCase().includes(q);
    });
    grid.innerHTML = list.map(card).join("");
    count.textContent = `${list.length} จาก ${projects.length} โปรเจค`;
    empty.hidden = list.length > 0;
    if (!loaded) empty.textContent = "โหลด projects.js ไม่ได้ — ตรวจ syntax ในไฟล์ (ดูข้อผิดพลาดใน Console)";
  }

  tagsBox.addEventListener("click", (e) => {
    const btn = e.target.closest(".tag-btn");
    if (!btn) return;
    activeTag = btn.dataset.tag || null;
    renderTags();
    render();
  });
  search.addEventListener("input", render);
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== search) { e.preventDefault(); search.focus(); }
  });

  // ธีม: จำค่าที่ผู้ใช้เลือกไว้ในเบราว์เซอร์
  const root = document.documentElement;
  document.getElementById("theme").addEventListener("click", () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch {}
  });

  renderTags();
  render();
})();

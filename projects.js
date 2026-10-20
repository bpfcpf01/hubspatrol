// ===== รายการโปรเจคทั้งหมด =====
// เพิ่มโปรเจคใหม่: คัดลอก object ด้านล่าง 1 ก้อน แล้วแก้ค่าให้ตรงกับโปรเจค
//
//   name        ชื่อโปรเจค (จำเป็น)
//   description คำอธิบายสั้นๆ
//   url         ลิงก์หลักเมื่อกดการ์ด (จำเป็น)
//   repo        ลิงก์ source code (ไม่ใส่ก็ได้)
//   icon        emoji หรือ path รูปภาพ เช่น "assets/logo.png"
//   tags        หมวด/แท็ก ใช้กรองบนหน้า hub
//   status      "live" | "dev" | "archived"
//   color       สีประจำการ์ด (ไม่ใส่ก็ได้)

window.PROJECTS = [
  {
    name: "HubsPatrol",
    description: "หน้ารวมโปรเจคทั้งหมด — คุณกำลังดูอยู่ตอนนี้",
    url: "./",
    repo: "https://github.com/bpfcpf01/hubspatrol",
    icon: "🧭",
    tags: ["tool"],
    status: "live",
    color: "#6366f1",
  },
  {
    name: "ตัวอย่างโปรเจค",
    description: "แก้หรือลบรายการนี้ใน projects.js แล้วเพิ่มโปรเจคจริงของคุณ",
    url: "https://example.com",
    icon: "🚀",
    tags: ["web", "example"],
    status: "dev",
    color: "#f59e0b",
  },
];

# 🧭 HubsPatrol

หน้า hub รวมลิงก์ทุกโปรเจคไว้ที่เดียว — HTML/CSS/JS ล้วน ไม่ต้อง build

## เพิ่มโปรเจคใหม่

แก้ไฟล์ [`projects.js`](projects.js) แล้วเพิ่ม object ใหม่เข้าไปในลิสต์:

```js
{
  name: "ชื่อโปรเจค",
  description: "คำอธิบายสั้นๆ",
  url: "https://my-project.example.com",
  repo: "https://github.com/bpfcpf01/my-project",
  icon: "🎮",            // emoji หรือ path รูป เช่น "assets/logo.png"
  tags: ["game", "web"],
  status: "live",        // live | dev | archived
  color: "#22c55e",
},
```

## ดูบนเครื่อง

เปิด `index.html` ในเบราว์เซอร์ได้เลย

## Deploy ด้วย GitHub Pages

Settings → Pages → Source: **Deploy from a branch** → เลือก branch `main` และโฟลเดอร์ `/ (root)`
จากนั้นหน้า hub จะอยู่ที่ `https://bpfcpf01.github.io/hubspatrol/`

## ฟีเจอร์

- ค้นหาโปรเจค (กด `/` เพื่อโฟกัสช่องค้นหา)
- กรองตามแท็ก
- ป้ายสถานะ (ใช้งานอยู่ / กำลังพัฒนา / เก็บถาวร) และปุ่มลิงก์ source code
- โหมดมืด/สว่าง และรองรับมือถือ

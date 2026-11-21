function makePassword() {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789!@#$";
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  document.getElementById("pass").textContent = result;
}
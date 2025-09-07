// Very small demo auth service using localStorage.
// Replace with real API calls later.

const KEY_USERS = "av_users";
const KEY_TOKEN = "av_token";

function getUsers() {
  return JSON.parse(localStorage.getItem(KEY_USERS) || "[]");
}
function setUsers(u) { localStorage.setItem(KEY_USERS, JSON.stringify(u)); }

function makeToken(user) {
  // demo token: base64(payload)
  const payload = { name: user.name, email: user.email, role: user.role, exp: Date.now() + 24*3600*1000 };
  return btoa(JSON.stringify(payload));
}

export const auth = {
  register({ name, email, password, role = "student" }) {
    const users = getUsers();
    if (users.find(u => u.email === email)) throw new Error("User already exists");
    users.push({ name, email, password, role });
    setUsers(users);
  },

  login(email, password) {
    const users = getUsers();
    const u = users.find(x => x.email === email && x.password === password);
    if (!u) return false;
    const token = makeToken(u);
    localStorage.setItem(KEY_TOKEN, token);
    return true;
  },

  getToken() {
    return localStorage.getItem(KEY_TOKEN);
  },

  getUser() {
    const t = this.getToken();
    if (!t) return null;
    try {
      const payload = JSON.parse(atob(t));
      if (payload.exp < Date.now()) { this.logout(); return null; }
      return { name: payload.name, email: payload.email, role: payload.role };
    } catch (err) {
      return null;
    }
  },

  logout() {
    localStorage.removeItem(KEY_TOKEN);
  }
};

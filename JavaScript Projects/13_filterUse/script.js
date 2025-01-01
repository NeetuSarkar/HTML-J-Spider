const accounts = [
  {
    accid: 101,
    accName: "Kiran Kumar",
    usn: "kk",
    pwd: 1111,
    trans: [100, 500, -200, 100, -50],
  },
  {
    accid: 102,
    accName: "Sita Ram",
    usn: "sr",
    pwd: 2222,
    trans: [200, -100, 300, 50, -20],
  },
  {
    accid: 103,
    accName: "Sandip Shaw",
    usn: "sandip",
    pwd: 1234,
    trans: [1000, -500, 3000, 800, -200, 100],
  },
];

let account = null;

const loginForm = document.getElementById("login-form");
const userId = document.getElementById("user-id");
const userPwd = document.getElementById("user-pwd");
const welcomeText = document.getElementById("welcome-text");
const list = document.getElementById("item-list");
const allTransButton = document.getElementById("all-tran");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdrawls");

function renderTransactions(filterCallback = () => true) {
  if (!account) {
    alert("Please log in first!");
    return;
  }
  list.innerHTML = "";
  account.trans.filter(filterCallback).forEach((tran) => {
    let li = document.createElement("li");
    li.innerHTML = `
          <p class="${tran > 0 ? "green" : "red"}">${
      tran > 0 ? "Deposit" : "Withdrawal"
    }</p>
          <span>₹${Math.abs(tran)}</span>`;
    list.appendChild(li);
  });
}

function logoutUser() {
  account = null;
  loginForm.style.display = "block";
  welcomeText.textContent = "";
  const logoutButton = document.getElementById("logout-btn");
  if (logoutButton) logoutButton.remove();
  list.innerHTML = "";
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = userId.value.toLowerCase();
  const password = Number(userPwd.value);

  const matchedAccount = accounts.find(
    (acc) => acc.usn.toLowerCase() === userName && acc.pwd === password
  );

  if (matchedAccount) {
    account = matchedAccount;
    loginForm.style.display = "none";
    userId.value = "";
    userPwd.value = "";
    welcomeText.textContent = `Welcome, ${account.accName}`;

    const logoutButton = document.createElement("button");
    logoutButton.id = "logout-btn";
    logoutButton.textContent = "Logout";
    document.getElementById("nav-menu").appendChild(logoutButton);

    logoutButton.addEventListener("click", logoutUser);
  } else {
    alert("Invalid username or password!");
  }
});

allTransButton.addEventListener("click", () => renderTransactions());
depositBtn.addEventListener("click", () =>
  renderTransactions((tran) => tran > 0)
);
withdrawBtn.addEventListener("click", () =>
  renderTransactions((tran) => tran < 0)
);

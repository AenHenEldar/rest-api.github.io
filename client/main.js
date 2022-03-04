window.addEventListener("load", () => {
  const usersBtn = document.querySelector("#users");
  const user = document.querySelector("#user");

  usersBtn.addEventListener("click", async function (e) {
    e.preventDefault();
    const usersList = await request("/api/users");
    user.value = usersList[0].name;

    console.log(`
      Users:
      ${JSON.stringify(usersList)}
    `);
  });
});

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;
    if (data) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    return fetch(url, { method, headers, body }).then((response) =>
      response.json()
    );
  } catch (e) {
    console.warn("Error: ", e.message);
  }
}

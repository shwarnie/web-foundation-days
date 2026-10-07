const loadUsersButton = document.querySelector("#load-users");
const filterInput = document.querySelector("#filter-input");
const status = document.querySelector("#status");
const usersList = document.querySelector("#users-list");

let users = [];

async function loadUsers() {
loadUsersButton.disabled = true;
status.textContent = "Loading users...";
usersList.replaceChildren();

try {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch users.");
    }

    users = await response.json();

    displayUsers(users);
    status.textContent = `Successfully loaded ${users.length} users.`;
} catch (error) {
    status.textContent = "Error loading users. Please try again.";
} finally {
    loadUsersButton.disabled = false;
}
```

}

function displayUsers(usersToDisplay) {
usersList.replaceChildren();

```
usersToDisplay.forEach((user) => {
    const listItem = document.createElement("li");

    const name = document.createElement("h2");
    name.textContent = user.name;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const city = document.createElement("p");
    city.textContent = `City: ${user.address.city}`;

    const company = document.createElement("p");
    company.textContent = `Company: ${user.company.name}`;

    listItem.appendChild(name);
    listItem.appendChild(email);
    listItem.appendChild(city);
    listItem.appendChild(company);

    usersList.appendChild(listItem);
});


}

filterInput.addEventListener("input", () => {
const searchTerm = filterInput.value.trim().toLowerCase();

```
const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
);

displayUsers(filteredUsers);
```

});

loadUsersButton.addEventListener("click", loadUsers);

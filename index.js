// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:Id"

async function main() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts?userId=:Id")
  const usersData = await users.json();
  const userList = document.querySelector('.post-list')
  userList.innerHTML = usersData
  usersData.map((user) => `<div class="user-card">
                <div class="user-card__container">
                  <h3>${user.name}</h3>
                    <p><b>Email:</b>${user.email}</p>
                    <p><b>Phone:</b>${user.phone}</p>
                    <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                </div>
              </div>`
        )
        .join("")
      
}

main();

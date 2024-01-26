// Function to handle the login process
async function login(username, password) {
    const response = await fetch(`http://localhost:3000/api/users?username=${username}`);
  
    console.log(response.status);
    console.log(response.headers.get("content-type"));
  
    if (!response.ok || !response.headers.get("content-type").startsWith("application/json")) {
      throw new Error("Unexpected response from server");
    }
  
    const users = await response.json();
    //console.log("test");
    console.log(users);

  // Check if the user exists
  if (users.length > 0) {
    const user = users[0];

    // Check if the password is correct
    if (user.password === password) {
      // Successful login, redirect to the next page
      window.location.href = "nextPage.html";
    } else {
      // Failed login, display an error message
      alert("Invalid username or password");
    }
  } else {
    // Failed login, display an error message
    alert("Invalid username or password");
  }
}

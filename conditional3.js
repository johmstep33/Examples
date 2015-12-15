var response,
  secret_saying = document.querySelector('#message').textContent;

if (secret_saying === "An Eagle Flies at Midnight") {
  response = "You may pass"
} else {
  response = "Release the houds!"
}

document.querySelector('#result').textContent = response

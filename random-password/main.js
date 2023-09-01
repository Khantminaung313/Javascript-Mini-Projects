let words = ['jame', 'smith', 'willian', 'john', 'marney', 'manman', 'luwiz', 'stone', 'snow', 'tetotone', 'tite', 'hellin'];

function getPassword() {
  const chars = `0123456789/|%?@#$%`;
  const clength = chars.length;
  password = '';

  while(password.length < 20) {
    password = password.concat(randomWord());
    password = password.concat(randomNumber(chars.length));
  }

  password = password.substring(0,16);
  document.getElementById('password').value = password;
}

function randomNumber (e) {
  return Math.floor(Math.random() * e)
}

function randomWord () {
  let number = randomNumber(words.length);
  return words[number];
}
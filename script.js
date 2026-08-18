* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f1f8f3;
  color: #183a24;
  line-height: 1.6;
  transition: 0.3s;
}

header {
  background: linear-gradient(135deg, #176b3a, #2e9d57);
  color: white;
  text-align: center;
  padding: 35px 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

header h1 {
  font-size: 38px;
  margin-bottom: 8px;
}

header p {
  font-size: 18px;
}

nav {
  margin: 25px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 18px;
  border-radius: 25px;
  transition: 0.3s;
}

nav a:hover {
  background: white;
  color: #176b3a;
  transform: translateY(-2px);
}

button {
  border: none;
  cursor: pointer;
  background: #f4c542;
  color: #17351f;
  padding: 12px 22px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

#darkMode {
  background: #17351f;
  color: white;
  border: 2px solid white;
}

.hero {
  min-height: 500px;
  padding: 100px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background:
    linear-gradient(rgba(15, 70, 35, 0.78), rgba(15, 70, 35, 0.78)),
    url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80");

  background-size: cover;
  background-position: center;
  color: white;
}

.hero h2 {
  font-size: 42px;
  max-width: 800px;
  margin-bottom: 20px;
}

.hero p {
  max-width: 750px;
  font-size: 19px;
  margin-bottom: 30px;
}

#contador {
  color: #f4c542;
  font-size: 28px;
}

section:not(.hero) {
  max-width: 1100px;
  margin: auto;
  padding: 70px 25px;
}

section h2 {
  text-align: center;
  color: #176b3a;
  font-size: 32px;
  margin-bottom: 25px;
}

#sobre p {
  max-width: 850px;
  margin: 15px auto;
  text-align: center;
  font-size: 18px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  background: white;
  padding: 30px 20px;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  border-top: 5px solid #2e9d57;
}

.card:hover {
  transform: translateY(-8px);
}

.card h3 {
  margin-bottom: 10px;
  font-size: 22px;
}

#quiz {
  text-align: center;
  background: #e0f2e6;
  max-width: 100%;
}

#quiz button {
  margin: 8px;
}

#resultado {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

#contato {
  text-align: center;
}

form {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

input {
  padding: 13px;
  border: 2px solid #b8d8c2;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
}

input:focus {
  border-color: #2e9d57;
}

form button {
  margin-top: 10px;
}

#mensagem {
  margin-top: 20px;
  font-weight: bold;
}

footer {
  background: #123b21;
  color: white;
  text-align: center;
  padding: 25px;
}

body.dark {
  background: #101914;
  color: #e5f2e8;
}

body.dark section h2 {
  color: #72d394;
}

body.dark .card {
  background: #1b2a21;
  color: #e5f2e8;
}

body.dark #quiz {
  background: #17271d;
}

body.dark input {
  background: #1b2a21;
  color: white;
  border-color: #3f7651;
}

@media (max-width: 800px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero h2 {
    font-size: 32px;
  }

  header h1 {
    font-size: 30px;
  }
}

@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }

  nav {
    flex-direction: column;
  }

  nav a {
    background: rgba(255, 255, 255, 0.1);
  }

  .hero {
    padding: 70px 20px;
  }
}
    document.documentElement.removeAttribute('data-theme');
    darkModeBtn.textContent = "🌙 Modo Escuro";
  }
});

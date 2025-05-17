<script setup></script>

<template>
  <nav className="navbar">
    <div className="logo">
      <img src="/mugLogo.png" width="48" height="48" alt="logo" />
      <p>JoeCuppa</p>
    </div>
    <div className="links">
      <a to="/" className="nav-link"> Home </a>
      <a to="/catalog" className="nav-link"> Catalog </a>
      <a to="/faq" className="nav-link"> FAQ </a>
    </div>
    <div className="other">Other</div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  gap: 8px;
  flex-grow: 1;

  font-family: "Lobster", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.links {
  flex-grow: 8;
  display: flex;
  justify-content: center;

  font-size: 16pt;
  font-weight: 100;
  gap: 48px;
}

.nav-link.active {
  text-decoration: underline;
}

.other {
  flex-grow: 1;
}
</style>

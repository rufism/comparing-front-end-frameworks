<script setup>
import Page from "@/components/Page.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
  <Page>
    <NavigationBar />
    <div class="splash">
      <img
        src="/20250516_1202_Womans Office Coffee Break_simple_compose_01jvd0qezwfyb9m22y02x5x22t.png"
        alt="woman enjoying coffee at desk"
      />
      <div class="splash-phrase">
        <p>Because your identity needs</p>
        <p class="emphasized-word">flavour</p>

        <div class="catalog-link">
          <a>Find your flavour</a>
        </div>
      </div>
    </div>
  </Page>
</template>

<style scoped>
.splash {
  height: 100%;

  background: linear-gradient(
    to bottom,
    var(--color-primary-text) 84%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.splash p {
  margin: 0;
}

.catalog-link {
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24pt;
  width: 100%;

  margin: 16px;
  margin-top: 72px;
  padding: 16px;

  border: var(--color-accent-2) 4px solid;
  border-radius: 32px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);

  cursor: pointer;

  transition: all 0.2s ease-in-out;
}

.catalog-link:hover {
  background-color: var(--color-accent-1);
  color: var(--color-background);
}

@media screen and (max-height: 900px) {
  .splash-phrase {
    font-weight: bold;
    font-size: 32pt;
    width: 300px;
  }

  .emphasized-word {
    color: var(--color-accent-2);
    font-family: "Lobster", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 72pt;
  }
}

@media screen and (min-height: 900px) {
  .splash-phrase {
    font-weight: bold;
    font-size: 68pt;
    width: 300px;
  }

  .emphasized-word {
    color: var(--color-accent-2);
    font-family: "Lobster", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 128pt;
  }
}

@media screen and (max-width: 1200px) {
  .splash-phrase {
    display: flex;
    flex-direction: column;
  }

  .splash img {
    border-radius: 48px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
    right: 5%;
    max-width: 1000px;
    /* width: 80%; */
    height: 80%;
  }
}

@media screen and (min-width: 1200px) {
  .splash-phrase {
    position: absolute;
    top: 160px;
    left: 8%;
  }

  .splash img {
    position: absolute;
    border-radius: 48px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.5);
    right: 5%;
    max-width: 1000px;
    /* width: 80%; */
    height: 80%;
  }
}
</style>

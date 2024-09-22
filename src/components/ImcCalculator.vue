<script>
import { ref } from 'vue';

export default {
  setup() {
    const imc = ref(null);
    const taille = ref(0);
    const poids = ref(0);

    const readData = async () => {
      const result = await fetch('/imc', { // Pas besoin de spécifier l'URL complète ici
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ taille: taille.value, poids: poids.value }),
      });

      const infos = await result.json();
      imc.value = infos;
    };

    return {
      imc,
      taille,
      poids,
      readData,
    };
  },
};

</script>

<template>
  <section class="ligne container">
    <div class="logo column">
      IMC
    </div>
    <div class="column form">
      <form @submit.prevent="readData">
        <p>
          <label for="taille">Taille</label> <br />
          <input
              type="number"
              name="taille"
              id="taille"
              style="font-size: 20px"
              v-model="taille"
          />
        </p>
        <p>
          <label for="poids">Poids</label> <br />
          <input
              type="number"
              name="poids"
              id="poids"
              style="font-size: 20px"
              v-model="poids"
          />
        </p>
        <button type="submit">Calculer</button>
      </form>
      <pre>{{ JSON.stringify(imc, null, 2) }}</pre>
    </div>
  </section>
</template>

<style scoped>
:root,
body,
html {
  padding: 0;
  margin: 0 auto;
  background: rgb(4, 4, 124);
  height: 100vh;
  color: white;
}

.ligne,
.container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns of equal width */
  align-items: center; /* Center content vertically */
  height: 100vh; /* Full height of the viewport */
}

.column {
  text-align: left; /* Align content to the left */
  padding: 10px; /* Optional: Add some padding */
}

.logo {
  font-size: 10em;
}

input {
  color: black;
  padding: 10px;
  width: 90%;
}

label {
  font-size: 30px;
}

button {
  width: 93%;
  color: black;
  padding: 10px;
}
</style>
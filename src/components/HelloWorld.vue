<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
  }
    
  },
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a> +
      <a target="_blank" href="https://router.vuejs.org/">Vue Router</a> +
      <a target="_blank" href="https://getbootstrap.com/">bootstrap</a> +
      <a target="_blank" href="https://www.chartjs.org/">ChartJS</a> +
      <a target="_blank" href="https://pinia.vuejs.org/">Pinia</a>.
    </h3>
  </div>
</template>

<style scoped>
a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>

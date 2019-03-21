<template>
  <div class="home">
    <LocalWeather />
  </div>
</template>

<script>
// @ is an alias to /src
import LocalWeather from "@/components/LocalWeather.vue";

export default {
  name: "home",
  components: {
    LocalWeather
  }
};
</script>

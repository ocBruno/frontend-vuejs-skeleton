<template>
  <div class="home">
    <b-row class="mt-2">
    <LocalWeather />
    <NewsWidget /> 
  </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import LocalWeather from "@/components/LocalWeather.vue";
import NewsWidget from "@/components/NewsWidget.vue";

export default {
  name: "home",
  components: {
    LocalWeather,
    NewsWidget,
  }
};
</script>

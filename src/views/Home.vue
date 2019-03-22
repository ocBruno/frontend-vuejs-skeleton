<template>
  <div class="home">
    <b-row>
    <LocalWeather />
    <BuzzFeedWidget />
    </b-row>
    <NewsWidget /> 

  </div>
</template>

<script>
// @ is an alias to /src
import LocalWeather from "@/components/LocalWeather.vue";
import NewsWidget from "@/components/NewsWidget.vue";
import BuzzFeedWidget from "@/components/BuzzFeedWidget.vue";

export default {
  name: "home",
  components: {
    LocalWeather,
    NewsWidget,
    BuzzFeedWidget
  }
};
</script>

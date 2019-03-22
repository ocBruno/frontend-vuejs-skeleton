<template>
<b-row class=" col-7 align-self-center mt-2">
    <b-button class="ml-auto" variant="outline-dark" :href="url">{{this.title}}</b-button>
    </b-row>
</template>
<script>
import Vue from 'vue';

export default {
    name: "BuzzFeedWidget",
    data() {
        return {
            "title": "",
            "url": "#"
        }
    },
    methods: {
        getTitle() {
            var vm = this;
            Vue.axios.get("https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=881931f406fc4d628056fe2626acc2c0").then((res)=> {
                vm.title = res.data.articles[0].title;
                vm.url = res.data.articles[0].url;
                })
            
        }
    },
    mounted() {
        this.getTitle();
    }

}
</script>
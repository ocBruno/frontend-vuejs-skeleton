<template>

        <b-col>
            
            <div class="rounded p-2">
                
            <b-container>
            <b-form >
                <label class="mr-2" for="country">News from {{this.selected | getCountryName}}</label>
            <b-form-select id="country" class="text-uppercase" v-model="selected" :options="this.countryList"/>
            </b-form>
            <b-card v-for="article in this.articlesResult" :key="article.id">
                <b-row class="ml-1"><h4 class="h4 text-left">{{ article.title }}</h4></b-row>
                <b-row>
                <b-col v-if="article.urlToImage"><b-img class="img-fluid" :src="article.urlToImage" :alt="article.title" /></b-col>
                <b-col class="content text-left">{{ article.content | removeCharCount }} <br/> 
                <b-button class="mt-2" variant="outline-dark" size="sm" :href="article.url"> Ver mais</b-button> </b-col>
                </b-row>
            </b-card>
            <p><small>Powered by NewsApi.Org</small></p>
</b-container>
            </div>
        </b-col>

</template>
<script>
import Vue from "vue";
import{ isoCountries } from "./utilities/countryCode.js";

export default {
    name: "NewsWidget",
    data() {

        return {
            "countryList": ["ae","ar","at","au","be","bg","br","ca","ch","cn","co","cu","cz","de","eg","fr","gb","gr","hk","hu","id","ie","il","in","it","jp","kr","lt","lv","ma","mx","my","ng","nl","no","nz","ph","pl","pt","ro","rs","ru","sa","se","sg","si","sk","th","tr","tw","ua","us","ve","za"],
            "selected": "",
            "url": `https://newsapi.org/v2/top-headlines?country=br&apiKey=881931f406fc4d628056fe2626acc2c0`,
            "newsId": 0,
            "articles": [],
            "articlesResult": {}
            
        }

    },
    filters: {
        removeCharCount(text) {
            
            text = String(text);
                if(text){
                // console.log(text);
                if(text.match(/.*…/g)) {

                    return text.match(/.*…/g)[0];
                }
}},
    getCountryName (countryCode) {
        countryCode = countryCode.toUpperCase()
        // console.log(countryCode);
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

        
    },
    watch: {
        selected() {
            //put default country if none is selected    
            this.url = `https://newsapi.org/v2/top-headlines?country=${this.selected !== "" ? this.selected : "br"}&apiKey=881931f406fc4d628056fe2626acc2c0`;

            this.getNewsArticles(this.url);
            console.log(this.articlesResult);

            
            this.newsId = 0;
            
        }
    },
    computed:{

    },
    methods: {
        getNewsArticles(url) {
            var vm = this;
            
            Vue.axios.get(url)
                .then((res) => {

                    // console.log("entered function");
                    // instantly display 
                   
                    vm.articlesResult = res.data.articles;

                    // console.log(vm.articlesResult);

                })
                 
        }
        },
    beforeMount() {


    },
    async mounted() {
        var self = this, lat, lon, tempF, tempC, url;

        
        // this.articlesResult = this.getNewsArticles(this.url);


        
        // this.url = url;
        // console.log(this.url);
        
    }
}



    </script>
<style lang="scss" >
.content {
    font-size: 12px;
}
</style>

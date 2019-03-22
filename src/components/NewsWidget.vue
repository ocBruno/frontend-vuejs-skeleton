<template>

        <b-col>
            <b-form inline>
                <label class="mr-2" for="country">Noticias do pais</label>
            <b-form-select id="country" class="text-uppercase" v-model="selected" :options="this.countryList"/> 
            </b-form>
            <div class="rounded p-2">
  
            <b-container>
            <b-card v-for="article in this.articlesResult" :key="article.id">
                <b-row><h3>{{ article.title }}</h3></b-row>
                <b-row>{{ article.author }}</b-row>
                <b-row>
                <b-col v-if="article.urlToImage"><b-img class="img-fluid" :src="article.urlToImage" :alt="article.title" /></b-col>
                <b-col>{{ article.content }}</b-col>
                </b-row>
            </b-card>
</b-container>
            </div>
        </b-col>

</template>
<script>
import Vue from "vue";
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
    watch: {
        selected() {
            //put default country if none is selected    
            this.url = `https://newsapi.org/v2/top-headlines?country=${this.selected !== "" ? this.selected : "br"}&apiKey=881931f406fc4d628056fe2626acc2c0`;

            console.log(this.url);
            this.getNewsArticles(this.url);

            
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

                    console.log("entered function");
                    // instantly display 
                   
                    vm.articlesResult = res.data.articles;

                    console.log(vm.articlesResult);

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

<template>

        <b-col  class="w-25 ">

                <h5 class="pt-2">Local weather</h5>
                <img class="pb-2" :src="this.icon" alt="">
                <b-row class="justify-content-center">
                <h5 >C</h5>
                <h1>{{this.tempC}}</h1>
                </b-row>
                <b-row class="justify-content-center">
                <h5>F</h5>
                <h1>{{this.tempF}}</h1>
                </b-row>

        </b-col>

</template>
<script>
import Vue from "vue";
export default {
    name: "LocalWeather",
    data() {

        return {
            "currentTemp": null,
            "url": null,
            "tempF": null,
            "tempC": null,
            "icon": null
        }

    },
    methods: {
        getWeather(url) {
            
                    Vue.axios.get(url)
                    .then((res) => {
                            
                        

                        // console.log(res.data);

                        this.tempF = res.data.current.temp_f;
                        
                        this.tempC = res.data.current.temp_c;
                        this.icon = res.data.current.condition.icon;

                        let locationName = res.data.location.name;

                        if (res.data.current.is_day == 0) {

                            let color = "darkblue";
                            let conditionText = res.data.current.condition.text
                           
                        }
                     })
            }
        },
    
    beforeMount() {


    },
    mounted() {
        var self = this, lat, lon, tempF, tempC, url;

        var urlPromise = new Promise((resolve, reject) => { navigator.geolocation.getCurrentPosition(function (position, url) {
        
        lat = position.coords.latitude;
        lon = position.coords.longitude;

         resolve("http://api.apixu.com/v1/current.json?key=25a4da6f2ca8453d89e223519182904&q=" + lat + "," + lon);
    });
         });

         url = urlPromise.then((url) => {

             this.getWeather(url);
         });
        

        
    }
}



    </script>

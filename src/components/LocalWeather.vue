<template>
    <div id="LocalWeather">
        <p>Local weather</p>
        <h1>{{this.currentTemp}}</h1>

    </div>
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
            "tempC": null
        }

    },
    methods: {
        getWeather(url) {
            
                    Vue.axios.get(url)
                    .then((res) => {
                            
                        console.log("entered function");

                        console.log(res.data);

                        this.tempF = res.data.current.temp_f;
                        
                        this.tempC = res.data.current.temp_c;

                        let locationName = res.data.location.name;
                        // console.log(tempF);
                        if (res.data.current.is_day == 0) {

                            let color = "darkblue";
                            let conditionText = res.data.current.condition.text
                            this.currentTemp = res.data.current.temp_c;
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
        
        // this.url = url;
        // console.log(this.url);
        
    }
}



    </script>

<template>
    <div>
        <div style="display: flex; align-items: center; justify-content:space-around">
            <div>
                <h1>Your coordinates: </h1>
                <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitudes</p>
            </div>
            <div>
                <h1>Map coordinates: </h1>
                <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitudes</p>
            </div>
        </div>
        
        <GmapMap
            :center="myCoordinates"
            :zoom="8"
            style="width:1000px; height:700px; margin: 40px auto;"
            ref="mapRef"
            @dragend="handleDrag"
        ></GmapMap>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                map: null,
                myCoordinates: {
                    lat: 0,
                    lng: 0
                }
            }
        },
        created() {
            this.$getLocation({})
                .then(coordinates => {
                    this.myCoordinates = coordinates;
                })
                .catch(error => alert(error));
        },
        mounted() {
            this.$refs.mapRef.$mapPromise.then(map => this.map = map);
        },
        methods: {
            handleDrag() {
                let center = {
                    lat: this.map.getCenter().lat,
                    lng: this.map.getCenter().lng
                };
                let zoom = this.map.getZoom();

                localStorage.center = JSON.stringify(center);
                localStorage.zoom = zoom;
            }
        },
        computed: {
            mapCoordinates() {
                if(!this.map) {
                    return {
                        lat: 0,
                        lng: 0
                    };
                }

                return {
                    lat: this.map.getCenter().lat().toFixed(4),
                    lng: this.map.getCenter().lng().toFixed(4)
                }
            }
        }
    }
</script>
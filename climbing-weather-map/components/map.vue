<template>
    <div class="hero">
        <l-map style="height:100%">
            <l-tile-layer url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                subdomains='abcd'>
            </l-tile-layer>
        </l-map>
    </div>
</template>

<script>

import {
    LMap,
    LTileLayer,
} from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
    },
}
</script>

<style>
@import "leaflet/dist/leaflet.css";
</style>
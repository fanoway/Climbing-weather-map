<template>
  <div>
    <!-- Responsive viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <div class="columns" style="height:100vh">
      <div class="column is-full is-flex is-flex-direction-column">
        <Header />
        <Map class="is-flex-grow-5" />
        <footer class="footer hero is-primary py-1">
          <div class="content has-text-centered">
            <p>
              <strong>Climbing Weather Map</strong> by Michael Ardron
            </p>
          </div>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "./components/header.vue";
import Map from "./components/map.vue";
export default {
  head() {
    return {
      title: "Climbing Weather Map"
    };
  },
  components: { Header, Map }
};
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>


 
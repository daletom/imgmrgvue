<template>
  <div class="home">
    <div>
    {{ character }}
    </div>
  </div>
</template>

<script>
const axios = require("axios");
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      character: null
    };
  },
  created() {
    const headers = {
      Authorization: "apikey 29250f0436aaedc6e03a725b5b39a45b4d248a684a7003a47e301903c1298002",
      'Access-Control-Allow-Origin': "*",
      'Access-Control-Allow-Methods': "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      'Access-Control-Allow-Headers': "Origin, Content-Type, X-Auth-Token"
    };
    fetch("http://localhost:8080/api/v1/assets/55e4d9390d42e03905934ad4?filter[categories]=Game%20of%20Thrones", { headers })
    .then(response => response.json())
    .then(data => (this.character = data.total));
  }
  /* beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const {
        data: { character }
      } = await axios({
        url: "http://localhost:8080/api/v1/assets/55e4d9390d42e03905934ad4?filter[categories]=Game%20of%20Thrones"
      });
      this.data = character;
    }
  }*/
};
</script>

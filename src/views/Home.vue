<template>
  <div class="home">
    <div>
    {{ data }}
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
      data: {}
    };
  },
  beforeMount() {
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
  }
};
</script>

<template>
  <div class="home">
    <div v-for="(character, index) in data" :key="index" :character="character" :data-index="index" >
    {{ character.attributes.custom_fields.Name }}
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
        data: { names }
      } = await axios({
        url: "http://api.imgix.com/api/v1/assets/55e4d9390d42e03905934ad4?filter[categories]=Game%20of%20Thrones"
      });
      this.data = names[0];
    }
  }
};
</script>

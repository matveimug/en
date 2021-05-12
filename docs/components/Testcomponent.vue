<template>
  <div class="testcomponent">
      <h1>This is a {{name}}</h1>
  </div>
</template>




<script>
// import { ref } from 'vue';

export default {
    props : {
        name : {
            type: String, 
            default:"Testcomponent"
        }
    }
}
</script>




<style scoped>
    .testcomponent {
        border: 1px dotted gray;
        padding: 0.5rem;
    }
    h1 {
        margin:0; padding:0;
    }
</style>
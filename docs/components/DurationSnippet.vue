<template>
  <ul class="duration-snippet">
    <li>⏱</li>
    <li :class="s==0 ? 'duration-0' : 'duration-n'" title="Lessons at school. In a class. With a teacher. The school."><b>School</b>: {{s}}</li>
    <li :class="i==0 ? 'duration-0' : 'duration-n'" title="We guide you, we may give you some materials to read or watch, but you mostly work at your own."><b>Individual</b>: {{i}}</li>
    <li :class="es==0 ? 'duration-0' : 'duration-n'" title="Sometimes we meet through the internet. This is the e-school."><b>E-school</b>: {{es}}</li>
    <li :class="ei==0 ? 'duration-0' : 'duration-n'" title="E-Individual work? Basically this is the same as individual work."><b>E-individual</b>: {{ei}}</li>
  </ul>
</template>




<script>
// import { ref } from 'vue';

export default {
    props : {
        s : {
            type: [Number, String], 
            default: 0
        }, 
        i : {
            type: [Number, String], 
            default: 0
        }, 
        es : {
            type: [Number, String], 
            default: 0
        },
        ei : {
            type: [Number, String], 
            default: 0
        }
    }
}
</script>




<style>
    .duration-snippet {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width:unset;
        /* border: 1px dotted gray; */
        padding: 0;
        list-style: none;
    }
    .duration-snippet > li {
        padding: 0.25em 0.5em;
        /* font-size: larger; */
    }
    .duration-snippet > li:first-child {
        padding: 0.25em ;
        /* font-size: larger; */
    }
    .duration-snippet > li.duration-0 {
        opacity: 0.5;
    }
    .duration-snippet > li.duration-n {
        font-weight: 700;
        /* background: rgb(255, 248, 171); */
        background: var(--c-bg-accent);
        border-bottom: 1px solid black;
    }
</style>
<template>
  <ul class="duration-snippet" :class="open ? 'duration-snippet--open' : 'duration-snippet--closed'">
    <li class="duration-snippet__util">⏱</li>
    <li :class="s==0 ? 'duration-0' : 'duration-n'" title="Lessons at school. In a class. With a teacher. The school."><b>School</b>: {{s}}</li>
    <li :class="i==0 ? 'duration-0' : 'duration-n'" title="We guide you, we may give you some materials to read or watch, but you mostly work at your own."><b>Individual</b>: {{i}}</li>
    <li :class="es==0 ? 'duration-0' : 'duration-n'" title="Sometimes we meet through the internet. This is the e-school."><b>E-school</b>: {{es}}</li>
    <li :class="ei==0 ? 'duration-0' : 'duration-n'" title="E-Individual work? Basically this is the same as individual work."><b>E-individual</b>: {{ei}}</li>
    
    <li v-if="open" @click="open = !open" class="duration-snippet__util duration-snippet__button">✖</li>
    <li v-else @click="open = !open" class="duration-snippet__util duration-snippet__button">◀</li>
  </ul>
</template>


<script>

import { ref } from 'vue';

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
    },
    setup(props){
        const open = ref(false);

        return { open, props }
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
        /* flex: 1; */
        padding: 0.25em 0.5em;
        white-space:nowrap;
        overflow: hidden;
        text-align: center;
        /* font-size: larger; */
    }
    .duration-snippet > li:first-child {
        padding: 0.25em ;
        flex: 1 1 3rem;
        /* font-size: larger; */
    }
    .duration-snippet > li.duration-0 {
        opacity: 0.25;
    }
    .duration-snippet > li.duration-n {
        font-weight: 700;
        /* background: rgb(255, 248, 171); */
        background: var(--c-bg-accent);
        border-bottom: 1px solid var(--c-gray-dark);
    }

    .duration-snippet--closed > li.duration-0 {
        flex: 0;
        padding: 0;
        transition: all 0.5s ease-in;
    }

    .duration-snippet--open > li.duration-0 {
        flex:1;
        padding: 0.25em;
        transition: all 0.75s ease-out;
    }

    .duration-snippet__util {
        flex-grow: 0;
        flex-shrink: 1;
        flex-basis: 4ch;
        max-width: 4ch;
    }
    .duration-snippet__button {
        cursor: pointer;
        background: var(--ed-c-gray-80);
        color: var(--ed-c-white);

    }
</style>
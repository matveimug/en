<template>
    <details :open="open" >
        <summary>👨‍🏫 {{title}}</summary>
        <div class="note__content ed-elevated-025">
            <slot name="notecontent" />
        </div>
    </details>
</template>

<script>

// import { ref } from 'vue';

export default {
    props : {
        title : {
            type: String, 
            default:"Note:"
        },
        open : {
            type: Boolean,
            default: false
        }
    },
    setup(props){
        // const open = ref(false);
        // return { open }
    }
}
</script>

<style scoped>
    summary{
        padding: var(--ed-base-025);
        border-radius: var(--ed-base-05);
        cursor:pointer;
        background-color: var(--ed-c-warning);
    }
    .note__content {
        border: 1px dotted var(--ed-c-gray-80);
        padding: var(--ed-base);
        border-radius: var(--ed-base-05);
    }
</style>
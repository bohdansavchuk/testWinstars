<template>
    <button class="btn">
        <slot>Button</slot>
    </button>
</template>

<script>
    export default {
        name: "Button"
    }
</script>

<style scoped>
    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 200px;
        height: 50px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #42b983;
        color: #ffffff;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
    }
</style>
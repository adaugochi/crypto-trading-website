<template>
    <div>
        <select class="form-input">
            <option :value="option.value" v-for="(option, index) in options" :key="index" v-html=" option.name "></option>
        </select>
        <div class="fs-10 mt-1 text-center text__gray">{{ hint }}</div>
    </div>
</template>

<script>
export default {
    name: "SelectField",
    props: {
        options: {
            type: Array
        },
        hint: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>

</style>
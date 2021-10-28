<template>
    <div class='form-input-wrapper'>
        <input :type="type" class="form-input" :placeholder="placeholder" v-model="value">
        <span class="form-input-placeholder">{{ placeholder }}</span>
        <div class="mt-1">
            <small class="form-hint text-danger">{{ errorMsg }}</small>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputField",
    props: {
        type: {
            type: String,
            default: "text"
        },
        value: {
            type: String
        },
        placeholder: {
            type: String,
            default: ""
        },
        errorMsg: {
            type: String,
            default: ""
        }
    }
}
</script>

<style scoped>

</style>
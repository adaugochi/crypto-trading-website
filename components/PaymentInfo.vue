<template>
    <div>
        <div class="lines">
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
            <div class="dot"></div>
            <div class="line"></div>
        </div>

        <div class="methods">
            <div class="mb-4 d-flex buy-coin ms-3">
                <span class="fs-10 text__gray align-self-center w-50">{{ label }}</span>
                <select class="form-control-sm form-control">
                    <option value="bank-transfer">Bank transfer</option>
                    <option value="online">Online</option>
                </select>
            </div>

            <div class="fs-10 text__gray mb-4 align-self-center mt-21px ms-3">
                Payment confirmed
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PaymentInfo",
    props: {
        label: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>
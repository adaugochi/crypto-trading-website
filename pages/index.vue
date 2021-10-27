<template>
    <main class="wrapper">
        <div class="wrapper-header">
            <!-- Header -->
            <nav class="navbar navbar-border-bottom bg-transparent ">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="~/static/logo.png" alt="Logo" class="d-inline-block align-text-top">
                    </a>
                    <div class="mt-4 mt-sm-0">
                        <a class="btn btn__primary">Sign Up</a>
                    </div>
                </div>
            </nav>

            <!-- hero banner -->
            <div class="container hero-banner">
                <div class="row">
                    <div class="col-md-6">
                        <p class="hero-banner__sub-text">With 0% trading commission</p>
                        <h1 class=hero-banner__header>
                            Most trusted and secure P2P Crypto- currency exchange
                        </h1>
                        <p class="hero-banner__text">
                            Ushering Africa into the digital age of payment by making
                            cryptocurrency as easy as possible.
                        </p>
                        <a class="btn btn__primary btn__lg">Start trading</a>
                    </div>
                    <div class="col-md-6 mt-5 mt-md-0 align-self-center">
                        <img src="~/static/new/Group4.png" alt="design" class="d-inline-block img-fluid w-web-fill">
                    </div>
                </div>
            </div>
        </div>

        <!-- why choose us -->
        <div class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-10 mx-auto text-center">
                        <h2 class="fs-36 fw-500 pb-4 text__dark">Why choose us</h2>
                        <p class="why-choose-us__body">
                            We render the best service on P2P market and here are the reason people choose us
                        </p>
                    </div>
                </div>
                <div class="row gx-5 mt-5">
                    <div class="col-md-4" v-for="(offer, index) in offers" :key="index">
                        <img :src="'./static/new/' + offer.imgPath" alt="why" class="why-choose-us__img">
                        <h5 class="fw-600 text__primary why-choose-us__title">
                            {{ offer.title }}
                        </h5>
                        <p class="why-choose-us__body">{{ offer.body }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            offers: [
                {
                    imgPath: 'Group6.png',
                    title: 'Secure and transparent',
                    body: `Security is guaranteed. We also maintain privacy as well th quality of our product.
                        We provide transparent service, our system and eco-system can easily be monitored always`
                },
                {
                    imgPath: 'Group13.png',
                    title: 'Social interaction',
                    body: `We have a great platform where traders can interaction together about the coin or
                    asset they plan on selling or buying as the case may be.`
                },
                {
                    imgPath: 'Group8.png',
                    title: '24/7 Customer service',
                    body: `Our customer service is always available to assist you incase of any report or issue you
                    might be facing at any given time`
                }
            ],
        }
    }
}
</script>

<style lang="scss">
@import "assets/scss/pages/index";
</style>
<template>
    <main class="wrapper">
        <div class="wrapper-header">
            <!-- Header -->
            <nav class="navbar navbar-border-bottom bg-transparent ">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src="~/static/logo.png" alt="Logo" class="d-inline-block align-text-top">
                    </a>
                    <div>
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
                    <div class="col-lg-8 col-xl-6 col-md-10 mx-auto text-center">
                        <h2 class="fs-36 fw-500 pb-4 text__dark">Why choose us</h2>
                        <p class="font-normal">
                            We render the best service on P2P market and here are the reason people choose us
                        </p>
                    </div>
                </div>
                <div class="row gx-2 mt-5">
                    <div class="col-md-4" v-for="(offer, index) in offers" :key="index">
                        <img :src="require('~/static/new/' + offer.imgPath)" alt="why" class="why-choose-us__img">
                        <h5 class="fw-600 text__primary why-choose-us__title">
                            {{ offer.title }}
                        </h5>
                        <p class="font-normal">{{ offer.body }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Our Product -->
        <div class="tabs">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active text-center" id="buy-coin-tab" data-bs-toggle="tab" data-bs-target="#buyCoin"
                                        type="button" role="tab" aria-controls="buy-coin" aria-selected="true">
                                    <img src="~/static/new/buy-active.svg" alt="buy" height="24"><br>
                                    <span class="text__dark mt-1">Buy coin</span>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="sell-coin-tab" data-bs-toggle="tab" data-bs-target="#sellCoin"
                                        type="button" role="tab" aria-controls="sell-coin" aria-selected="false">
                                    <img src="~/static/new/sell-inactive.svg" alt="sell" height="24"><br>
                                    <span class="text__dark mt-1">Sell coin</span>
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="buyCoin" role="tabpanel" aria-labelledby="buy-coin-tab">
                                <input-field
                                    placeholder="You buy"
                                    value="1,000"
                                />
                                <input-field
                                    placeholder="You get"
                                    value="0.0027"
                                />
                            </div>
                            <div class="tab-pane fade" id="sellCoin" role="tabpanel" aria-labelledby="sell-coin-tab">
                                <input-field
                                    placeholder="You buy"
                                    value="0.0027"
                                />
                                <input-field
                                    placeholder="You get"
                                    value="900"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="offset-md-2 col-md-4">
                        <h2 class="fs-24 fw-500 pb-4 text__dark">Our Product</h2>
                        <p class="font-normal">
                            Myddle Cafe is a decentralized financial platform where buyers and sellers are can trade
                            cryptocurrency. Ushering Africa into the digital age of payment by making
                            cryptocurrency as easy as possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Services -->
        <div class="pdb-150">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-xl-6 col-md-10 mx-auto text-center">
                        <h2 class="fs-36 fw-500 pb-4 text__dark">Other Services</h2>
                        <p class="font-normal">
                            We also render variety of service that can help you transact in a DeFi as effective
                            as that of your bank activities
                        </p>
                    </div>
                </div>
                <div class="bg-bar-img">
                    <div class="row gx-2 mt-5">
                        <div class="col-md-4" v-for="(service, index) in services" :key="index">
                            <img :src="require('~/static/new/' + service.imgPath)" alt="why" class="why-choose-us__img">
                            <h5 class="fw-600 text__primary why-choose-us__title">
                                {{ service.title }}
                            </h5>
                            <p class="font-normal">{{ service.body }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Explore -->
        <div class="bg-explore-img">
            <div class="container py-5">
                <div class="row">
                    <div class="col-md-10 mx-auto text-white text-center">
                        <div class="card bg__primary">
                            <h2 class="fw-500 fs-36">
                                Get ready to explore the Crypto world
                            </h2>
                            <p>
                                We have a great platform where traders can interaction together about the coin or
                                asset they plan on selling or buying as the case may be. <a class="fw-500">Sign up now</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import InputField from "../components/InputField";
export default {
    name: "index",
    components: {InputField},
    data() {
        return {
            offers: [
                {
                    imgPath: 'Group6.svg',
                    title: 'Secure and transparent',
                    body: `Security is guaranteed. We also maintain privacy as well th quality of our product.
                        We provide transparent service, our system and eco-system can easily be monitored always`
                },
                {
                    imgPath: 'Group13.svg',
                    title: 'Social interaction',
                    body: `We have a great platform where traders can interaction together about the coin or
                    asset they plan on selling or buying as the case may be.`
                },
                {
                    imgPath: 'Group8.svg',
                    title: '24/7 Customer service',
                    body: `Our customer service is always available to assist you incase of any report or issue you
                    might be facing at any given time`
                }
            ],
            services: [
                {
                    imgPath: 'Group9.svg',
                    title: 'Buy Airtime',
                    body: `You can now buy airtime using our crypto currency platform with ease and comfort`
                },
                {
                    imgPath: 'Group10.svg',
                    title: 'Pay Bills',
                    body: `With our platform, paying bill with your crypto currency has been made possible with
                    ease and without withdrawing as well.`
                },
                {
                    imgPath: 'Group11.svg',
                    title: 'Swap Coins',
                    body: `We also offer the option to swap coins with little or no charge involved with the click of a button.`
                }
            ],
        }
    }
}
</script>

<style lang="scss">
@import "assets/scss/pages/index";
</style>
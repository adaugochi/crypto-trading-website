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
                        <a class="btn btn__primary" href="#signup">Sign Up</a>
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
                        <div class="btn-shadow"></div>
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
                <div class="row gx-3 mt-5">
                    <div class="col-md-4 mt-4 mt-md-0" v-for="(offer, index) in offers" :key="index">
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
                    <div class="col-lg-6 col-md-7">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <a class="nav-link active text-center" id="buy-coin-tab" data-bs-toggle="tab" data-bs-target="#buyCoin"
                                        type="button" role="tab" aria-controls="buy-coin" aria-selected="true">
                                    <img src="~/static/new/buy-inactive.svg" alt="buy" height="34" class="img-inactive">
                                    <img src="~/static/new/buy-active.svg" alt="buy" height="34" class="img-active"><br>
                                    <span class="text__dark mt-2">Buy coin</span>
                                </a>
                            </li>
                            <li class="nav-item" role="presentation">
                                <a class="nav-link text-center" id="sell-coin-tab" data-bs-toggle="tab" data-bs-target="#sellCoin"
                                        type="button" role="tab" aria-controls="sell-coin" aria-selected="false">
                                    <img src="~/static/new/sell-active.svg" alt="sell" height="34" class="img-active">
                                    <img src="~/static/new/sell-inactive.svg" alt="sell" height="34" class="img-inactive"><br>
                                    <span class="text__dark mt-2">Sell coin</span>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="buyCoin" role="tabpanel" aria-labelledby="buy-coin-tab">
                                <div class="row gx-4 gx-lg-5">
                                    <div class="col-md-7">
                                        <input-field placeholder="You buy" value="1,000"/>
                                        <payment-info label="Buy coin via"/>
                                    </div>
                                    <div class="col-md-5">
                                        <select-field :options="currenciesGHS" hint="Ghana Fiat currency"/>
                                    </div>
                                </div>

                                <div class="row gx-4 gx-lg-5">
                                    <div class="col-md-7 mt-4 mt-md-0">
                                        <input-field placeholder="You get" value="0.0027"/>
                                        <div class="fs-10 text__gray ms-3 mt-0">
                                            <span class="fw-bold">0.00GHS</span> transaction fee
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <select-field :options="currenciesBTC" hint="Bitcoin"/>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="sellCoin" role="tabpanel" aria-labelledby="sell-coin-tab">
                                <div class="row gx-4 gx-lg-5">
                                    <div class="col-md-7">
                                        <input-field placeholder="You sell" value="0.0027"/>
                                        <payment-info label="Sell coin via"/>
                                    </div>
                                    <div class="col-md-5">
                                        <select-field :options="currenciesBTC" hint="Bitcoin"/>
                                    </div>
                                </div>
                                <div class="row gx-4 gx-lg-5">
                                    <div class="col-md-7 mt-4 mt-md-0">
                                        <input-field placeholder="You get" value="900"/>
                                    </div>
                                    <div class="col-md-5">
                                        <select-field :options="currenciesGHS" hint="Ghana Fiat currency"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="offset-lg-2 col-md-5 col-lg-4 mt-6">
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
            <div class="container bg-bar-img">
                <div class="row">
                    <div class="col-lg-8 col-xl-6 col-md-10 mx-auto text-center">
                        <h2 class="fs-36 fw-500 pb-4 text__dark">Other Services</h2>
                        <p class="font-normal">
                            We also render variety of service that can help you transact in a DeFi as effective
                            as that of your bank activities
                        </p>
                    </div>
                </div>
                <div class="">
                    <div class="row gx-2 mt-5">
                        <div class="col-md-4 mt-4 mt-md-0" v-for="(service, index) in services" :key="index">
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
        <div class="bg-explore-img" id="signup">
            <div class="container py-5">
                <div class="row">
                    <div class="col-lg-10 mx-auto text-white text-center">
                        <div class="card bg__primary">
                            <h2 class="fw-600 fs-36 lh-46">
                                Get ready to explore the <br> Crypto world
                            </h2>
                            <p class="mt-4 mb-5 lh-33">
                                We have a great platform where traders can interaction together about the coin or
                                asset they plan on selling or buying as the case may be.
                                <a class="fw-600 text-white text-decoration-none">Sign up now</a>
                            </p>
                            <form @submit.prevent="submitForm" name="submit-to-google-sheet">
                                <div class="mb-3 input-group">
                                    <input type="email" class="form-control form-input form-input-group" id="email"
                                           placeholder="Enter your Email Address" name="email" v-model.trim="form.email">
                                    <button class="btn btn__primary-light">Sign Up Now</button>
                                </div>
                            </form>
                            <p class="lh-33">
                                You will be the first set of persons to get <span class="fw-600 text-white">notified</span>
                                when we launch
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <section class="footer pb-5 pdt-150">
            <div class="container">
                <div class="mb-4">
                    <a class="navbar-brand font-normal text__primary fw-500" href="/">
                        Myddle cafe
                    </a>
                </div>
                <div class="row footer-first">
                    <div class="col-md-2 mb-5 mb-md-0">
                        <p class="mb-4">
                            Come join us as we head to the moon
                        </p>
                        <p>mail@email.com</p>
                    </div>
                    <div class="col-md-2 col-3">
                        <p>Address</p>
                        <p>FAQ</p>
                        <p>Coin marketcap</p>
                    </div>
                    <div class="col-md-2 col-3 offset-6 mb-5 mb-md-0">
                        <p>Twitter</p>
                        <p>Facebook</p>
                        <p>Whatsapp</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Footer -->
    </main>
</template>

<script>
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import PaymentInfo from "../components/PaymentInfo";
import SheetDB from "sheetdb-js"
import axios from "axios";

export default {
    name: "index",
    components: {PaymentInfo, SelectField, InputField},
    data() {
        return {
            form: {
                email: '',
            },
            offers: [
                {
                    imgPath: 'Group6.png',
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
            paymentMethods: [
                {
                    value: 'bank-transfer',
                    name: 'Bank transfer'
                },
                {
                    value: 'online',
                    name: 'Online'
                }
            ],
            currenciesGHS: [
                {
                    value: 'ghs',
                    name: "&#x1F1EC&#x1F1ED &nbsp; GHS"
                },
                {
                    value: 'btc',
                    name: "&#x20BF &nbsp; BTC"
                }
            ],
            currenciesBTC: [
                {
                    value: "btc",
                    name: "&#x20BF &nbsp; BTC"
                },
                {
                    value: "ghs",
                    name: "&#x1F1EC&#x1F1ED &nbsp; GHS"
                }
            ]
        }
    },
    methods: {
        submitForm: async function (event) {
            if (event.type === 'submit') {
                const now = Date.now();
                let user = {
                    date: new Date(now).toLocaleDateString("en-US"),
                    time: new Date(now).toLocaleTimeString("en-US"),
                    email: this.form.email
                }

                let saveUser = {
                    data: [
                        user
                    ]
                }

                await SheetDB.read(process.env.SCRIPT_URL, {search: {email: user.email}})
                    .then(result => {
                        if (result.length > 0) {
                            this.$toast.info('You already signup')
                        } else {
                            axios.post(process.env.SCRIPT_URL, saveUser)
                                .then(response => {
                                    if (response.status === 201) {
                                        this.$toast.success(
                                            'You have successfully signup into our platform.'
                                        )
                                    } else {
                                        this.$toast.info('Something went wrong...')
                                    }
                                })
                                .catch((err) => {
                                    this.$toast.error(
                                        'An error occurred while trying to send this request. Please reload the page and try again'
                                    )
                                })
                        }
                    }).catch(error => {
                        this.$toast.error('Something went wrong...')
                    });
            }
        }
    }
}
</script>

<style lang="scss">
@import "assets/scss/pages/index";
</style>

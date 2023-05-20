<script setup lang="ts">
import GradientLineChart from './GradientLineChart/gradientLineChart.vue';
import OrdersOverview from './OrdersOverview/ordersOverview.vue';
import Table from './Table/table.vue';
import UserChart from './UserChart/userChart.vue';

const siteInformation: SiteInformation[] = [
    {
        id: 1,
        title: "Today's Money",
        statistics: "$53,000",
        icon: "pi pi-database"
    },
    {
        id: 2,
        title: "Today's Users",
        statistics: "2,300",
        icon: "pi pi-globe"
    },
    {
        id: 3,
        title: "New Clients",
        statistics: "+3,462",
        icon: "pi pi-chart-line"
    },
    {
        id: 4,
        title: "Sales",
        statistics: "$103,430",
        icon: "pi pi-shopping-cart"
    }
]
</script>
<template>
    <div class="home">
        <div class="mt-4 grid">
            <div v-for="(item, index) in siteInformation" :key="index" class="col-12 sm:col-6 lg:col-3">
                <div class="flex justify-content-between align-items-center px-4 py-3 bg-gray-800 border-round-xl shadow-sm">
                    <div class="flex flex-column">
                        <span class="text-gray-200">{{ item.title }}</span>
                        <span class="mt-2 font-bold text-xl text-gray-100">{{ item.statistics }}</span>
                    </div>
                    <div class="bg-green-500 border-round-xl">
                        <i :class="item.icon" class="p-3 text-gray-100"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 gap-4 flex justify-content-between flex-column lg:flex-row">
            <div class="lg:w-7 gap-4 flex-column-reverse sm:flex-row w-full p-4 bg-gray-800 border-round-xl flex justify-content-between shadow-sm">
                <div class="flex flex-column justify-content-between">
                    <div class="flex flex-column">
                        <span class="text-gray-200">Built by developers</span>
                        <span class="font-bold text-xl mt-2 text-gray-100">Soft UI Dashboard</span>
                        <p class="text-gray-200">From colors, cards, typography to complex elements, you will find the full
                            documentation. </p>
                    </div>
                    <div class="flex align-items-center cursor-pointer">
                        <span class="text-gray-200">Read More</span>
                        <i class="pi pi-arrow-right ml-3 text-gray-200"></i>
                    </div>
                </div>
                <div class="xl:w-20rem lg:w-50rem sm:w-full bg-green-500 border-round-xl">
                    <img class="rocket-img w-full h-full" src="../../assets/Images/rocket-white.b63e5d40.png" alt="">
                </div>
            </div>
            <div class="lg:w-5 w-full p-4 bg-gray-800 border-round-xl shadow-sm">
                <div
                    class="work-with-the-rocket bg-cover h-full border-round-xl flex flex-column justify-content-between p-4">
                    <div class="flex flex-column justify-content-between">
                        <span class="font-bold text-2xl text-gray-100"> Work with the rockets</span>
                        <span class="mt-3 text-lg text-gray-200"> Wealth creation is an evolutionarily recent positive-sum
                            game. It is all
                            about who take the opportunity first. </span>
                    </div>
                    <div class="flex align-items-center cursor-pointer">
                        <span class="text-gray-200">Read More</span>
                        <i class="pi pi-arrow-right ml-3"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-4 flex gap-4 flex-column xl:flex-row justify-content-between">
            <div class="xl:w-5 w-full p-4 bg-gray-800 border-round-xl shadow-sm">
                <UserChart />
            </div>
            <div class="xl:w-7 w-full p-4 bg-gray-800 border-round-xl shadow-sm">
                <GradientLineChart />
            </div>
        </div>
        <div class="mt-4 flex gap-4 flex-column lg:flex-row">
            <Table class="w-full lg:w-8" />
            <OrdersOverview class="w-full  lg:w-4" />
        </div>
    </div>
</template>

<style scoped>
.home ::v-deep(.p-overlaypanel::before) {
    left: 365px !important;
}

.home ::v-deep(.p-overlaypanel::after) {
    left: 365px !important;
}

.rocket-img {
    object-fit: cover;
}

.work-with-the-rocket {
    background-image: url('../../assets/Images/ivancik.png');
}

.item-width{
    width: calc(50% - 14px) !important;
}
</style>
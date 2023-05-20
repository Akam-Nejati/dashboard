<script setup lang="ts">
import { onMounted, ref } from 'vue';


const chartData = ref({
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
        {
            label: 'Sales',
            data: [540, 325, 702, 620],
            backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }
    ]
});

const chartOptions = ref({
    scales: {
        y: {
            beginAtZero: true
        }
    }
});

const statistics: SiteInformation[] = [
    {
        id: 1,
        title: "users",
        icon: "pi pi-users",
        statistics: "37K",
        progress: 60
    },
    {
        id: 2,
        title: "users",
        icon: "pi pi-users",
        statistics: "37K",
        progress: 60
    },
    {
        id: 3,
        title: "users",
        icon: "pi pi-users",
        statistics: "37K",
        progress: 60
    },
    {
        id: 4,
        title: "users",
        icon: "pi pi-users",
        statistics: "37K",
        progress: 60
    }
]
const chartHeight = ref<number>()

onMounted(() => {
    responsiveChart()
})

window.addEventListener("resize", responsiveChart)

function responsiveChart() {
    if (window.innerWidth < 480) {
        chartHeight.value = 90
    }else if (480 < window.innerWidth && window.innerWidth < 768) {
        chartHeight.value = 75
    }else if (768 < window.innerWidth && window.innerWidth < 1024) {
        chartHeight.value = 60
    }else if (1024 < window.innerWidth) {
        chartHeight.value = 40
    }
}
</script>

<template>
    <div class="chart h-full flex flex-column justify-content-between">
        <Chart type="bar" :data="chartData" :options="chartOptions" :width="100" :height="chartHeight" />
        <div class="flex flex-column">
            <span class="font-bold text-xl text-gray-200">active Users</span>
            <span class="mt-2 font-bold text-gray-200">(+23%)<span class="font-normal"> than last week</span></span>
        </div>
        <div class="grid mt-4">
            <div v-for="item in statistics" :key="item.id" class="col-6 md:col-3">
                <div class="py-2">
                    <div class="flex align-items-center">
                        <i class="p-2 bg-green-500 border-round-xl shadow-xl text-sm text-gray-100" :class="item.icon"></i>
                        <span class="ml-2 text-sm text-gray-200">{{ item.title }}</span>
                    </div>
                    <div class="mt-2">
                        <span class="text-xl font-bold text-gray-200">{{ item.statistics }}</span>
                        <ProgressBar class="mt-2 bg-gray-300" :value="item.progress" :showValue="false"></ProgressBar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chart ::v-deep(.p-progressbar) {
    height: .5rem !important;
}

.chart ::v-deep(.p-progressbar div) {
    background: var(--gray-900) !important;
}
</style>
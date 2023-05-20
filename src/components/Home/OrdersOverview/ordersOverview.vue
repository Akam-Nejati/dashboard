<script setup lang="ts">
const events = [
    { status: '$2400 Design changes', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
    { status: 'New order #1832412', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Server payments for April', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'New card added for order #4395133', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' },
    { status: 'Unlock packages for development', date: '16/10/2020 10:00', icon: 'pi pi-credit-card', color: 'rgb(47 111 143)' },
    { status: 'Notifications unread', date: '16/10/2020 10:00', icon: 'pi pi-bell', color: '#eb5b5b' }
]
</script>

<template>
    <div class=" order-overview h-full bg-gray-800 border-round-xl p-4">
        <div class="mb-4">
            <span class="text-xl font-bold text-grat-100">Orders overview</span>
        </div>
        <Timeline :value="events">
            <template #content="slotProps">
                <div class="flex flex-column">
                    <span class="text-gray-100">{{ slotProps.item.status }}</span>
                    <small class="text-gray-200">{{ slotProps.item.date }}</small>
                </div>
            </template>
            <template #marker="slotProps">
                <span
                    class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
                    :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
        </Timeline>
    </div>
</template>

<style scoped>
.order-overview ::v-deep(.p-timeline-event-opposite) {
    display: none !important;
}

.order-overview ::v-deep(.p-timeline-event-connector) {
    height: 4rem;
}
</style>
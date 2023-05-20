<script setup lang="ts">
import xdIcon from "../../../assets/Images/logo-xd.c0c96993.svg"
import atlassianIcon from "../../../assets/Images/logo-atlassian.3dc00559.svg"
import invisionIcon from "../../../assets/Images/logo-invision.4731441a.svg"
import jiraIcon from "../../../assets/Images/logo-jira.cb154bf2.svg"
import slackIcon from "../../../assets/Images/logo-slack.9a05c08a.svg"
import spotifyIcon from "../../../assets/Images/logo-spotify.b0a5df30.svg"
import person1Image from "../../../assets/Images/team-1.jpg"
import person2Image from "../../../assets/Images/team-2.jpg"
import person3Image from "../../../assets/Images/team-3.jpg"
import person4Image from "../../../assets/Images/team-4.jpg"

const projects: HomeProjects[] = [
    {
        id: 1000,
        completion: 60,
        description: 'Soft UI XD Version',
        image: xdIcon,
        category: 'companies',
        budget: "14,000 $",
        members: [
            person1Image,
            person2Image,
            person3Image,
            person4Image
        ]
    },
    {
        id: 1001,
        completion: 10,
        description: 'Add Progress Track',
        image: atlassianIcon,
        category: 'members',
        budget: "3,000 $",
        members: [
            person1Image,
            person2Image,
        ]
    },
    {
        id: 1002,
        completion: 100,
        description: 'Redesign New Online Shop',
        image: invisionIcon,
        category: 'budget',
        budget: "Not set",
        members: [
            person3Image,
            person4Image
        ]
    },
    {
        id: 1003,
        completion: 100,
        description: 'Add the New Pricing Page',
        image: jiraIcon,
        category: 'completion',
        budget: "20,500 $",
        members: [
            person4Image,
            person3Image,
            person1Image,
            person2Image,
        ]
    },
    {
        id: 1004,
        completion: 25,
        description: 'Fix Platform Errors',
        image: slackIcon,
        category: 'completion',
        budget: "500 $",
        members: [
            person1Image,
        ]
    },
    {
        id: 1005,
        completion: 40,
        description: 'Launch our Mobile App',
        image: spotifyIcon,
        category: 'completion',
        budget: "2,000 $",
        members: [
            person4Image,
            person1Image
        ]
    },
];
</script>

<template>
    <div class="table bg-gray-800 border-round-xl shadow-sm">
        <div class="p-3">
            <span class="text-xl font-bold text-gray-100"> Projects </span>
        </div>
        <DataTable class="border-round-xl" :value="projects" tableStyle="min-width 50rm">
            <Column field="companies" header="COMPANIES" class="text-gray-200 bg-gray-800">
                <template #body="{ data }">
                    <div class="flex align-items-center">
                        <img class="w-2rem mr-4" :src="data.image">
                        <span>{{ data.description }}</span>
                    </div>
                </template>
            </Column>
            <Column field="members" header="MEMBERS" class="text-gray-200 bg-gray-800">
                <template #body="{ data }">
                    <AvatarGroup>
                        <Avatar v-for="memberImage in data.members" :image="memberImage" size="large" shape="circle" />
                    </AvatarGroup>
                </template>
            </Column>
            <Column field="budget" header="BUDGET" class="text-gray-200 bg-gray-800"></Column>
            <Column field="completion" header="COMPLETION" class="text-gray-200 bg-gray-800">
                <template #body="{ data }">
                    <div>
                        <ProgressBar class="h-1rem" :value="data.completion" :showValue="false"></ProgressBar>
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
</template>


<style scoped>
.table ::v-deep(.p-datatable-wrapper) {
    border-radius: 0.75rem !important;
}
</style>
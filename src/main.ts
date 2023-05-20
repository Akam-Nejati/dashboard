import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Divider from "primevue/divider";
import Menu from "primevue/menu";
import Card from "primevue/card";
import Breadcrumb from "primevue/breadcrumb";
import InputText from "primevue/inputtext";
import OverlayPanel from "primevue/overlaypanel";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup";
import Chart from "primevue/chart";
import ProgressBar from 'primevue/progressbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Timeline from 'primevue/timeline';
import router from './router/index'
import "primevue/resources/themes/vela-blue/theme.css";     
import "primeflex/primeflex.css";     
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";

const app = createApp(App)

app.use(PrimeVue, { ripple: true });
app.use(router)

app.component("Button", Button);
app.component("Sidebar", Sidebar);
app.component("Divider", Divider);
app.component("Menu", Menu);
app.component("Card", Card);
app.component("Breadcrumb", Breadcrumb);
app.component("InputText", InputText);
app.component("OverlayPanel", OverlayPanel);
app.component("Avatar", Avatar);
app.component("AvatarGroup", AvatarGroup);
app.component("Chart", Chart);
app.component("ProgressBar", ProgressBar);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ColumnGroup", ColumnGroup);
app.component("Row", Row);
app.component("Timeline", Timeline);

app.mount('#app')
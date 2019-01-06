import Zerv from "@zerv/framework";
Zerv.disableDebugLogging();

const app = new Zerv("#app");

app.data.app = {
    name: "Zerv Docs"
};
app.data.copyright = {
    year: (new Date()).getFullYear(),
    name: "Zach Barham"
};

app.render();
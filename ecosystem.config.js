module.exports = {
    apps: [
        {
            name: "Beers Website",
            port: 3005,
            exec_mode: "cluster",
            instances: "1",
            script: "./.output/server/index.mjs",
            args: "preview",
        },
    ],
};
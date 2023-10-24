module.exports = {
    apps: [
      {
        name: "Statistics-DataBase",
        namespace: "Statistics-DataBase",
        script: 'Mys.js',
        watch: true,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Src/Statistics-DataBase",
        node_args: "--trace-warnings"
      },
      {
        name: "Statistics-Command",
        namespace: "Statistics-Command",
        script: 'Mys.js',
        watch: true,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Src/Statistics-Main",
        node_args: "--trace-warnings"
      },
  ]
};


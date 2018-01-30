module.exports = {
networks: {
  localhost: {
    host: "localhost",
    port: 8545,
    network_id: "*"
  },
  rinkeby: {
    host: "127.0.0.1",
    port: 30303,
    network_id: "4",
    gas:4600000,
    from: 'fc70c9f04d03c6162d305b7119c026b5a7bf7102'
  },
}
};

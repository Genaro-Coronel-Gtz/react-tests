const pokemon = {
  url: "https://pokeapi.co/api/v2/pokemon?limit=10",
  method: "get",
  status: 200,
  data: {
    results: [
      { name: "picachu", url: "miurltest" },
      { name: "charmander", url: "miurltest" },
    ],
  },
};

export default pokemon;

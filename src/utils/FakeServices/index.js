import pokemon from "./Responses/PokemonsResponse";
import catfact from "./Responses/CatFactResponse";
import pokemonError from "./Responses/PokemonsResponseError";

let services = [];

function SeedService(url, method, status) {
  if (
    pokemon.url === url &&
    pokemon.method === method &&
    pokemon.status === status
  ) {
    services.push(pokemon);
  }

  if (
    catfact.url === url &&
    catfact.method === method &&
    catfact.status === status
  ) {
    services.push(catfact);
  }

  if (
    pokemonError.url === url &&
    pokemonError.method === method &&
    pokemonError.status === status
  ) {
    services.push(pokemonError);
  }
}

function MakeFakeRequest(url, method, type, payload = null) {
  SeedService(url, method, type);

  const response = services.filter((service) => {
    return (
      service.url === url &&
      service.method === method &&
      service.status === type
    );
  });

  return { response: response[0] };
}

export default MakeFakeRequest;

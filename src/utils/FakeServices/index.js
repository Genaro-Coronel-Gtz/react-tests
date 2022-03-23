import movies from "./Responses/MoviesResponse";
import detail from "./Responses/MovieDetailResponse";
import movieDetailError from "./Responses/MovieDetailResponseError";

let services = [];

function SeedService(url, method, status) {
  if (
    movies.url === url &&
    movies.method === method &&
    movies.status === status
  ) {
    services.push(movies);
  }

  if (
    detail.url === url &&
    detail.method === method &&
    detail.status === status
  ) {
    services.push(detail);
  }

  if (
    movieDetailError.url === url &&
    movieDetailError.method === method &&
    movieDetailError.status === status
  ) {
    services.push(movieDetailError);
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

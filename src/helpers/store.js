export const statusTypes = {
  initial: "initial", // init fetch
  loading: "loading", // init fetch
  succeeded: "succeeded", // success fetch
  failed: "failed", // catch fetch
};

export const fakeApi = (time = 500, success = true) => {
  return new Promise((resolve, reject) => {
    // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
    // En este ejemplo, usamos setTimeout(...) para simular código asíncrono.
    // En la vida real, probablemente uses algo como XHR o una API HTML5.
    setTimeout(() => {
      if (success) {
        resolve({
          success: true,
          value: 1,
        });
      } else {
        reject(); // ¡Todo salió bien!
      }
    }, time);
  });
};

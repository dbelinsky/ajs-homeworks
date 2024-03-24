import ErrorRepository from "../error.js";

describe("ErrorRepository", () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test("должен возвращать сообщение об ошибке по коду", () => {
    expect(repo.translate(400)).toBe("Bad request");
    expect(repo.translate(403)).toBe("Forbidden");
    expect(repo.translate(404)).toBe("Not found");
  });

  test("должен возвращать неизвестная ошибка для незарегистрированного кода", () => {
    expect(repo.translate(500)).toBe("Unknown Error");
  });
});
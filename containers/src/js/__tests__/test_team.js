import Team from "../team.js";

describe("Team", () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test("только уникальные персонажи", () => {
    const kelso = { name: "Kelso" };
    const jd = { name: "JD" };

    team.add(kelso);
    team.add(jd);

    expect(team.members.size).toBe(2);
  });

  test("нет дубликатов", () => {
    const kelso = { name: "Kelso" };

    team.add(kelso);

    expect(() => {
      team.add(kelso);
    }).toThrowError("Character already exists in the team.");
  });

  test("добавлять множество персонажей", () => {
    const kelso = { name: "Kelso" };
    const jd = { name: "JD" };
    const turk = { name: "Turk" };

    team.addAll(kelso, jd, turk, kelso);

    expect(team.members.size).toBe(3);
  });

  test("должен производить конвертацию Set в массив", () => {
    const kelso = { name: "Kelso" };
    const jd = { name: "JD" };

    team.addAll(kelso, jd);

    expect(team.toArray()).toEqual([kelso, jd]);
  });
});
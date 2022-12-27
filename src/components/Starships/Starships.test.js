
import axios from 'axios'


import { BASE_URL, fetchStarships} from "./utils";

jest.mock("axios");

describe("fetchStarships", () => {
  describe("when API call is successful", () => {
    it("should return starships list", async () => {
      // given
      const starships = [
        { name: "Star Destroyer" },
        { name: "Death Star" },
      ];
      axios.get.mockResolvedValueOnce(starships);

      // when
      const result = await fetchStarships();

      // then
      expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result).toEqual(starships);
    });
  });

  describe("when API call fails", () => {
    it("should return empty starships list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchStarships();

      // then
      expect(axios.get).toHaveBeenCalledWith(BASE_URL);
      expect(result).toEqual([]);
    });
  });
});
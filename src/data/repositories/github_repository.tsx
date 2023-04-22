import axios from "axios";
import { Repository } from "../interfaces";

export default class GithubRepository {
  constructor() {
    // no constructor
  }

  static async getPublicRepositories(username: string): Promise<Repository[]> {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const repositories = response.data as Repository[];
      return repositories;
    } catch (error) {
      throw error;
    }
  }
}

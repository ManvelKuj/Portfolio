import axios from 'axios';

export const WorksService = {
  async getAll() {

    const response = await axios.get('https://670e80b03e7151861654cd81.mockapi.io/PortfolioItems');

    return response.data;
  }
}

import axios from 'axios';

export const WorksService = {
  async getAll() {

    const response = await axios.get('https://660584302ca9478ea18086f1.mockapi.io/works');

    return response.data;
  }
}

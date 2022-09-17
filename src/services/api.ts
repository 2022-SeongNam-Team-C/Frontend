import axios from "axios";
type SendImageType = {
  data: any;
};
class API {
  url: string;

  constructor() {
    this.url = process.env.VUE_APP_API_URL
      ? process.env.VUE_APP_API_URL
      : "http://localhost:5123/api/v1";
  }

  async sendImage(data: SendImageType) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(data.data);
        const response = await axios.post(
          `${this.url}/images/transmission`,
          data.data
        );
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new API();

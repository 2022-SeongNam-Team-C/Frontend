import axios from "axios";
export type SendImageType = {
  data: any;
};

export type SignInType = {
  email: string;
  password: string;
};

export type SignUpType = {
  email: string;
  password: string;
  username: string;
};

class Api {
  url: string;

  constructor() {
    this.url = process.env.VUE_APP_API_URL
      ? process.env.VUE_APP_API_URL
      : "http://localhost:5123/api/v1";
  }

  async sendImage(data: SendImageType) {
    return new Promise(async (resolve, reject) => {
      try {
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
  async signIn(data: SignInType) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${this.url}/auth/signin`, data);

        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
  async signUp(data: SignUpType) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${this.url}/auth/signup`, data);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new Api();

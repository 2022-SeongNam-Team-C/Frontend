import axios from "axios";
export type SendImageType = {
  data: FormData;
};

export type SignInType = {
  email: string;
  password: string;
};

export type SignUpType = {
  email: string;
  password: string;
  name: string;
};

export type ChangeImageType = {
  data: FormData;
};

class Api {
  url: string;

  constructor() {
    this.url = process.env.VUE_APP_API_URL
      ? process.env.VUE_APP_API_URL
      : "http://localhost:5123/api/v1";
  }

  sendImage(data: SendImageType) {
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
  changeImage({ data }: ChangeImageType) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${this.url}/upload-image`, data);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
  signIn(data: SignInType) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(data);
        const response = await axios.post(`${this.url}/auth/signin`, data);

        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
  signUp(data: SignUpType) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${this.url}/auth/signup`, data);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
  logout() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(`${this.url}/auth/logout`);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new Api();

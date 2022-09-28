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

  refreshToken() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${this.url}/auth/refresh`, {
          headers: {
            authorization: "Bearer " + localStorage.getItem("refresh-token"),
          },
        });
        localStorage.setItem("access-token", response.data.access_token);
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }

  sendImage(data: SendImageType) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `${this.url}/images/transmission`,
          data.data,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access-token"),
            },
          }
        );
        resolve(response);
        console.log(response);
      } catch (e: any) {
        if (
          e.response.data.error == "This Token is expired." &&
          localStorage.getItem("refresh-token") != null
        ) {
          try {
            const data2: any = await this.refreshToken();
            localStorage.setItem("access-token", data2.data.access_token);
            console.log("adadad", data, data2.data);
            const res2 = await this.sendImage(data);
            resolve(res2);
          } catch (e) {
            localStorage.removeItem("access-token");
            localStorage.removeItem("refresh-token");
            localStorage.removeItem("name");
            window.location.href = "/";
          }
        } else {
          reject(e);
        }
      }
    });
  }
  sendImage2(data: SendImageType) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.post(
          `${this.url}/images/transmission`,
          data.data
        );
        resolve(response);
        console.log(response);
      } catch (e) {
        reject(e);
      }
    });
  }
  historyImage() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axios.get(`${this.url}/s3/history`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access-token"),
          },
        });
        console.log(response);
        resolve(response);
      } catch (e: any) {
        if (
          e.response.data.error == "This Token is expired." &&
          localStorage.getItem("refresh-token") != null
        ) {
          try {
            const res: any = await this.refreshToken();
            console.log(res);
            localStorage.setItem("access-token", res.data.access_token);
            const res2 = await this.historyImage();
            resolve(res2);
          } catch (e) {
            localStorage.removeItem("access-token");
            localStorage.removeItem("refresh-token");
            localStorage.removeItem("name");
            window.location.href = "/";

            reject(e);
          }
        } else {
          reject(e);
        }
      }
    });
  }
  uploadImage({ data }: ChangeImageType) {
    return new Promise(async (resolve, reject) => {
      try {
        let response;
        if (localStorage.getItem("access-token")) {
          response = await axios.post(
            `${this.url}/s3/result/upload-image-url`,
            data,
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("access-token"),
              },
            }
          );
        } else {
          response = await axios.post(
            `${this.url}/s3/result/upload-image-url`,
            data
          );
        }
        resolve(response);
      } catch (e: any) {
        if (
          e.response.data.error == "This Token is expired." &&
          localStorage.getItem("refresh-token") != null
        ) {
          try {
            const res: any = await this.refreshToken();
            console.log(res);
            localStorage.setItem("access-token", res.data.access_token);
            const res2 = await this.uploadImage({ data });
            resolve(res2);
          } catch (e) {
            localStorage.removeItem("access-token");
            localStorage.removeItem("refresh-token");
            localStorage.removeItem("name");
            window.location.href = "/";
          }
        } else {
          reject(e);
        }
      }
    });
  }
  signIn(data: SignInType) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(data);
        const response: any = await axios.post(`${this.url}/auth/signin`, data);
        console.log("response", response);
        // 성공시
        if ((response.statusText = "OK")) {
          localStorage.setItem("access-token", response.data.access_token);
          localStorage.setItem("refresh-token", response.data.refresh_token);
          localStorage.setItem("name", response.data.name);

          resolve(response);
        } else {
          reject(response);
        }
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

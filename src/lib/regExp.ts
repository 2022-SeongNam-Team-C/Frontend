export type returnType = {
  status: boolean;
  message: string;
};

class RegExp {
  private email =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  private password = /^.*(?=^.{6,24}$)(?=.*\d)(?=.*[a-zA-Z]).*$/; //비밀번호는 영문과 숫자를 포함하여 6~24자리
  private username = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/; //2~20자리

  public SignInRegEx(email: string, password: string): Promise<returnType> {
    return new Promise((resolve, reject) => {
      console.log(email, password);
      if (!this.email.test(email)) {
        resolve({ status: false, message: "올바른 이메일을 입력해주세요." });
      } else if (!this.password.test(password)) {
        resolve({
          status: false,
          message:
            "비밀번호는 영문과 숫자를 포함하여 6~24자리 내로 작성해주세요.",
        });
      } else {
        resolve({ status: true, message: "올바른 정규식 입니다." });
      }
    });
  }

  public SignUpRegEx(
    email: string,
    password: string,
    passwordCheck: string,
    username: string
  ): Promise<returnType> {
    return new Promise((resolve, reject) => {
      console.log(email, password);
      if (!this.email.test(email)) {
        resolve({ status: false, message: "올바른 이메일을 입력해주세요." });
      } else if (!this.password.test(password)) {
        resolve({
          status: false,
          message:
            "비밀번호는 영문과 숫자를 포함하여 6~24자리 내로 작성해주세요.",
        });
      } else if (!this.username.test(username)) {
        resolve({
          status: false,
          message: "이름은 2~20자리 내로 작성해주세요.",
        });
      } else if (password === passwordCheck) {
        resolve({
          status: false,
          message: "비밀번호가 일치하지 않습니다.",
        });
      } else {
        resolve({ status: true, message: "올바른 정규식 입니다." });
      }
    });
  }
}

export default new RegExp();

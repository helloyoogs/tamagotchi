type UserForm = {
  email?: string;
  password?: string;
  nickname?: string;
};

export function validateUser(form: UserForm) {
  const errors: Partial<UserForm> = {};

  if ("email" in form) {
    if (!form.email?.trim()) {
      errors.email = "이메일은 필수입니다.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errors.email = "유효한 이메일 형식이어야 합니다.";
    }
  }

  if ("password" in form) {
    if (!form.password?.trim()) {
      errors.password = "비밀번호는 필수입니다.";
    } else if (form.password.length < 8 || form.password.length > 20) {
      errors.password = "비밀번호는 8자 이상 20자 이하로 입력해주세요.";
    } else if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{8,}$/.test(form.password)
    ) {
      errors.password = "비밀번호는 영문자와 숫자를 포함해야 합니다.";
    }
  }

  if ("nickname" in form) {
    if (!form.nickname?.trim()) {
      errors.nickname = "닉네임은 필수입니다.";
    } else if (form.nickname.length < 2 || form.nickname.length > 10) {
      errors.nickname = "닉네임은 2~10자여야 합니다.";
    } else if (!/^[\p{L}\p{N}_]{2,10}$/u.test(form.nickname)) {
      errors.nickname = "닉네임은 문자, 숫자, 밑줄(_)만 사용 가능합니다.";
    }
  }

  return errors;
}

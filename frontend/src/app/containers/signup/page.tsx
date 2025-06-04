export default function SignUp() {
  return (
    <form aria-label="회원가입 폼">
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" name="id" required />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div>
        <label htmlFor="nickname">Nickname</label>
        <input type="text" id="nickname" name="nickname" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

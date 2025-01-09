export const RegistrationDesign = ({
  user,
  handleInputChange,
  handleOnSubmit,
}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="container">
        <div>
          <h1>Register </h1>
          <p>Kindly fill in this form to register.</p>
        </div>

        {/* label and input for  firstName  */}
        <label htmlFor="firstName">
          <b>First Name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter first name."
          name="firstName"
          autoComplete="off"
          required
          value={user.firstName}
          onChange={handleInputChange}
        />

        {/* label and input for lastName  */}
        <label htmlFor="lastName">
          <b>Last Name: </b>
        </label>
        <input
          type="text"
          placeholder="Enter first name."
          name="lastName"
          autoComplete="off"
          required
          value={user.lastName}
          onChange={handleInputChange}
        />
        {/* label and input for Email  */}
        <label htmlFor="email">
          <b>Email: </b>
        </label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          autoComplete="off"
          required
          value={user.email}
          onChange={handleInputChange}
        />
        {/* label and input for Password  */}
        <label htmlFor="password">
          <b>password: </b>
        </label>
        <input
          type="password"
          name="password"
          autoComplete="off"
          required
          value={user.password}
          onChange={handleInputChange}
        />

        {/* label and input for Repeat Password  */}
        <label htmlFor="passwordRepeat">
          <b>Repeat Password: </b>
        </label>
        <input
          type="password"
          name="passwordRepeat"
          autoComplete="off"
          required
          value={user.passwordRepeat}
          onChange={handleInputChange}
        />

        {/* Submit the form  */}
        <button type="submit">Register</button>

        {/* if already have login  */}
        <div>
          <p>
            Already have an account? <a href="#">Log in</a>.
          </p>
        </div>
      </div>
    </form>
  );
};

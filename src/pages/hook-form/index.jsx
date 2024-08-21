import { useForm } from "react-hook-form";

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  function onSubmitForm(formData) {
    console.log(formData);
    reset();
  }
  return (
    <div>
      <h2>React Hook Form Example Page</h2>
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        style={{ color: "black", fontWeight: "bolder" }}
      >
        <div style={{ padding: "12px" }}>
          <label>Email</label>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            name="email"
          />
          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder" }}>
              Email is required !
            </p>
          ) : null}
        </div>
        <div style={{ padding: "12px" }}>
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            type="password"
            name="password"
          />
          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bolder" }}>
              Password is required !
            </p>
          ) : null}
          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red", fontWeight: "bolder" }}>
              Password must be at least 6 character !
            </p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

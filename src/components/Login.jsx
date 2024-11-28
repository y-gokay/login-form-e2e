import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

const initialForm = {
  email: "",
  password: "",
  terms: false,
};

const errorMessages = {
  email: "Please enter a valid email address",
  password: "Password must be at least 4 characters long",
};

export default function Login() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const isValidEmail = validateEmail(form.email);
    const isValidPassword = validateStrongPassword(form.password);
    const isFormValid = isValidEmail && isValidPassword && form.terms;
    setIsValid(isFormValid);
  }, [form]);

  const handleChange = (event) => {
    let { name, value, type } = event.target;
    value = type === "checkbox" ? event.target.checked : value;

    setForm({ ...form, [name]: value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : errorMessages.email,
      });
    }
    if (name === "password") {
      setErrors({
        ...errors,
        password: value.length >= 4 ? "" : errorMessages.password,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid) {
      axios
        .get("https://6540a96145bedb25bfc247b4.mockapi.io/api/login")
        .then((res) => {
          const user = res.data.find(
            (item) =>
              item.password === form.password && item.email === form.email
          );
          if (user) {
            setForm(initialForm);
            history.push("/success");
          } else {
            history.push("/error");
          }
        });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(email);
  };

  const validateStrongPassword = (password) => {
    return password.length >= 4;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Enter your email"
          type="email"
          onChange={handleChange}
          value={form.email}
          invalid={!!errors.email}
          data-cy="email-input"
        />
        {errors.email && <FormFeedback>{errors.email}</FormFeedback>}
      </FormGroup>

      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={handleChange}
          value={form.password}
          invalid={!!errors.password}
          data-cy="password-input"
        />
        {errors.password && <FormFeedback>{errors.password}</FormFeedback>}
      </FormGroup>

      <FormGroup check>
        <Input
          id="terms"
          name="terms"
          checked={form.terms}
          type="checkbox"
          onChange={handleChange}
          data-cy="checkbox-input"
        />
        <Label htmlFor="terms" check>
          I agree to terms of service and privacy policy
        </Label>
      </FormGroup>

      <FormGroup className="text-center p-4">
        <Button data-cy="submit-input" disabled={!isValid}>
          Sign In
        </Button>
      </FormGroup>
    </Form>
  );
}

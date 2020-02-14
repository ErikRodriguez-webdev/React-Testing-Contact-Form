import React from "react";
import ContactForm from "./ContactForm";
import { render, fireEvent } from "@testing-library/react";

test("render all inputs for contact form", () => {
  //Arrange
  const { getByText } = render(<ContactForm />);
  //Act
  const aFirst = getByText(/firstName/i);
  const aLast = getByText(/lastName/i);
  const aEmail = getByText(/email/i);
  const aMessage = getByText(/message/i);
  //Assert
  expect(aFirst).toBeInTheDocument();
  expect(aLast).toBeInTheDocument();
  expect(aEmail).toBeInTheDocument();
  expect(aMessage).toBeInTheDocument();
});

test("submit a form test", () => {
  //Arrange
  const { getByText } = render(<ContactForm />);

  //Act
  //Find the inputs
  const theFirst = getByText(/firstName/i);
  const theLast = getByText(/lastName/i);
  const theEmail = getByText(/email/i);
  const theMessage = getByText(/message/i);

  //Fill inputs with dummy data
  fireEvent.change(theFirst, { target: { value: "Amy" } });
  fireEvent.change(theLast, { target: { value: "Sol" } });
  fireEvent.change(theEmail, { target: { value: "test@email.com" } });
  fireEvent.change(theMessage, {
    target: { value: "Type some stuff in here." }
  });

  //submit
  fireEvent.click(getByText(/submit/i));
  //Assert
  expect().toBeInTheDocument();
});

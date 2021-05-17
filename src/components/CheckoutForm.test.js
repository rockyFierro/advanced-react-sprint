import React from "react";
import { render , screen} from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm/>)

  const heading = screen.getByRole('heading', { name: /checkout form/i});

  expect(heading).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm/>);

  const firstName = screen.getByLabelText(/first name/i );
  userEvent.type(firstName, 'Rocky');

  const lastName = screen.getByLabelText( /last name/i );
  userEvent.type(lastName, 'Marciano');

  const address = screen.getByLabelText( /address/i );
  userEvent.type(address, '216 No. Pearl Street');

  const city = screen.getByLabelText(/city/i );
  userEvent.type(city, 'Boston');

  const zip = screen.getByLabelText(/zip/i );
  userEvent.type(zip, '02301');

  const button = screen.getByRole('button', { name: /checkout/i });

  
  userEvent.click(button);

  
  const success = screen.getByTestId('successMessage');
  await ( () => expect(success).toBeInTheDocument());
});

import { fireEvent, render, screen } from '@testing-library/react';
import Reservations from './components/Reservations';

test('Renders the BookingForm heading', () => {
    render(<Reservations />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('Reservation times are initialized', ()=> {
  render(<Reservations/>);
  const timesElement = screen.getByLabelText("Choose time");

  expect(timesElement).toBeInTheDocument();
  expect(timesElement.length).toBe(5);
  expect(timesElement[0].value).toBe("");
  expect(timesElement[1].value).toBe("17:00");
  expect(timesElement[2].value).toBe("18:00");
  expect(timesElement[3].value).toBe("19:00");
  expect(timesElement[4].value).toBe("20:00");
});

test('Reservation times are updated', ()=> {
  render(<Reservations/>);
  const dateElement = screen.getByLabelText("Choose date");
  const timesElement = screen.getByLabelText("Choose time");
  fireEvent.change(dateElement, {target: {value: '2024-02-01'}})

  expect(dateElement).toBeInTheDocument();
  expect(timesElement).toBeInTheDocument();
  expect(timesElement.length).toBe(4);
  expect(timesElement[0].value).toBe("");
  expect(timesElement[1].value).toBe("18:00");
  expect(timesElement[2].value).toBe("19:00");
  expect(timesElement[3].value).toBe("20:00");
});
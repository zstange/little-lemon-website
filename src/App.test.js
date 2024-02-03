import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Reservations from './components/Reservations';
import BookingDetails from './components/BookingDetails';
import { BrowserRouter } from 'react-router-dom';

describe("Reservations page", () => {

  test('Renders the BookingForm heading', () => {
    render(
      <BrowserRouter>
        <BookingDetails availTimes={["17:00", "18:00"]} dispatch={jest.fn} submit={jest.fn} />
      </BrowserRouter>
    );
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
  });

  test('Reservation times are initialized', () => {
    render(
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>);
    const timesElement = screen.getByLabelText("Choose time*");

    expect(timesElement).toBeInTheDocument();
    expect(timesElement.length).toBeGreaterThan(1);
  });

  test('Reservation times are updated', () => {
    render(
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>);
    const dateElement = screen.getByLabelText("Choose date*");
    const timesElement = screen.getByLabelText("Choose time*");
    fireEvent.change(dateElement, { target: { value: '2024-02-04' } })

    expect(dateElement).toBeInTheDocument();
    expect(timesElement).toBeInTheDocument();
    expect(timesElement.length).toBe(6);
    expect(timesElement[0].value).toBe("");
    expect(timesElement[1].value).toBe("17:00");
    expect(timesElement[2].value).toBe("17:30");
    expect(timesElement[3].value).toBe("19:30");
    expect(timesElement[4].value).toBe("21:00");
    expect(timesElement[5].value).toBe("21:30");
  });

  test('Date has correct attributes', () => {
    render(
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>);
    const dateElement = screen.getByLabelText("Choose date*");

    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveAttribute("type", "date");
  });

  test('Time has correct attributes', () => {
    render(
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>);
    const timeElement = screen.getByLabelText("Choose time*");

    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveDisplayValue("");
  });

  test('Guests has correct attributes', () => {
    render(
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>);
    const guestsElement = screen.getByLabelText("Number of guests*");

    expect(guestsElement).toBeInTheDocument();
    expect(guestsElement).toHaveAttribute("type", "number");
    expect(guestsElement).toHaveAttribute("min", "1");
    expect(guestsElement).toHaveValue(4);
  });

  test('Occasion has correct attributes', () => {
    render(
      <BrowserRouter>
        <Reservations />
      </BrowserRouter>);
    const occasionElement = screen.getByLabelText("Choose time*");

    expect(occasionElement).toBeInTheDocument();
    expect(occasionElement).toHaveDisplayValue("");
  });

  test('Form does not submit with invalid values', async () => {
    const onSubmit = jest.fn();
    render(
      <BrowserRouter>
        <BookingDetails availTimes={["17:00", "18:00"]} dispatch={jest.fn} submit={onSubmit} />
      </BrowserRouter>);
    const submitButton = screen.getByRole("button");

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).not.toHaveBeenCalled();
    })
  });

  test('Form is submitted with valid values', async () => {
    const onSubmit = jest.fn();
    render(
      <BrowserRouter>
        <BookingDetails availTimes={["17:00", "18:00"]} dispatch={jest.fn} submit={onSubmit} />
      </BrowserRouter>
    );

    const submitButton = screen.getByRole("button");
    const timeElement = screen.getByLabelText("Choose time*");
    const guestsElement = screen.getByLabelText("Number of guests*");

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");

    fireEvent.change(timeElement, { target: { value: "17:00" } });
    fireEvent.change(guestsElement, { target: { value: 2 } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalled();
    })

  });
});
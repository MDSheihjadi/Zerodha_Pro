//to  test the hero component
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/HeroSection";

describe("Hero Component", () => {
  test("renders Hero component with correct content", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/images/homeHero.png");
    const heading = screen.getByText(/Invest in Everything/i);
    const description = screen.getByText(/Online platform to invest/i);
    const signupButton = screen.getByRole("button", { name: /Signup Now/i });
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "/images/homeHero.png");
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();

    
  });
});

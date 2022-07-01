// Write your tests here
import React from 'react';
import {render, screen} from '@testing-library/react'
import AppClass from './AppClass'


test('sanity', () => {
  expect(true).toBe(true)
})

test("Renders without errors", () =>{
  render(<AppClass/>)
})

// test("Welcome to the GRID exist on screen", () => {
//   render(<AppClass/>);

//   const h1 = screen.getByText("Welcome to the GRID")

//   expect (h1).toBeInTheDocument();
// })
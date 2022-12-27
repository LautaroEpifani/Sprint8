import {fireEvent, render, screen } from '@testing-library/react/pure'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'



test('renders success state and nav texts', () => {
        render(<BrowserRouter><NavBar/></BrowserRouter>)

        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/starships/i)).toBeInTheDocument();
        expect(screen.getByText(/video/i)).toBeInTheDocument();
        expect(screen.getByText(/films/i)).toBeInTheDocument();
        expect(screen.getByText(/series/i)).toBeInTheDocument();
        expect(screen.getByText(/interactive/i)).toBeInTheDocument();
        expect(screen.getByText(/community/i)).toBeInTheDocument();
        expect(screen.getByText(/databank/i)).toBeInTheDocument();
})


test('after clicking open menu', () => {

        render(<BrowserRouter><NavBar/></BrowserRouter>)
        const button = screen.getAllByRole('button' ,{ name: /menu/i});

        fireEvent.click(button[1])
        expect(button[1]).toBeVisible();
        
        
     
})

test('after clicking close menu', () => {

        render(<BrowserRouter><NavBar/></BrowserRouter>)
        const button = screen.getAllByRole('button' ,{ name: /menu/i});

        fireEvent.click(button[0])
        expect(button[0]).toBeVisible();
        
     
})

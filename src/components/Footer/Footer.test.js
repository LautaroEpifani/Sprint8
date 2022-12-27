import { render, screen } from '@testing-library/react/pure'
import Footer from './Footer'




test('renders success state and footer texts', () => {
        render(<Footer/>)

        expect(screen.getByText(/More from Star Wars/i)).toBeInTheDocument();
        expect(screen.getByText(/TM & © Lucasfilm Ltd. All Rights Reserved/i)).toBeInTheDocument();
      
})



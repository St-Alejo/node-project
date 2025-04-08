import { render, screen, waitFor } from '@testing-library/react';
import FichaPersonal from './FichaPersonal';

// 🧪 Mock de respuesta básico y profesional
beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () =>
                Promise.resolve({
                    results: [
                        {
                            name: { title: 'Ms', first: 'Ana', last: 'Gómez' },
                            gender: 'female',
                            dob: { age: 28, date: '1996-05-10T00:00:00Z' },
                            email: 'ana.gomez@example.com',
                            phone: '555-1234',
                            cell: '555-5678',
                            location: {
                                country: 'Colombia',
                                state: 'Antioquia',
                                city: 'Medellín',
                                street: { name: 'Carrera 50', number: 123 },
                                postcode: '050001',
                                timezone: { offset: '-5:00', description: 'Bogotá Time' }
                            },
                            picture: { large: 'https://randomuser.me/api/portraits/women/10.jpg' },
                            nat: 'CO',
                            login: { username: 'anagomez' },
                            registered: { date: '2015-03-25T00:00:00Z' }
                        }
                    ]
                })
        })
    );
});

afterEach(() => {
    jest.resetAllMocks();
});

describe('FichaPersonal', () => {
    it('muestra el texto "Cargando" al inicio', () => {
        render(<FichaPersonal />);
        expect(screen.getByText(/cargando/i)).toBeInTheDocument();
    });

    it('renderiza los datos de una persona después de cargar', async () => {
        render(<FichaPersonal />);

        await waitFor(() => {
            expect(screen.queryByText(/cargando/i)).not.toBeInTheDocument();
        });

        expect(screen.getByText(/Ficha Personal/i)).toBeInTheDocument();
        expect(screen.getByText(/Ana Gómez/)).toBeInTheDocument();
        expect(screen.getByText(/28 años/)).toBeInTheDocument();
        expect(screen.getByText(/ana.gomez@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/Medellín/)).toBeInTheDocument();
        expect(screen.getByText(/Colombia/)).toBeInTheDocument();
    });
});

import { render, screen } from '@testing-library/react';
import ContadorResultados from './ContadorResultados';

describe('ContadorResultados', () => {
    it('muestra correctamente las cantidades de personas', () => {
        render(<ContadorResultados axiosCount={5} fetchCount={7} />);

        expect(screen.getByText(/Personas por Axios: 5/)).toBeInTheDocument();
        expect(screen.getByText(/Personas por Fetch: 7/)).toBeInTheDocument();
        expect(screen.getByText(/Total de Personas: 12/)).toBeInTheDocument();
    });
});

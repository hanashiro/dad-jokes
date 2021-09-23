import { render, fireEvent, screen } from '@testing-library/react';

import Pagination from './Pagination';

test('shows a Pagination', () => {
    render(<Pagination count={10} page={5} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
});

test('should disable Previous Button', () => {
    render(<Pagination count={10} page={1} />);
    expect(screen.getByText('Previous')).toBeDisabled();
});

test('should disable Next Button', () => {
    render(<Pagination count={10} page={10} />);
    expect(screen.getByText('Next')).toBeDisabled();
});

test('should call pagination update', () => {
    const onPageChange = jest.fn();
    render(<Pagination count={10} page={10} onPageChange={onPageChange} />);

    expect(onPageChange).not.toHaveBeenCalled();
    fireEvent.click(screen.getByText('Next'));
    expect(onPageChange).not.toHaveBeenCalled();

    fireEvent.click(screen.getByText('Previous'));
    expect(onPageChange).toHaveBeenCalledWith(9);

    fireEvent.click(screen.getByText('8'));
    expect(onPageChange).toHaveBeenCalledWith(8);
});

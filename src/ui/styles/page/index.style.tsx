import { Container, List } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const ContentContainer = styled(Container)`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing(5)};
    &.MuiContainer-root {
        max-width: 40em;
    }
`;

export const JokeList = styled(List)`
    margin: 0 auto;
    .MuiListItem-root {
        color: ${({ theme }) => theme.palette.text.secondary};
        &:nth-of-type(even) {
            background-color: ${({ theme }) =>
                alpha(theme.palette.common.black, 0.1)};
        }
        &:hover {
            background-color: ${({ theme }) =>
                alpha(theme.palette.common.black, 0.05)};
        }
    }
`;

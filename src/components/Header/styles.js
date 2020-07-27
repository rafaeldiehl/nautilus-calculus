import styled from 'styled-components';

const Nav = styled.nav`
    background-color: #2a5ee8;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 15.6px;
    font-weight: 700;
    height: 80px;
    grid-area: "NA";

    ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        li a {
            margin: 0 15px;
            padding-bottom: 0;

            &:hover {
                border-bottom: 1.3px solid white;
            }
        }
    }

    svg {
        display: none;
    }

    @media (max-width: 720px) {
        justify-content: space-between;
        padding: 0 45px;

        ul {
            display: none;
        }

        svg { 
            display: block; 
        }
    }
`;

export default Nav;

import styled from 'styled-components';

const Backdrop = styled.div`
  /* position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); */
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const ModalDiv = styled.div`
  width: 100%;
  max-width: 450px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px;
  background-color: greenyellow;
  transform: translateX(-50%) translateY(-50%) translateZ(0);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;

const ImageStyle = styled.img`
  display: block;
  margin: 0 auto;
`;

export { Backdrop, ModalDiv, ImageStyle };

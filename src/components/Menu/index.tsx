import React, { useState } from 'react';

import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

import { Container } from './styles';

const Menu: React.FC = () => {
  const [shrink, setShrink] = useState<boolean>(false);

  return <Container shrink={shrink}>
      <div className='button-menu-control'>
        {
            shrink ? <MdMenu className='hover' size={30} color="rgba(20, 20, 255, .7)" onClick={() => setShrink(state => !state)} /> : 
                <BsFillArrowLeftSquareFill className='hover' size={30} color="rgba(20, 20, 255, .7)" onClick={() => setShrink(state => !state)} />
        }
      </div>
  </Container>;
}

export default Menu;
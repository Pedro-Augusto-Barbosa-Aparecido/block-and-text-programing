import React, { useState } from 'react';

import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { VscNewFile, VscNewFolder } from "react-icons/vsc";

import { Container } from './styles';

export type MenuProps = {
  fileAndFolders?: Array<string> // mudar para tipo de folder e arquivo

};

const Menu: React.FC<MenuProps> = ({ fileAndFolders = [] }) => {
  const [shrink, setShrink] = useState<boolean>(true);

  return <Container shrink={shrink}>
      <div className='button-menu-control'>
        {
            shrink ? <MdMenu className='hover' size={30} color="rgba(20, 20, 255, .7)" onClick={() => setShrink(state => !state)} /> : 
                <BsFillArrowLeftSquareFill className='hover' size={30} color="rgba(20, 20, 255, .7)" onClick={() => setShrink(state => !state)} />
        }
        <div className='button-file-control'>
          <div>
            <VscNewFile className='hover' size={20} />
            <p>New File</p>
          </div>
          <div>
            <VscNewFolder className='hover' size={20} />
            <p>New Folder</p>
          </div>
        </div>
      </div>
      <ul>
        {
          fileAndFolders.length === 0 ? <p>No File or Project selected</p> : fileAndFolders.map((item, key) => <p key={key}>{item}</p>)
        }
      </ul>
  </Container>;
}

export default Menu;
import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddBox, MdOutlineListAlt, MdContactSupport } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";

import { Container } from './styles';

import styles from "./styles.module.css";

const Header: React.FC = () => {
  return <Container>
      <h1 className='button'>
          <Link to={"/"}>Block Programing</Link>
      </h1>

      <div className={styles.buttonContainer}>
          <div className='button'>
            <Link to={"#"}>
              <MdAddBox size={20} />
              <p>New Project</p>
            </Link>
          </div>
          <div className='button'>
            <Link to={"#"}>
              <MdOutlineListAlt size={20} />
              <p>New Project</p>
            </Link>
          </div>
          <div className="button">
            <Link to={"#"}>
              <MdContactSupport size={20} />
              <p>Contact Us</p>
            </Link>
          </div>
          <div className="button">
            <Link to={"#"}>
              <IoDocumentText size={20} />
              <p>Documentation</p>
            </Link>
          </div>
      </div>
  </Container>;

}

export default Header;
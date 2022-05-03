import React from "react";
import { AiOutlineFile } from "react-icons/ai";

import { CodeContainer } from "./styles";

export const TextEditorBlock: React.FC = () => {
    return <CodeContainer>
        <ul>
          <li className='active'>
            <AiOutlineFile size={20} />
            <p>New File</p>
          </li>
          <li>
            <i className="bi bi-filetype-tsx"></i>
            <p>ExampleUI.tsx</p>
          </li>
        </ul>
        <textarea>

        </textarea>
    </CodeContainer>;

}

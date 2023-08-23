import { useContext } from 'react';
import FilesContext from '../contexts/FilesContext';

function Preview() {
    const { datas } = useContext(FilesContext);

    return <div></div>;
}

export default Preview;

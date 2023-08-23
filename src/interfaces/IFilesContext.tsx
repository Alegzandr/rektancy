import { ChangeEvent } from 'react';

interface IFilesContext {
    files: File[];
    error: string | null;
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
    datas: any[];
    handleFileRemove: (index: number) => void;
}

export default IFilesContext;

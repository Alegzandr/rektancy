import { ChangeEvent, ReactNode, createContext, useState } from 'react';
import IFilesContext from '../interfaces/IFilesContext';

const defaultValues = {
    files: [],
    error: null,
    handleFileChange: () => {},
    datas: [],
    handleFileRemove: () => {},
    handleFileColorChange: () => {},
};

const FilesContext = createContext<IFilesContext>(defaultValues);

export const FilesProvider = ({ children }: { children: ReactNode }) => {
    const [files, setFiles] = useState<File[]>([]);
    const [error, setError] = useState<string | null>(defaultValues.error);
    const [datas, setDatas] = useState<any[]>(defaultValues.datas);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const inputFiles = Array.from(event.target.files);

            const nonJSONFiles = inputFiles.some(
                (file) => file.type !== 'application/json'
            );
            if (nonJSONFiles) {
                setError('Seuls les fichiers JSON sont acceptés');
                return;
            }

            setFiles((previousFiles) => [...previousFiles, ...inputFiles]);

            for (const file of inputFiles) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const fileData = event.target?.result;
                    if (fileData) {
                        const jsonData = JSON.parse(
                            fileData.toString()
                        ) as any[];
                        setDatas((previousDatas) => [
                            ...previousDatas,
                            {
                                name: file.name,
                                color: '#f6b73c',
                                data: jsonData,
                            },
                        ]);
                    }
                };
                reader.readAsText(file);
            }
        }
    };

    const handleFileRemove = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);

        const newDatas = [...datas];
        newDatas.splice(index, 1);
        setDatas(newDatas);
    };

    const handleFileColorChange = (index: number, color: string) => {
        const newDatas = [...datas];
        newDatas[index].color = color;
        setDatas(newDatas);
    };

    return (
        <FilesContext.Provider
            value={{
                files,
                error,
                handleFileChange,
                datas,
                handleFileRemove,
                handleFileColorChange,
            }}
        >
            {children}
        </FilesContext.Provider>
    );
};

export default FilesContext;

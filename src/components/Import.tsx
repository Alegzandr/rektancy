import { useContext } from 'react';
import FilesContext from '../contexts/FilesContext';

function Import() {
    const {
        files,
        error,
        handleFileChange,
        handleFileRemove,
        handleFileColorChange,
        datas,
    } = useContext(FilesContext);

    return (
        <>
            <form>
                <h3>Importer un fichier JSON</h3>
                <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".json"
                    multiple
                />

                {error && <p className="text-red-500">{error}</p>}
            </form>

            {files.length > 0 && (
                <div>
                    <h4>Fichiers importés</h4>

                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>
                                {file.name}{' '}
                                <button onClick={() => handleFileRemove(index)}>
                                    Remove
                                </button>
                                <input
                                    type="color"
                                    value={datas?.[index]?.color}
                                    onChange={(event) =>
                                        handleFileColorChange(
                                            index,
                                            event.target.value
                                        )
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Import;

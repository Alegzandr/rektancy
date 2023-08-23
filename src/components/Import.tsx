import { useContext } from 'react';
import FilesContext from '../contexts/FilesContext';

function Import() {
    const { files, error, handleFileChange, handleFileRemove } =
        useContext(FilesContext);

    return (
        <>
            <form>
                <h3>Importer un fichier CSV</h3>
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
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}

export default Import;

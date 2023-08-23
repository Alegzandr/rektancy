import Import from './components/Import';
import Preview from './components/Preview';
import Export from './components/Export';

function App() {
    return (
        <div className="flex flex-col w-screen min-h-screen md:flex-row md:flex-wrap">
            <aside className="w-full h-48 md:h-[calc(100vh-4rem)] md:w-80">
                <Import />
            </aside>

            <main className="w-full h-[calc(100vh-16rem)] md:h-[calc(100vh-4rem)] md:w-[calc(100vw-20rem)]">
                <Preview />
            </main>

            <footer className="w-full h-16">
                <Export />
            </footer>
        </div>
    );
}

export default App;

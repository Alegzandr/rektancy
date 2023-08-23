import Form from './components/Form';

function App() {
    return (
        <div className="flex flex-col w-screen min-h-screen md:flex-row md:flex-wrap">
            <aside className="w-full h-48 md:h-[calc(100vh-4rem)] md:w-56">
                <Form />
            </aside>

            <main className="w-full h-[calc(100vh-16rem)] md:h-[calc(100vh-4rem)] md:w-[calc(100vw-14rem)]"></main>

            <footer className="w-full h-16"></footer>
        </div>
    );
}

export default App;

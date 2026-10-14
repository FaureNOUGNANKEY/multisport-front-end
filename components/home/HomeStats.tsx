export default function HomeStats() {
    return(
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[260px]" >
        <div className="bg-white text-center justify-center items-center flex flex-col h-50 py-3 my-9 text-black mx-9 rounded-lg text-xl hover:translate-y-2 hover:shadow-lg hover:transition-all duration-1000">
            <h1>3</h1>
            <h4>Fédérations accompagnées</h4>
        </div>
        <div className="bg-white text-center justify-center items-center flex flex-col h-50 py-3 my-9 text-black mx-9 rounded-lg text-xl hover:translate-y-2 hover:shadow-lg hover:transition-all duration-1000">
            <h1>6</h1>
            <h4>Ligues accompagnées</h4>
        </div>
        <div className="bg-white text-center justify-center items-center flex flex-col h-50 py-3 my-9 text-black mx-9 rounded-lg text-xl hover:translate-y-2 hover:shadow-lg hover:transition-all duration-1000">
            <h1>15</h1>
            <h4>Clubs accompagnés</h4>
        </div>
        <div className="bg-white text-center justify-center items-center flex flex-col h-50 py-3 my-9 text-black mx-9 rounded-lg text-xl hover:translate-y-2 hover:shadow-lg hover:transition-all duration-1000">
            <h1>40+</h1>
            <h4>Athlètes accompagnés</h4>
        </div>
    </div>)
}
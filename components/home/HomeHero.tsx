export default function HomeHero() {
    return (
        <div className="bg-blue-500 justify-center items-center flex flex-col h-[350px] py-[60px] ">
            <div className="size-165 mb-2">
                 <h1 className="text-white text-5xl font-serif ">Tout le taekwondo togolais, au même endroit</h1>
            </div>
            <div className="size-165">
                  <h5 className="text-white ">Fédérations, ligues, clubs et athlètes gèrent adhésions, activités, paiements et boutique sur une seule plateforme.</h5>
            </div>
          
            <div className="flex gap-4 mt-4  size-165 ">
                <button className="text-black bg-orange-500  h-9 hover:translate-y-1 py-1 px-1 rounded-lg animate-pulse">Créer un compte</button>
                <button className="text-blue-500 bg-white h-9 hover:translate-y-1 py-1 px-1 rounded-lg">Explorer la démo</button>
            </div>
        </div>
    )
}
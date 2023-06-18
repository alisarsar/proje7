import kisiArray from "./kisiVeri.js"

const Kisiler = ()=> {

    

    return (
        <>
            <h2>KİŞİ LİSTESİ</h2>
            <section>
                {
                    kisiArray.map( 
                        (eleman) => 
                                <div>
                                    <img src={eleman.fotoUrl} alt={eleman.adSoyad} />
                                    <h3>{eleman.adSoyad}</h3>
                                </div>                        
                     )
                    
                }
            </section>
        </>
    )
}

export default Kisiler
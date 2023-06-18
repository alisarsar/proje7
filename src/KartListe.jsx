import "./KartListe.css"

function KartListe(props) {

    return (
        <section className="kart-liste">
            <h2>{props.listeBaslik}</h2>
            <div className="kartlar">
                <div>
                    <img src={props.urunArray[0].gorselUrl} alt={props.urunArray[0].gorselAlt} />
                    <h3>{props.urunArray[0].urunAd}</h3>
                    <span>{props.urunArray[0].fiyat}TL</span>
                </div>
                <div>
                <img src={props.urunArray[1].gorselUrl} alt={props.urunArray[1].gorselAlt} />
                    <h3>{props.urunArray[1].urunAd}</h3>
                    <span>{props.urunArray[1].fiyat}TL</span>
                </div>
                <div>
                    <img src={props.urunArray[2].gorselUrl} alt={props.urunArray[2].gorselAlt} />
                    <h3>{props.urunArray[2].urunAd}</h3>
                    <span>{props.urunArray[2].fiyat}TL</span>
                </div>
                <div>
                    <img src={props.urunArray[3].gorselUrl} alt={props.urunArray[3].gorselAlt} />
                    <h3>{props.urunArray[3].urunAd}</h3>
                    <span>{props.urunArray[3].fiyat}TL</span>
                </div>
            </div>
        </section>
    )
}

export default KartListe
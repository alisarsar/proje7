import React from "react"

function Bilesen1(ozellikler) {

    React.useEffect( function() { console.log("Useeffect çalıştı")  } , [ozellikler.renk] )

    console.log("Bileşen1 render olmak üzere..")

    return (
        <p style={{fontSize: "30px" ,backgroundColor: ozellikler.renk, color: ozellikler.yaziRenk}}>Örnek bir bileşen!</p>
    )
}

export default Bilesen1
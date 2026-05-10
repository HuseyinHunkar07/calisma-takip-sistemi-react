import React, {use, useState} from 'react';
import DersFormu from '../Components/DersFormu';
import { DersSema } from '../Interfaces/Ders';

//HAFIZA TANIMI
const Anasayfa = () => {
    const[dersler, setDersler] = useState([{id: 1, ad: "Matematik", sure: 20, hedef: 60}]);
    const[inputAd, setInputAd] = useState("");
    const[inputSure, setInputSure] = useState("");
    const[inputHedef, setInputHedef] = useState("");

//EKLE FONKSIYONU
    const ekle = () => {
        if(!inputAd || !inputSure || !inputHedef) {
            alert("Lütfen tüm alanları doldurun");
            return;}
        setDersler([...dersler, {id: Date.now(), ad: inputAd, sure: inputSure, hedef: inputHedef}]);
        setInputAd('');
        setInputSure('');
        setInputHedef('');  
    };

//SİL FONKSIYONU
    const sil = (id) => {
        setDersler(dersler.filter(d => d.id !== id));
    }; 

//GUNCELLE FONKSIYONU
    const guncelle = (id) => {
        setDersler(dersler.map(e => e.id === id ? {...e, sure: Number(e.sure) + 10} : e));
    };

//ANASAYFA
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-7'>
                    <h2 className='text-center text-primary mb-4'>Çalışma Takip Sistemi</h2>
                    <DersFormu
                        inputAd = {inputAd} setInputAd={setInputAd}
                        inputSure={inputSure} setInputSure={setInputSure}
                        inputHedef={inputHedef} setInputHedef={setInputHedef}
                        ekle={ekle}/>
                    <div className='list-group shadow-lg border-0'>
                        {dersler.length === 0 ? (
                            <div className='text-centered p-5 bg-white rounded shadow-sm'>
                                <i className='bi bi-emoji-smile text-secondary' style={{fontSize: "3rem"}}></i>
                                <p className='text-muted mt-2'>Henüz ders eklemedin. Haydi çalışmaya başla</p>
                            </div>
                        ) : (
                            dersler.map(ders => {
                            
                            const yuzde = Math.round((ders.sure / ders.hedef) * 100);

                            return(
                               //Her bir ders bloğu
                                <div key={ders.id} className='list-group-item list-group-item-action border-start border-primary border-4 mb-2 shadow-sm rounded p-3'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='flew-grow-1'>
                                            <h5 className='mb-1 fw-bold text-dark text-capitalize'>{ders.ad}</h5>
                                            {/*Progress bar*/}
                                            <div className='progress mb-3' style={{height: "15px", width: "500px", backgroundColor: "#aaaaaa"}}>
                                                <div 
                                                    className={"progress-bar progress-bar-striped progress-bar-animated ${yuzde >= 100 ? 'bg-success' : 'bg-primary'}"}
                                                    role='progressbar'
                                                    style={{width: `${Math.min(yuzde, 100)}%`, backgroundColor: "#0d6efd", transition: "width 0.5s ease"}}//Süre arttıkça bar dolar %100'e kadar
                                                ></div>
                                            </div>
                                            <small className='text-muted d-block mt-1'>
                                                <i className='bi bi-clock-history me-1'>{ders.sure} dakika çalışıldı</i> 
                                            </small>
                                        </div>       

                                        {/*Butonlar*/}
                                        <div className='btn-group'>
                                            <button onClick={() => guncelle(ders.id)} className='btn btn-outline-primary btn-sm px-3'>
                                                <i className='bi bi-plus-circle me-1'>+10</i> 
                                            </button>
                                            <button onClick={() => sil(ders.id)} className='btn btn-outline-danger btn-sm px-3'>
                                                <i className='bi bi-trash3'></i>
                                            </button>
                                        </div>  
                                    </div>
                                </div>
                            );
                        }))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anasayfa;
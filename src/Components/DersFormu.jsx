import React from 'react';

const DersFormu = ({inputAd, setInputAd, inputSure, setInputSure, inputHedef, setInputHedef, ekle}) => {
    return (
        <div className="card p-4 shadow-sm mb-4 bg-light">
            <h5 className="mb-3 text-seconday">Yeni Çalışma Ekle</h5>
            <input 
                type = "text"
                className='form-control mb-2'
                placeholder='Ders adı girin'
                value={inputAd}
                onChange={e => setInputAd(e.target.value)}/>
            <input
                type='number'
                className='form-control mb-3'
                placeholder='Süre (dk)'
                value={inputSure}
                onChange={e => setInputSure(e.target.value)}/>
            <input
                type='number'
                className='form-control mb-3'
                placeholder='Hedef süre (dk)'
                value={inputHedef}
                onChange={e => setInputHedef(e.target.value)}/>
            <button onClick={ekle} className='btn btn-success w-100 fw-bold'>Listeye Ekle</button>
        </div>
    );
};

export default DersFormu;
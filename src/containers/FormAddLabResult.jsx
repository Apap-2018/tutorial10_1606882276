import React from 'react';

export const FormAddLabResult = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <h2>Lab Result</h2>
            <div className="form-group">
                <label>Jenis<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="jenis" />
            </div>
            <div className="form-group">
                <label>Hasil<span style={{ color: 'red' }}>*</span></label>
                <input type="text" className="form-control" name="hasil" />
            </div>
            <div className="form-group">
                <label>Tanggal Pengajuan<span style={{ color: 'red' }}>*</span></label>
                <input type="date" className="form-control" name="tanggalPengajuan" />
            </div>
            <input type="hidden" name="pasien.id" value={props.pasien.id} />
            <button className="btn btn-success" value="submit">Add Lab Result</button>
        </form>
    )
}
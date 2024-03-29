document.getElementById('ya').addEventListener('click', () => {
    document.getElementById('judul').innerHTML = 'Anda Berbohong !';
    document.getElementById('card').style.backgroundColor = 'red';
    document.getElementById('buttons').style.visibility = 'hidden';
    document.getElementById('pertanyaan').innerHTML = 'Anda adalah seorang Teknisi';
    document.getElementById('profesi-image').src = 'src/assets/teknisi.png';
})

document.getElementById('tidak').addEventListener('click', () => {
    document.getElementById('judul').innerHTML = 'Anda Benar !';
    document.getElementById('card').style.backgroundColor = '#6FD240';
    document.getElementById('buttons').style.visibility = 'hidden';
    document.getElementById('pertanyaan').innerHTML = 'Anda adalah seorang Mahasiswa';
    document.getElementById('profesi-image').src = 'src/assets/mahasiswa.png';
})
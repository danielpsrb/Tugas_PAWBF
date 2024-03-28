function validateForm() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const laundryType = document.getElementById("laundry_type").value;
    const estimatedDay = document.getElementById("estimated_day").value;

    // Validasi nama: harus berupa minimal 3 huruf
    if (name.length < 3) {
        Swal.fire({
            icon: 'warning',
            title: 'Field Nama tidak sesuai',
            text: 'Nama tidak boleh kosong, minimal harus 3 huruf',
        });
        return false;
    }

    // Validasi nama: harus berisi hanya huruf dan spasi
    var nameRegex = /^[a-zA-Z\s]*$/;
    if (!nameRegex.test(name)) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid name',
            text: 'Nama hanya boleh berisi huruf dan spasi.',
        });
        return false;
    }

    if (name === "" || laundryType === "" || estimatedDay === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Harap isi semua field.',
        });
        return false;
    }
    return true;
}

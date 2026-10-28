document.getElementById('load-flights-btn').addEventListener('click', function() {
    const loader = document.getElementById('loader');
    const tableContainer = document.getElementById('table-container');
    const tableBody = document.getElementById('flights-data-body');
    
    // إظهار الـ Loader وإخفاء الجدول القديم
    loader.classList.remove('hidden');
    tableContainer.classList.add('hidden');
    tableBody.innerHTML = '';

    // محاكاة جلب حقيقي للبيانات من سيرفر طيران لمدة 1.2 ثانية
    setTimeout(() => {
        // بيانات طيران ديناميكية بصيغة JSON تشبه الـ APIs العالمية للطيران
        const flightsData = [
            { id: "TU 714", line: "Tunisair", dest: "Paris (CDG)", status: "En Vol", class: "en-vol" },
            { id: "AF 1125", line: "Air France", dest: "Tunis (TUN)", status: "Atterri", class: "atterri" },
            { id: "MS 843", line: "EgyptAir", dest: "Cairo (CAI)", status: "Retardé", class: "retard" },
            { id: "EK 748", line: "Emirates", dest: "Dubai (DXB)", status: "En Vol", class: "en-vol" }
        ];

        loader.classList.add('hidden');
        tableContainer.classList.remove('hidden');

        // بناء صفوف الجدول ديناميكياً باستخدام الـ DOM
        flightsData.forEach(flight => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><strong>${flight.id}</strong></td>
                <td>${flight.line}</td>
                <td>${flight.dest}</td>
                <td><span class="status-badge ${flight.class}">${flight.status}</span></td>
            `;
            tableBody.appendChild(row);
        });

    }, 1200);
});

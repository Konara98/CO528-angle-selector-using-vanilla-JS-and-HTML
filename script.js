document.addEventListener('DOMContentLoaded', () => {
    const angleInput = document.getElementById('angleInput');
    const angleSlider = document.getElementById('angleSlider');
    const angleRadios = document.querySelectorAll('input[name="angleRadio"]');

    // Update slider and radio buttons when text box changes
    angleInput.addEventListener('input', (e) => {
        let value = Math.max(0, Math.min(360, e.target.value));
        angleInput.value = value;
        angleSlider.value = value;
        updateRadios(value);
    });

    // Update text box and radio buttons when slider changes
    angleSlider.addEventListener('input', (e) => {
        let value = e.target.value;
        angleInput.value = value;
        updateRadios(value);
    });

    // Update text box and slider when radio button changes
    angleRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.checked) {
                let value = e.target.value;
                angleInput.value = value;
                angleSlider.value = value;
            }
        });
    });

    // Update selected radio button based on value
    function updateRadios(value) {
        angleRadios.forEach(radio => {
            radio.checked = (radio.value == value);
        });
    }
});

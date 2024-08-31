document.addEventListener("DOMContentLoaded", function () {
    const angleInput = document.getElementById("angleInput");
    const angleSlider = document.getElementById("angleSlider");
    const commonAngles = document.getElementsByName("angle");

    // Update the angle input and slider based on the radio button selection
    function updateFromRadioButton(value) {
        angleInput.value = value;
        updateSlider(value);
    }

    // Update the slider when the angle input changes
    function updateSlider(value) {
        let sliderValue = (value == 0) ? 180 : (value / 2) + 180;
        angleSlider.value = sliderValue;
    }

    // Update the radio buttons when the value changes
    function updateRadioButtons(value) {
        commonAngles.forEach(button => {
            button.checked = (button.value == value);
        });
    }

    // Event listeners
    angleInput.addEventListener("input", function () {
        let value = Math.max(0, Math.min(360, angleInput.value)); // Ensure value is between 0 and 360
        angleInput.value = value;
        updateSlider(value);
        updateRadioButtons(value);
    });

    angleSlider.addEventListener("input", function () {
        let value = Math.round((angleSlider.value - 180) * 2);
        angleInput.value = value;
        updateRadioButtons(value);
    });

    commonAngles.forEach(button => {
        button.addEventListener("change", function () {
            if (this.checked) {
                updateFromRadioButton(this.value);
            }
        });
    });

    // Initialize slider and radio buttons
    updateSlider(angleInput.value);
    updateRadioButtons(angleInput.value);
});
